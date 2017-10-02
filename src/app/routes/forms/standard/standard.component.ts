import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-standard',
    templateUrl: './standard.component.html'
})
export class StandardComponent implements OnInit {
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

    rate = 3;

    hotTags: string[] = ['Movie', 'Books', 'Music', 'Sports'];

    selectedTags: string[] = [];

    validateForm: FormGroup;

    controlArray = [];

    isCollapse = true;

    constructor(private fb: FormBuilder) {
        this.selectValue = this.options[0];
    }

    ngOnInit() {
        this.validateForm = this.fb.group({});
        for (let i = 0; i < 10; i++) {
            this.controlArray.push({ index: i, show: i < 6 });
            this.validateForm.addControl(`field${i}`, new FormControl());
        }
    }

    changeCity(value) {
        console.log(value);
    }

    handleChange(checked: boolean, tag: string): void {
        if (checked) {
            this.selectedTags.push(tag);
        } else {
            this.selectedTags = this.selectedTags.filter(t => t !== tag);
        }
        console.log('You are interested in: ', this.selectedTags);
    }

    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
      this.controlArray.forEach((c, index) => {
        c.show = this.isCollapse ? (index < 6) : true;
      });
    }
    
    resetForm() {
      this.validateForm.reset();
    }
}
