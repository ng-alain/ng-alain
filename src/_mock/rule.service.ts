import { Injectable } from '@angular/core';
import { debug } from 'util';

@Injectable()
export class RuleService {
    private list = [];

    constructor() {
        for (let i = 0; i < 46; i += 1) {
            this.list.push({
                key: i,
                disabled: ((i % 6) === 0),
                href: 'https://ant.design',
                avatar: ['https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png', 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png'][i % 2],
                no: `TradeCode ${i}`,
                title: `一个任务名称 ${i}`,
                owner: '曲丽丽',
                description: '这是一段描述',
                callNo: Math.floor(Math.random() * 1000),
                status: Math.floor(Math.random() * 10) % 4,
                updatedAt: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
                createdAt: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
                progress: Math.ceil(Math.random() * 100),
            });
        }
    }

    get(params: any) {
        let ret = [...this.list];
        if (params.sorter) {
            const s = params.sorter.split('_');
            ret = ret.sort((prev, next) => {
                if (s[1] === 'descend') {
                    return next[s[0]] - prev[s[0]];
                }
                return prev[s[0]] - next[s[0]];
            });
        }
        if (params.statusList && params.statusList.length > 0) {
            ret = ret.filter(data => params.statusList.indexOf(data.status) > -1);
        }
        if (params.no) {
            ret = ret.filter(data => data.no.indexOf(params.no) > -1);
        }
        return ret;
    }

    delete(no: string): boolean {
        const idx = this.list.findIndex(w => w.no === no);
        if (idx !== -1) {
            this.list.splice(idx, 1);
            return true;
        }
        return false;
    }

    save(description: string) {
        const i = Math.ceil(Math.random() * 10000);
        this.list.unshift({
          key: i,
          href: 'https://ant.design',
          avatar: ['https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png', 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png'][i % 2],
          no: `TradeCode ${i}`,
          title: `一个任务名称 ${i}`,
          owner: '曲丽丽',
          description,
          callNo: Math.floor(Math.random() * 1000),
          status: Math.floor(Math.random() * 10) % 2,
          updatedAt: new Date(),
          createdAt: new Date(),
          progress: Math.ceil(Math.random() * 100),
        });
    }
}
