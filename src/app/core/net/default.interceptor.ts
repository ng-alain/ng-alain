import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler,
         HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent,
       } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
import { environment } from '@env/environment';

/**
 * 默认HTTP拦截器，其注册细节见 `app.module.ts`
 */
@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {}

    private goLogin() {
        const router = this.injector.get(Router);
        this.injector.get(Router).navigate([ '/login' ]);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

        // 统一加上服务端前缀
        let url = req.url;
        if (!url.startsWith('https://') && !url.startsWith('http://')) {
            url = environment.SERVER_URL + url;
        }

        const newReq = req.clone({
            url: url
        });

        return next.handle(newReq).pipe(
                    mergeMap((event: any) => {
                        // 允许统一对请求错误处理，这是因为一个请求若是业务上错误的情况下其HTTP请求的状态是200的情况下需要
                        if (event instanceof HttpResponse && event.status !== 200) {
                            // 业务错误处理，ng-alain
                            // return of(<any>{ status: 1 });
                        }
                        // 若一切都正常，则后续操作
                        return of(event);
                    }),
                    catchError((res: HttpResponse<any>) => {
                        // 业务处理：一些通用操作
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
                        // 返回错误状态码
                        return of(<any>{ status: res.status });
                    })
                );
    }
}
