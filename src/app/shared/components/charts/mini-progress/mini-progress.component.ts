import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'mini-progress',
    template: `
    <nz-tooltip [nzTitle]="'目标值: ' + target + '%'">
        <div nz-tooltip class="target" [ngStyle]="{'left.%': target}">
            <span [ngStyle]="{'background-color': color}"></span>
            <span [ngStyle]="{'background-color': color}"></span>
        </div>
    </nz-tooltip>
    <div class="progress-wrap">
        <div class="progress" [ngStyle]="{'background-color': color, 'width.%': percent, 'height.px':strokeWidth}"></div>
    </div>
    `,
    styleUrls: [ './mini-progress.less' ],
    encapsulation: ViewEncapsulation.Emulated
})
export class MiniProgressComponent {

    // region: fields

    @Input() color = '#1890FF';

    @Input() target: number;

    @Input() strokeWidth: number;

    @Input() percent: number;

    // endregion
}
