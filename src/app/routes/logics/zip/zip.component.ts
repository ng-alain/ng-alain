import { Component, OnInit } from '@angular/core';
import { ZipService } from '@delon/abc';
import * as JSZip from 'jszip';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html'
})
export class ZipComponent {
    constructor(private zip: ZipService, private msg: NzMessageService) {
        this.zip.create().then(ret => this.instance = ret);
    }

    data: any;

    instance: JSZip = null;
    files: { path: string, url: string }[] = [
        { path: 'demo.docx', url: 'http://ng-alain.com/assets/demo.docx' },
        { path: 'img/zorro.svg', url: 'https://ng.ant.design/assets/img/zorro.svg' }
    ];

    private format(data: any) {
        const files = data.files;
        this.data = Object.keys(files).map(key => {
            return {
                name: key,
                dir: files[key].dir,
                date: files[key].date
            };
        });
    }

    url() {
        this.zip.read(`./assets/demo.zip`).then(res => this.format(res));
    }

    change(e: Event) {
        const file = (e.target as HTMLInputElement).files[0];
        this.zip.read(file).then(res => this.format(res));
    }

    download() {
        const promises: Promise<any>[] = [];
        this.files.forEach(item => {
            promises.push(this.zip.pushUrl(this.instance, item.path, item.url));
        });
        Promise.all(promises).then(() => {
            this.zip.save(this.instance).then(() => {
                this.msg.success('download success');
                this.files = [];
            });
        });
    }
}
