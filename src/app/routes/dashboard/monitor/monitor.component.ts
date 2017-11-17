import { Component, OnInit, OnDestroy } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { getTimeDistance, yuan, fixedZero } from 'app/utils/utils';
import { getFakeChartData } from '../../../../../_mock/chart.service';

@Component({
    selector: 'app-dashboard-monitor',
    templateUrl: './monitor.component.html',
    styleUrls: ['./monitor.component.less']
})
export class DashboardMonitorComponent implements OnInit, OnDestroy {
    data: any = {
    };
    loading = true;
    q: any = {
        start: null,
        end: null
    };
    lastTotalConfig = {
        leftTime: 30,
        template: `$!h!:$!m!:$!s!`
    };

    // from [http://jsfiddle.net/uTSqT/12/]
    tags = [
        {
            'name': '阿里地区',
            'value': 99,
            'type': 2
        },
        {
            'name': '宝鸡市',
            'value': 17,
            'type': 0
        },
        {
            'name': '阿里地区',
            'value': 92,
            'type': 1
        },
        {
            'name': '七台河市',
            'value': 83,
            'type': 2
        },
        {
            'name': '铜仁市',
            'value': 79,
            'type': 1
        },
        {
            'name': '海南藏族自治州',
            'value': 92,
            'type': 1
        },
        {
            'name': '铜仁市',
            'value': 78,
            'type': 0
        },
        {
            'name': '大同市',
            'value': 86,
            'type': 0
        },
        {
            'name': '九江市',
            'value': 18,
            'type': 0
        },
        {
            'name': '鹤壁市',
            'value': 13,
            'type': 0
        },
        {
            'name': '泸州市',
            'value': 17,
            'type': 1
        },
        {
            'name': '白银市',
            'value': 52,
            'type': 2
        },
        {
            'name': '南京市',
            'value': 82,
            'type': 0
        },
        {
            'name': '北海市',
            'value': 3,
            'type': 2
        },
        {
            'name': '清远市',
            'value': 62,
            'type': 1
        },
        {
            'name': '邵阳市',
            'value': 38,
            'type': 1
        },
        {
            'name': '日喀则地区',
            'value': 35,
            'type': 2
        },
        {
            'name': '连云港市',
            'value': 62,
            'type': 2
        },
        {
            'name': '果洛藏族自治州',
            'value': 51,
            'type': 1
        },
        {
            'name': '黄南藏族自治州',
            'value': 50,
            'type': 1
        },
        {
            'name': '安顺市',
            'value': 94,
            'type': 1
        },
        {
            'name': '海外',
            'value': 95,
            'type': 0
        },
        {
            'name': '临夏回族自治州',
            'value': 37,
            'type': 1
        },
        {
            'name': '固原市',
            'value': 44,
            'type': 2
        },
        {
            'name': '澎湖县',
            'value': 49,
            'type': 0
        },
        {
            'name': '天津市',
            'value': 95,
            'type': 0
        },
        {
            'name': '上海市',
            'value': 50,
            'type': 1
        },
        {
            'name': '湖州市',
            'value': 19,
            'type': 2
        },
        {
            'name': '克孜勒苏柯尔克孜自治州',
            'value': 86,
            'type': 0
        },
        {
            'name': '天津市',
            'value': 97,
            'type': 1
        },
        {
            'name': '宜宾市',
            'value': 42,
            'type': 2
        },
        {
            'name': '张家界市',
            'value': 11,
            'type': 1
        },
        {
            'name': '乐山市',
            'value': 19,
            'type': 0
        },
        {
            'name': '保定市',
            'value': 17,
            'type': 2
        },
        {
            'name': '重庆市',
            'value': 16,
            'type': 1
        },
        {
            'name': '海外',
            'value': 96,
            'type': 1
        },
        {
            'name': '韶关市',
            'value': 94,
            'type': 1
        },
        {
            'name': '嘉兴市',
            'value': 49,
            'type': 1
        },
        {
            'name': '来宾市',
            'value': 72,
            'type': 1
        },
        {
            'name': '晋城市',
            'value': 97,
            'type': 2
        },
        {
            'name': '日喀则地区',
            'value': 39,
            'type': 0
        },
        {
            'name': '哈尔滨市',
            'value': 92,
            'type': 1
        },
        {
            'name': '承德市',
            'value': 66,
            'type': 1
        },
        {
            'name': '临汾市',
            'value': 11,
            'type': 1
        },
        {
            'name': '防城港市',
            'value': 43,
            'type': 0
        },
        {
            'name': '日喀则地区',
            'value': 53,
            'type': 1
        },
        {
            'name': '铜陵市',
            'value': 9,
            'type': 1
        },
        {
            'name': '阳泉市',
            'value': 50,
            'type': 1
        },
        {
            'name': '金昌市',
            'value': 17,
            'type': 1
        },
        {
            'name': '防城港市',
            'value': 2,
            'type': 1
        },
        {
            'name': '铁岭市',
            'value': 93,
            'type': 0
        },
        {
            'name': '厦门市',
            'value': 3,
            'type': 1
        },
        {
            'name': '石嘴山市',
            'value': 21,
            'type': 1
        },
        {
            'name': '呼和浩特市',
            'value': 66,
            'type': 2
        },
        {
            'name': '内江市',
            'value': 45,
            'type': 1
        },
        {
            'name': '泉州市',
            'value': 36,
            'type': 2
        },
        {
            'name': '固原市',
            'value': 95,
            'type': 2
        },
        {
            'name': '巴音郭楞蒙古自治州',
            'value': 50,
            'type': 1
        },
        {
            'name': '湖州市',
            'value': 39,
            'type': 2
        },
        {
            'name': '澳门半岛',
            'value': 36,
            'type': 1
        },
        {
            'name': '玉树藏族自治州',
            'value': 18,
            'type': 1
        },
        {
            'name': '盐城市',
            'value': 86,
            'type': 1
        },
        {
            'name': '中卫市',
            'value': 33,
            'type': 1
        },
        {
            'name': '塔城地区',
            'value': 66,
            'type': 1
        },
        {
            'name': '常州市',
            'value': 41,
            'type': 0
        },
        {
            'name': '北京市',
            'value': 8,
            'type': 0
        },
        {
            'name': '伊春市',
            'value': 38,
            'type': 2
        },
        {
            'name': '信阳市',
            'value': 96,
            'type': 1
        },
        {
            'name': '曲靖市',
            'value': 52,
            'type': 1
        },
        {
            'name': '嘉义市',
            'value': 68,
            'type': 0
        },
        {
            'name': '抚顺市',
            'value': 20,
            'type': 2
        },
        {
            'name': '舟山市',
            'value': 50,
            'type': 2
        },
        {
            'name': '营口市',
            'value': 41,
            'type': 1
        },
        {
            'name': '屏东县',
            'value': 26,
            'type': 1
        },
        {
            'name': '重庆市',
            'value': 58,
            'type': 1
        },
        {
            'name': '齐齐哈尔市',
            'value': 80,
            'type': 1
        },
        {
            'name': '北海市',
            'value': 70,
            'type': 1
        },
        {
            'name': '双鸭山市',
            'value': 18,
            'type': 0
        },
        {
            'name': '白山市',
            'value': 64,
            'type': 1
        },
        {
            'name': '青岛市',
            'value': 99,
            'type': 0
        },
        {
            'name': '伊春市',
            'value': 95,
            'type': 0
        },
        {
            'name': '天津市',
            'value': 55,
            'type': 1
        },
        {
            'name': '上饶市',
            'value': 63,
            'type': 1
        },
        {
            'name': '南京市',
            'value': 32,
            'type': 2
        },
        {
            'name': '九江市',
            'value': 23,
            'type': 2
        },
        {
            'name': '固原市',
            'value': 30,
            'type': 0
        },
        {
            'name': '阜新市',
            'value': 43,
            'type': 2
        },
        {
            'name': '鹰潭市',
            'value': 86,
            'type': 1
        },
        {
            'name': '开封市',
            'value': 86,
            'type': 2
        },
        {
            'name': '铜陵市',
            'value': 13,
            'type': 1
        },
        {
            'name': '广安市',
            'value': 40,
            'type': 1
        },
        {
            'name': '吉林市',
            'value': 72,
            'type': 2
        },
        {
            'name': '吴忠市',
            'value': 9,
            'type': 2
        },
        {
            'name': '南平市',
            'value': 22,
            'type': 2
        },
        {
            'name': '秦皇岛市',
            'value': 81,
            'type': 1
        },
        {
            'name': '齐齐哈尔市',
            'value': 3,
            'type': 1
        },
        {
            'name': '张家口市',
            'value': 50,
            'type': 0
        },
        {
            'name': '河池市',
            'value': 74,
            'type': 2
        },
        {
            'name': '九龙',
            'value': 50,
            'type': 1
        },
        {
            'name': '佳木斯市',
            'value': 56,
            'type': 1
        }
    ];

    constructor(public msg: NzMessageService) {}

    ngOnInit() {
        setTimeout(() => {
            this.data = getFakeChartData;
            this.loading = false;
        }, 500);

        // active chart
        this.genActiveData();
        this.activeTime$ = setInterval(() => this.genActiveData(), 1000);
    }

    // region: active chart

    activeTime$: any;

    activeYAxis = {
        tickCount: 3,
        tickLine: false,
        labels: false,
        title: false,
        line: false
    };

    activeData: any[] = [];

    activeStat = {
        max: 0,
        min: 0,
        t1: '',
        t2: ''
    };

    genActiveData() {
        const activeData = [];
        for (let i = 0; i < 24; i += 1) {
            activeData.push({
                x: `${fixedZero(i)}:00`,
                y: (i * 50) + (Math.floor(Math.random() * 200)),
            });
        }
        this.activeData = activeData;
        // stat
        this.activeStat.max = [...activeData].sort()[activeData.length - 1].y + 200;
        this.activeStat.min = [...activeData].sort()[Math.floor(activeData.length / 2)].y;
        this.activeStat.t1 = activeData[Math.floor(activeData.length / 2)].x;
        this.activeStat.t2 = activeData[activeData.length - 1].x;
    }

    // endregion

    couponFormat(val: any) {
        switch (parseInt(val, 10)) {
            case 20:
              return '差';
            case 40:
              return '中';
            case 60:
              return '良';
            case 80:
              return '优';
            default:
              return '';
        }
    }

    ngOnDestroy(): void {
        if (this.activeTime$) clearInterval(this.activeTime$);
    }
}
