import { Component, HostListener } from '@angular/core';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { LocalStorageService } from 'angular-web-storage';

@Component({
    selector: 'header-storage',
    template: `
    <i class="anticon anticon-tool"></i>
    {{ 'clear-local-storage' | translate}}`
})
export class HeaderStorageComponent {

    constructor(
        private confirmServ: NzModalService,
        private storageServ: LocalStorageService,
        private messageServ: NzMessageService
    ) {
    }

    @HostListener('click')
    _click() {
        this.confirmServ.confirm({
            title: 'Make sure clear all local storage?',
            onOk: () => {
                this.storageServ.clear();
                this.messageServ.success('Clear Finished!');
            }
        });
    }
}
