import { Component } from '@angular/core';

@Component({
    selector: 'header-task',
    template: `
    <nz-dropdown nzTrigger="click" nzPlacement="bottomRight" (nzVisibleChange)="change()">
        <div class="item" nz-dropdown>
            <nz-badge [nzDot]="true">
                <i class="anticon anticon-bell"></i>
            </nz-badge>
        </div>
        <div nz-menu class="wd-lg">
            <nz-card nzTitle="Notifications" [nzLoading]="loading" class="ant-card__body-nopadding">
                <ng-template #extra><i class="anticon anticon-plus"></i></ng-template>
                <div nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm bg-grey-lighter-h point">
                    <div nz-col [nzSpan]="4" class="text-center">
                        <nz-avatar [nzSrc]="'./assets/img/1.png'"></nz-avatar>
                    </div>
                    <div nz-col [nzSpan]="20">
                        <strong>cipchk</strong>
                        <p class="mb0">Please tell me what happened in a few words, don't go into details.</p>
                    </div>
                </div>
                <div nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm bg-grey-lighter-h point">
                    <div nz-col [nzSpan]="4" class="text-center">
                        <nz-avatar [nzSrc]="'./assets/img/2.png'"></nz-avatar>
                    </div>
                    <div nz-col [nzSpan]="20">
                        <strong>はなさき</strong>
                        <p class="mb0">ハルカソラトキヘダツヒカリ </p>
                    </div>
                </div>
                <div nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm bg-grey-lighter-h point">
                    <div nz-col [nzSpan]="4" class="text-center">
                        <nz-avatar [nzSrc]="'./assets/img/3.png'"></nz-avatar>
                    </div>
                    <div nz-col [nzSpan]="20">
                        <strong>苏先生</strong>
                        <p class="mb0">请告诉我，我应该说点什么好？</p>
                    </div>
                </div>
                <div nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm bg-grey-lighter-h point">
                    <div nz-col [nzSpan]="4" class="text-center">
                        <nz-avatar [nzSrc]="'./assets/img/4.png'"></nz-avatar>
                    </div>
                    <div nz-col [nzSpan]="20">
                        <strong>Kent</strong>
                        <p class="mb0">Please tell me what happened in a few words, don't go into details.</p>
                    </div>
                </div>
                <div nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm bg-grey-lighter-h point">
                    <div nz-col [nzSpan]="4" class="text-center">
                        <nz-avatar [nzSrc]="'./assets/img/5.png'"></nz-avatar>
                    </div>
                    <div nz-col [nzSpan]="20">
                        <strong>Jefferson</strong>
                        <p class="mb0">Please tell me what happened in a few words, don't go into details.</p>
                    </div>
                </div>
                <div nz-row class="pt-lg pb-lg">
                    <div nz-col [nzSpan]="24" class="border-top-1 text-center text-grey point">
                        See All
                    </div>
                </div>
            </nz-card>
        </div>
    </nz-dropdown>
    `
})
export class HeaderTaskComponent {

    loading = true;

    change() {
        setTimeout(() => this.loading = false, 500);
    }

}
