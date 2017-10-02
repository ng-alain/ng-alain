import { Router } from '@angular/router';
import { UserService } from './user.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Component } from '@angular/core';

@Component({
    selector: 'app-guard',
    templateUrl: './guard.component.html'
})
export class GuardComponent {
    constructor(public userSrv: UserService, private router: Router) {}

    toggleLogin() {
        if (this.userSrv.isLogin) {
            this.userSrv.logout();
        } else {
            this.userSrv.login('admin');
        }

        this.router.navigate([ '/logics/guard' ]);
    }

    toggleRule() {
        if (this.userSrv.hasRole('admin')) {
            this.userSrv.login('employee');
        } else {
            this.userSrv.login('admin');
        }

        this.router.navigate([ '/logics/guard' ]);
    }
}
