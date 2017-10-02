import { NzMessageService } from 'ng-zorro-antd';
import { Component } from '@angular/core';

@Component({
    selector: 'app-widgets',
    templateUrl: './widgets.component.html',
    styleUrls: ['./widgets.component.less']
})
export class WidgetsComponent {

    sparkOptions1 = {
        barColor: '#fff',
        height: 30,
        barWidth: '3',
        barSpacing: '2'
    };

    sparkOptions2 = {
        type: 'line',
        height: 80,
        width: '100%',
        lineWidth: 2,
        lineColor: '#ececec',
        highlightLineColor: '#fff',
        spotColor: '#bbb',
        spotRadius: 3,
        fillColor: '',
        resize: true
    };

    sparkOptions3 = {
        barColor: '#fff',
        height: 50,
        barWidth: 6,
        barSpacing: 6
    };

    todoData: any[] = [
        { completed: true, avatar: '1', name: '苏先生', content: `请告诉我，我应该说点什么好？` },
        { completed: false, avatar: '2', name: 'はなさき', content: `ハルカソラトキヘダツヒカリ` },
        { completed: false, avatar: '3', name: 'cipchk', content: `this world was never meant for one as beautiful as you.` },
        { completed: false, avatar: '4', name: 'Kent', content: `my heart is beating with hers` },
        { completed: false, avatar: '5', name: 'Are you', content: `They always said that I love beautiful girl than my friends` },
        { completed: false, avatar: '6', name: 'Forever', content: `Walking through green fields ，sunshine in my eyes.` }
    ];

    like = false;

    dislike = false;

    constructor(public msg: NzMessageService) {

    }
}
