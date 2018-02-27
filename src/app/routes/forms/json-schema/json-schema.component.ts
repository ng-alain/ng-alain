import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 'app-json-schema',
    templateUrl: './json-schema.component.html'
})
export class JSONSchemaComponent {
    actions = {
        send: (form: any) => {
            this.msg.success(JSON.stringify(form.value));
        },
        reset: (form: any) => {
            form.reset({});
        }
    };

    schema = {
        properties: {
            email: {
                type: 'string',
                title: '邮箱',
                format: 'email',
                description: '请输入邮箱，最多20个字符',
                showDescription: true,
                maxLength: 20
            },
            name: {
                type: 'string',
                title: '姓名',
                description: '请输入姓名，3个字以上',
                minLength: 3
            },
            age: {
                type: 'number',
                title: '年龄',
                widget: {
                    id: 'number',
                    min: 18
                }
            },
            intro: {
                type: 'string',
                title: '详情',
                widget: {
                    id: 'tinymce'
                }
            }
        },
        required: ['name', 'email'],
        button: {
            items: [
                {
                    label: '保存',
                    id: 'send',
                    submit: true
                },
                {
                    label: '重置',
                    id: 'reset'
                }
            ]
        }
    };
    value = {};
    model = { email: 'cipchk@qq.com' };

    constructor(private msg: NzMessageService) {}
}
