import { Component, HostListener } from '@angular/core';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 'header-storage',
    template: `
    <i class="anticon anticon-tool"></i>
    {{ 'clear-local-storage' | translate}}`
})
export class HeaderStorageComponent {

    constructor(
        private confirmServ: NzModalService,
        private messageServ: NzMessageService
    ) {
    }

    @HostListener('click')
    _click() {
        this.confirmServ.confirm({
            title: 'Make sure clear all local storage?',
            onOk: () => {
                localStorage.clear();
                this.messageServ.success('Clear Finished!');
            }
        });
    }
}
