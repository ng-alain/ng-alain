import { NzMessageService } from 'ng-zorro-antd';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ArrayObservable } from 'rxjs/observable/ArrayObservable';
import { map, groupBy, concatMap, mergeMap, flatMap, delay, tap, toArray } from 'rxjs/operators';
import * as moment from 'moment';
import { NoticeItem } from '@delon/abc';
import { SettingsService } from '@delon/theme';

/**
 * 菜单通知
 */
@Component({
    selector: 'header-notify',
    template: `
    <notice-icon
        [data]="data"
        [count]="count"
        [loading]="loading"
        (select)="select($event)"
        (clear)="clear($event)"
        (popupVisibleChange)="loadData($event)"></notice-icon>
    `
})
export class HeaderNotifyComponent implements OnInit {

    data: NoticeItem[] = [
        { title: '通知', list: [], emptyText: '你已查看所有通知', emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg' },
        { title: '消息', list: [], emptyText: '您已读完所有消息', emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg' },
        { title: '待办', list: [], emptyText: '你已完成所有待办', emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg' }
    ];
    count = 0;
    loading = false;

    constructor(private msg: NzMessageService, private settings: SettingsService) {}

    ngOnInit() {
        // mock data
        this.count = this.settings.user.notifyCount || 12;
    }

    private parseGroup(data: Observable<any[]>) {
        console.log('parseGroup');
        data.pipe(
                concatMap((i: any) => i),
                map((i: any) => {
                    if (i.datetime) i.datetime = moment(i.datetime).fromNow();
                    // change to color
                    if (i.status) {
                        i.color = ({
                            todo: '',
                            processing: 'blue',
                            urgent: 'red',
                            doing: 'gold',
                        })[i.status];
                    }
                    return i;
                }),
                groupBy((x: any) => x.type),
                mergeMap(g => g.pipe(toArray())),
                tap((ls: any) => {
                    this.data.find(w => w.title === ls[0].type).list = ls;
                })
            ).subscribe(res => this.loading = false);
    }

    loadData(res) {
        if (!res || this.loading) return;
        this.loading = true;
        // region: mock http request
        this.parseGroup(ArrayObservable.of([{
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
        ]).pipe(delay(1000)));
        // endregion
    }

    clear(type: string) {
        this.msg.success(`清空了 ${type}`);
    }

    select(res: any) {
        this.msg.success(`点击了 ${res.title} 的 ${res.item.title}`);
    }
}
