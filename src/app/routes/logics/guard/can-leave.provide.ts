import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GuardComponent } from './guard.component';
import { Observable } from 'rxjs/Observable';
import { NzModalService } from 'ng-zorro-antd';

@Injectable()
export class CanLeaveProvide implements CanDeactivate<GuardComponent> {
    constructor (private confirmSrv: NzModalService) {}

    canDeactivate(
        component: GuardComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return new Observable((observer) => {
            this.confirmSrv.confirm({
                title: '确认要离开吗？',
                content: '你已经填写了部分表单离开会放弃已经填写的内容。',
                okText: '离开',
                cancelText: '取消',
                onOk: () => {
                    observer.next(true);
                    observer.complete();
                },
                onCancel: () => {
                    observer.next(false);
                    observer.complete();
                }
            });
        });
    }
}
