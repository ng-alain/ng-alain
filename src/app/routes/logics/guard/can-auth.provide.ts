import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable()
export class CanAuthProvide implements CanActivate {

    constructor(private userSrv: UserService, private msg: NzMessageService) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return new Observable((observer) => {
            if (this.userSrv.isLogin) {
                observer.next(true);
                observer.complete();
                return;
            }

            this.msg.error('请先登录');
            observer.next(false);
            observer.complete();
        });
    }

}
