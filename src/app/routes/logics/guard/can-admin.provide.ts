import { NzMessageService } from 'ng-zorro-antd';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';

@Injectable()
export class CanAdminProvide implements CanActivate {

    constructor(private userSrv: UserService, private msg: NzMessageService) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return new Observable((observer) => {
            if (this.userSrv.hasRole('admin')) {
                observer.next(true);
                observer.complete();
                return;
            }

            this.msg.error('授权不足');
            observer.next(false);
            observer.complete();
        });
    }

}
