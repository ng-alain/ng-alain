import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TokenService } from './token.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

/**
 * TOKEN拦截器
 * 默认在 `ng-alain` 未注册，若开启需要在相应的模块中注册（建议在根或Core模块中注册）
 * ```typescript
 *  @NgModule({
 *      providers: [ { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true} ]
 *  })
 * ```
 */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {}

    private goLogin() {
        this.injector.get(Router).navigate([ '/login' ]);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        // 过滤授权请求
        if (req.url.includes('/auth')) return next.handle(req);

        // 可以进一步处理，比如：重新刷新或重新登录
        const authData = this.injector.get(TokenService).data;
        if (!authData.access_token) {
            this.goLogin();
            return next.handle(req);
        }

        const tokenReq = req.clone({
            // 正常token值放在请求header当中，具体格式以后端为准
            headers: req.headers.set('Authorization', `Bearer ${authData.access_token}`)
        });

        return next
                .handle(tokenReq)
                .mergeMap((event: any) => {
                    // 允许统一对请求错误处理，这是因为一个请求若是业务上错误的情况下其HTTP请求的状态是200的情况下需要
                    // 【按需求更改】这里是 code 为业务后端业务状态码，0表示成功
                    if (event instanceof HttpResponse && event.body.code !== 0) {
                        // observer.error 会跳转至后面的 `catch`
                        return Observable.create(observer => observer.error(event));
                    }
                    // 若一切都正常，则后续操作
                    return Observable.create(observer => observer.next(event));
                })
                .catch((res: HttpResponse<any>) => {
                    // 一些通用操作
                    switch (res.status) {
                        case 401: // 未登录状态码
                            this.goLogin();
                            break;
                        case 200:
                            // 业务层级错误处理
                            console.log('业务错误');
                            break;
                        case 404:
                            // 404
                            break;
                    }
                    // 以错误的形式结束本次请求
                    return Observable.throw(res);
                })
                ;
    }
}
