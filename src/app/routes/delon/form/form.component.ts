import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { SFUISchema, SFSchema } from '@delon/form';

@Component({
    selector: 'app-delon-form',
    templateUrl: './form.component.html'
})
export class DelonFormComponent {
    formData: any = {
        id: 1,
        other: 'test'
    };
    uiSchema: SFUISchema = {};
    schema: SFSchema = {
        properties: {
            type: { type: 'string', enum: ['mobile', 'name'], default: 'mobile' },
            name: { type: 'string' },
            pwd: { type: 'string' },
            mobile: { type: 'string' },
            code: { type: 'string' }
        },
        required: ['type'],
        if: {
            properties: { type: { enum: ['mobile'] } }
        },
        then: {
            required: ['mobile', 'code']
        },
        else: {
            required: ['name', 'pwd']
        }
    };

    constructor(private msg: NzMessageService) {
    }

    submit(value: any) {
        this.msg.success(JSON.stringify(value));
    }

    change(value: any) {
        // console.log('change', value);
    }

    error(value: any) {
        // console.log('error', value);
    }

}
