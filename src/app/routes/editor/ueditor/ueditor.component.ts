import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ueditor',
    templateUrl: './ueditor.component.html',
    styles: []
})
export class UeditorComponent implements OnInit {
    html = `可能遇到的问题：
    1、全屏功能可能受头部和侧边栏 fixed 的影响，具体的解决办法有待讨论；
    2、图片上传需要配合后端
    3、有关 ueditor 的使用请自行百度
    4、有关二次开发请阅读 https://github.com/cipchk/ngx-ueditor`;

    constructor() {}

    ngOnInit() {}
}
