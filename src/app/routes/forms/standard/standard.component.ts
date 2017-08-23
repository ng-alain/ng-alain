import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-standard',
    templateUrl: './standard.component.html',
    styleUrls: ['./standard.component.scss']
})
export class StandardComponent {
    selectValue;

    options = [
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'disabled', label: 'Disabled', disabled: true }
    ];

    cityValue: any[] = null;
    cities = [{
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [{
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [{
                value: 'xihu',
                label: 'West Lake',
                isLeaf: true
            }],
        }],
    }, {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [{
            value: 'nanjing',
            label: 'Nanjing',
            children: [{
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
                isLeaf: true
            }],
        }],
    }];

    marks = {
        0: 'A',
        25: 'B',
        50: 'C',
        75: 'D',
        100: 'E'
    };

    rate: number = 3;

    constructor() {
        this.selectValue = this.options[0];
    }

    changeCity(value) {
        console.log(value);
    }

    hotTags = ['Movie', 'Books', 'Music', 'Sports'];
    selectedTags = [];

    handleChange(checked: boolean, tag: string): void {
        if (checked) {
            this.selectedTags.push(tag);
        } else {
            this.selectedTags = this.selectedTags.filter(t => t !== tag);
        }
        console.log('You are interested in: ', this.selectedTags);
    }
}
