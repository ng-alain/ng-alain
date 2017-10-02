// tslint:disable
import { NzMessageService } from 'ng-zorro-antd';
import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { saveAs } from 'file-saver';
import { _HttpClient } from '@core/services/http.client';
import { environment } from '../../../environments/environment';

/**
 * 文件下载
 * 
 * ```html
 * <button nz-button down-file http-url="assets/demo{{i}}" file-name="demo中文">{{i}}</button>
 * ```
 */
@Directive({ selector: '[down-file]' })
export class DownFileDirective {

    /** URL请求参数 */
    @Input('http-data') httpData: any;
    /** 下载地址 */
    @Input('http-url') httpUrl: string;
    /** 指定文件名，若为空从服务端返回的 `header` 中获取 `filename`、`x-filename` */
    @Input('file-name') fileName: string;

    constructor(
        private el: ElementRef,
        private http: HttpClient,
        private _http: _HttpClient,
        private msgSrv: NzMessageService) {
    }

    @HostListener('click') _click() {
        this.el.nativeElement.disabled = true;
        this.http.get(environment.SERVER_URL + this.httpUrl, {
            params: this._http.parseParams(this.httpData || {}),
            // TODO: blob 并不会走TOKEN拦截器
            headers: new HttpHeaders({ token: 'test' }),
            responseType: 'blob',
            observe: 'response'
        }).subscribe((res: HttpResponse<Blob>) => {
            if (res.body.size <= 0) {
                this.msgSrv.error(`下载失败`, { nzDuration: 1000 * 3 });
                return;
            }
            const fileName = this.fileName || res.headers.get('filename') || res.headers.get('x-filename');
            saveAs(res.body, decodeURI(fileName));
            this.msgSrv.success('下载成功');
        }, (err) => {
            this.msgSrv.error(`下载失败，${err}`, { nzDuration: 1000 * 3 });
        }, () => {
            this.el.nativeElement.disabled = false;
        });
    }
}
