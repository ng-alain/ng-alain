import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@Component({
  selector: 'header-task',
  template: `
    <div
      class="alain-default__nav-item"
      nz-dropdown
      [nzDropdownMenu]="taskMenu"
      nzTrigger="click"
      nzPlacement="bottomRight"
      (nzVisibleChange)="change()"
    >
      <nz-badge [nzDot]="true">
        <i nz-icon nzType="bell" class="alain-default__nav-item-icon"></i>
      </nz-badge>
    </div>
    <nz-dropdown-menu #taskMenu="nzDropdownMenu">
      <div nz-menu class="wd-lg">
        @if (loading) {
          <div class="mx-lg p-lg"><nz-spin /></div>
        } @else {
          <nz-card nzTitle="Notifications" nzBordered="false" class="ant-card__body-nopadding">
            <ng-template #extra><i nz-icon nzType="plus"></i></ng-template>
            <div nz-row [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm pr-md point bg-grey-lighter-h">
              <div nz-col [nzSpan]="4" class="text-center">
                <nz-avatar [nzSrc]="'./assets/tmp/img/1.png'" />
              </div>
              <div nz-col [nzSpan]="20">
                <strong>cipchk</strong>
                <p class="mb0">Please tell me what happened in a few words, don't go into details.</p>
              </div>
            </div>
            <div nz-row [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm pr-md point bg-grey-lighter-h">
              <div nz-col [nzSpan]="4" class="text-center">
                <nz-avatar [nzSrc]="'./assets/tmp/img/2.png'" />
              </div>
              <div nz-col [nzSpan]="20">
                <strong>はなさき</strong>
                <p class="mb0">ハルカソラトキヘダツヒカリ</p>
              </div>
            </div>
            <div nz-row [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm pr-md point bg-grey-lighter-h">
              <div nz-col [nzSpan]="4" class="text-center">
                <nz-avatar [nzSrc]="'./assets/tmp/img/3.png'" />
              </div>
              <div nz-col [nzSpan]="20">
                <strong>苏先生</strong>
                <p class="mb0">请告诉我，我应该说点什么好？</p>
              </div>
            </div>
            <div nz-row [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm pr-md point bg-grey-lighter-h">
              <div nz-col [nzSpan]="4" class="text-center">
                <nz-avatar [nzSrc]="'./assets/tmp/img/4.png'" />
              </div>
              <div nz-col [nzSpan]="20">
                <strong>Kent</strong>
                <p class="mb0">Please tell me what happened in a few words, don't go into details.</p>
              </div>
            </div>
            <div nz-row [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm pr-md point bg-grey-lighter-h">
              <div nz-col [nzSpan]="4" class="text-center">
                <nz-avatar [nzSrc]="'./assets/tmp/img/5.png'" />
              </div>
              <div nz-col [nzSpan]="20">
                <strong>Jefferson</strong>
                <p class="mb0">Please tell me what happened in a few words, don't go into details.</p>
              </div>
            </div>
            <div nz-row>
              <div nz-col [nzSpan]="24" class="pt-md border-top-1 text-center text-grey point">See All</div>
            </div>
          </nz-card>
        }
      </div>
    </nz-dropdown-menu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgTemplateOutlet, NzDropDownModule, NzBadgeModule, NzIconModule, NzSpinModule, NzGridModule, NzAvatarModule, NzCardModule]
})
export class HeaderTaskComponent {
  private readonly cdr = inject(ChangeDetectorRef);
  loading = true;

  change(): void {
    setTimeout(() => {
      this.loading = false;
      this.cdr.detectChanges();
    }, 500);
  }
}
