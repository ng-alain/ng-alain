import { Component } from '@angular/core';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { ModelCustomComponent } from './custom.component';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
    constructor(
        private model: NzModalService,
        private msg: NzMessageService) { }

    basicModel(contentTpl) {
        this.model.open({
            title: 'Basic Modal',
            content: contentTpl
        });
    }

    confirmModel(contentTpl) {
        this.model.open({
            title: 'Confirm Modal',
            content: contentTpl,
            okText: 'OK',
            cancelText: 'Return',
            onOk: () => {
                this.msg.success('Click OK!')
            },
            onCancel: () => {
                this.msg.error('Click Return!')
            }
        });
    }

    options = {};
    customCompModel(size: '' | 'lg' | 'sm' = '') {
        this.options = {
            wrapClassName: size ? 'modal-' + size : '',
            title: 'Confirm Modal',
            content: ModelCustomComponent,
            footer: false,
            componentParams: {
                name: 'From Parent Data'
            }
        };
        this.model.open(this.options).subscribe(result => {
            if (Array.isArray(result))
                this.msg.info(`subscribe status: ${JSON.stringify(result)}`);
        });
    }

    showModel(type: string) {
        this.model[type]({
            title: `This is a ${type} message`,
            content: `some messages...some messages...`
        })
    }
}
