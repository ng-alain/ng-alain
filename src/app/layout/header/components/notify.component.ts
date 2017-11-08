import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/delay';
// import { groupBy, concatMap, mergeMap, reduce } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
    selector: 'header-notify',
    template: `
    <nz-dropdown nzTrigger="click" nzPlacement="bottomRight" [nzClickHide]="false" (nzVisibleChange)="change($event)">
        <div class="item" nz-dropdown>
            <nz-badge [nzCount]="count">
                <ng-template #content>
                    <i class="anticon anticon-bell"></i>
                </ng-template>
            </nz-badge>
        </div>
        <div nz-menu class="wd-lg min-width-md">
            <nz-card [nzNoHovering]="true" [nzLoading]="loading && isFirstLoading" class="ant-card__body-nopadding">
                <ng-template #body>
                    <nz-tabset>
                        <nz-tab *ngFor="let tab of tabs">
                            <ng-template #nzTabHeading>{{tab.key}}<span *ngIf="tab.count>0">({{tab.count}})</span></ng-template>
                            <nz-spin [nzSpinning]="loading && !isFirstLoading">
                                <ul class="list-group">
                                    <li *ngFor="let i of tab.list" class="list-group-item">
                                    </li>
                                </ul>
                                <p>sdf</p><p>sdf</p><p>sdf</p><p>sdf</p><p>sdf</p>
                                <p>sdf</p><p>sdf</p><p>sdf</p><p>sdf</p>
                            </nz-spin>
                        </nz-tab>
                    </nz-tabset>
                </ng-template>
            </nz-card>
        </div>
    </nz-dropdown>
    `
})
export class HeaderNotifyComponent implements OnInit {

    loading = false;
    isFirstLoading = true;

    @Input() count = 0;
    tabs = [];

    private parseGroup(data: Observable<any[]>) {
        data.concatMap((i: any) => i)
            .map((i: any) => {
                if (i.datetime) i.datetime = moment(i.datetime).fromNow();
                return i;
            })
            .groupBy((x: any) => x.type)
            .flatMap(g$ => g$.toArray())
            .map(ls => {
                return {
                    key: ls[0].type,
                    count: ls.length,
                    list: ls
                };
            })
            .reduce((acc: any, value, index) => {
                if (index === 1) acc = [ acc ];
                acc.push(value);
                return acc;
            })
            .subscribe(res => {
                this.tabs = res;
                this.loading = false;
                this.isFirstLoading = false;
            });
    }

    change(res) {
        if (!res) return;
        this.loading = true;
        // region: mock http request
        this.parseGroup(Observable.of([{
            id: '000000001',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
            title: '你收到了 14 份新周报',
            datetime: '2017-08-09',
            type: '通知',
          }, {
            id: '000000002',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
            title: '你推荐的 曲妮妮 已通过第三轮面试',
            datetime: '2017-08-08',
            type: '通知',
          }, {
            id: '000000003',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
            title: '这种模板可以区分多种通知类型',
            datetime: '2017-08-07',
            read: true,
            type: '通知',
          }, {
            id: '000000004',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
            title: '左侧图标用于区分不同的类型',
            datetime: '2017-08-07',
            type: '通知',
          }, {
            id: '000000005',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
            title: '内容不要超过两行字，超出时自动截断',
            datetime: '2017-08-07',
            type: '通知',
          }, {
            id: '000000006',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
            title: '曲丽丽 评论了你',
            description: '描述信息描述信息描述信息',
            datetime: '2017-08-07',
            type: '消息',
          }, {
            id: '000000007',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
            title: '朱偏右 回复了你',
            description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
            datetime: '2017-08-07',
            type: '消息',
          }, {
            id: '000000008',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
            title: '标题',
            description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
            datetime: '2017-08-07',
            type: '消息',
          }, {
            id: '000000009',
            title: '任务名称',
            description: '任务需要在 2017-01-12 20:00 前启动',
            extra: '未开始',
            status: 'todo',
            type: '待办',
          }, {
            id: '000000010',
            title: '第三方紧急代码变更',
            description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
            extra: '马上到期',
            status: 'urgent',
            type: '待办',
          }, {
            id: '000000011',
            title: '信息安全考试',
            description: '指派竹尔于 2017-01-09 前完成更新并发布',
            extra: '已耗时 8 天',
            status: 'doing',
            type: '待办',
          }, {
            id: '000000012',
            title: 'ABCD 版本发布',
            description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
            extra: '进行中',
            status: 'processing',
            type: '待办',
          }
        ]).delay(1000));
        // endregion
    }

    ngOnInit() {
    }
}
