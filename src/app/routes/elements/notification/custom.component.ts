import { Component, Input } from '@angular/core';
import { NzModalSubject } from "ng-zorro-antd";
@Component({
    selector: 'app-model-custom',
    template: `
    <h3>From Custom Componetn!</h3>
    <p>Input Data: {{name}}</p>
    <div class="mt-md text-right">
        <button nz-button [nzType]="'default'" [nzSize]="'large'" (click)="handleCancel($event)">
            Cancel
        </button>
        <button nz-button [nzType]="'primary'" [nzSize]="'large'" (click)="emitDataOutside()">
            OK
        </button>
    </div>
    `
})
export class ModelCustomComponent {

    @Input() name: string;

    constructor(private subject: NzModalSubject) {
        this.subject.on('onDestory', () => {
            console.log('destroy');
        });
    }

    emitDataOutside() {
        this.subject.destroy('onSuccess');
        this.handleCancel(null);
    }

    handleCancel(e) {
        this.subject.destroy('onCancel');
    }
}
