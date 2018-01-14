import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';

@Component({
    selector: 'app-iconsfont',
    templateUrl: './iconsfont.component.html'
})
export class IconsFontComponent implements OnInit {
    data = [];

    constructor(
        private msg: NzMessageService,
        private http: _HttpClient,
        @Inject(DOCUMENT) private dom: Document, private _el: ElementRef) { }

    ngOnInit(): void {
        this.http.get('./assets/iconsfont.json').subscribe((res: any) => this.data = res);
    }

    copy(group: any, item: any) {
        let copyTextArea = null as HTMLTextAreaElement;
        try {
            copyTextArea = this.dom.createElement('textarea');
            copyTextArea.style.height = '0px';
            copyTextArea.style.opacity = '0';
            copyTextArea.style.width = '0px';
            this.dom.body.appendChild(copyTextArea);
            copyTextArea.value = group.tpl.replace(`{0}`, item.k);
            copyTextArea.select();
            this.dom.execCommand('copy');
            this.msg.success(`Copied Success!`);
        } finally {
            if (copyTextArea && copyTextArea.parentNode) {
                copyTextArea.parentNode.removeChild(copyTextArea);
            }
        }
    }
}
