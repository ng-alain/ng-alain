import { Component } from '@angular/core';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { ModelCustomComponent } from './custom.component';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent {
    options = {};

    constructor(
        private modal: NzModalService,
        private msg: NzMessageService) { }

    basicModel(contentTpl) {
        this.modal.open({
            title: 'Basic Modal',
            content: contentTpl
        });
    }

    confirmModel(contentTpl) {
        this.modal.open({
            title: 'Confirm Modal',
            content: contentTpl,
            okText: 'OK',
            cancelText: 'Return',
            onOk: () => {
                this.msg.success('Click OK!');
            },
            onCancel: () => {
                this.msg.error('Click Return!');
            }
        });
    }

    customCompModel(size: '' | 'lg' | 'sm' = '') {
        this.options = {
            wrapClassName: size ? 'modal-' + size : '',
            content: ModelCustomComponent,
            footer: false,
            componentParams: {
                name: 'From Parent Data'
            }
        };
        this.modal.open(this.options).subscribe(result => {
            this.msg.info(`subscribe status: ${JSON.stringify(result)}`);
        });
    }

    showModel(type: string) {
        this.modal[type]({
            title: `This is a ${type} message`,
            content: `some messages...some messages...`
        });
    }
}
