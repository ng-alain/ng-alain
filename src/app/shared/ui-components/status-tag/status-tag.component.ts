import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { I18NService } from '@core';
import { InputBoolean } from '@delon/util';

import { AdminStatus, OrderStatus, UserStatus } from '../../constants/status.constant';

@Component({
  selector: 'uic-status-tag',
  encapsulation: ViewEncapsulation.None,
  template: `
    <nz-tag *ngIf="!multipleTag" [nzColor]="tagColor" [ngStyle]="tagStyle" nzNoAnimation>{{ tagLabel | i18n }}</nz-tag>
    <ng-container *ngIf="multipleTag">
      <nz-tag *ngFor="let tag of tagLabel; let i = index" [nzColor]="tagColor[i]" [ngStyle]="tagStyle" nzNoAnimation>{{
        tag | i18n
      }}</nz-tag>
    </ng-container>
  `
})
export class StatusTagComponent implements OnChanges {
  constructor(private translate: I18NService) {}

  @Input() nzType?: string | any;
  @Input() @InputBoolean() nzIsOrderStatus?: boolean;
  @Input() @InputBoolean() nzIsAdminStatus: boolean = false;
  @Input() @InputBoolean() nzIsUserStatus: boolean = false;
  @Input() @InputBoolean() nzIsGoalStatus: boolean = false;
  @Input() @InputBoolean() nzIsPaymentStatus: boolean = false;

  tagStyle = {};
  tagLabel: string = '';
  tagColor: string = '';
  multipleTag: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['nzType'] && this.nzType) {
      switch (true) {
        case this.nzIsOrderStatus:
          this.initOrderStatus();
          break;
        case this.nzIsAdminStatus:
          this.initAdminStatus();
          break;
        case this.nzIsUserStatus:
          this.initUserStatus();
          break;
        case this.nzIsGoalStatus:
          this.initGoalStatus();
          break;
        case this.nzIsPaymentStatus:
          this.initOrderStatus();
          break;
      }
    }
  }

  // private initOrderStatus() {
  //   const type = this.nzType;
  //   switch (type) {
  //     case OrderStatus.COMPLETE:
  //       this.tagLabel = 'status.approved';
  //       this.tagColor = 'success';
  //       break;
  //     case OrderStatus.PENDING:
  //       this.tagLabel = 'status.pending';
  //       this.tagColor = 'processing';
  //       break;
  //     case OrderStatus.FAILED:
  //       this.tagLabel = 'status.rejected';
  //       this.tagColor = 'error';
  //       break;
  //     default:
  //       this.tagLabel = this.nzType || '';
  //   }
  // }

  private initAdminStatus() {
    const type = this.nzType;
    switch (type) {
      case AdminStatus.ACTIVE:
        this.tagLabel = 'Active';
        this.tagColor = 'green';
        break;
      case AdminStatus.INACTIVE:
        this.tagLabel = 'Inactive';
        this.tagColor = 'red';
        break;
    }
  }

  private initUserStatus() {
    const type = this.nzType;
    switch (type) {
      case UserStatus.ACTIVE:
        this.tagLabel = 'Active';
        this.tagColor = 'success';
        break;
      case UserStatus.PENDING:
        this.tagLabel = 'Pending';
        this.tagColor = 'processing';
        break;
      case UserStatus.INACTIVE:
        this.tagLabel = 'Inactive';
        this.tagColor = 'error';
        break;
      case UserStatus.SUSPENDED:
        this.tagLabel = 'Suspended';
        this.tagColor = 'warning';
        break;
      case UserStatus.UNVERIFIED:
        this.tagLabel = 'Unverified';
        this.tagColor = '#f3f3f3';
        this.tagStyle = {
          color: 'grey',
          'border-color': 'grey'
        };
        break;
      case UserStatus.TERMINATED:
        this.tagLabel = 'Terminated';
        this.tagColor = '#a10ff5';
        break;
      default:
        this.tagLabel = this.nzType || '';
    }
  }

  private initGoalStatus() {
    const type = this.nzType;
    switch (type) {
      case 'Y':
        this.tagLabel = 'Pass';
        this.tagColor = 'green';
        break;
      case 'N':
        this.tagLabel = 'Fail';
        this.tagColor = 'red';
        break;
    }
  }

  private initOrderStatus() {
    const type = this.nzType;
    switch (type) {
      case 'C':
        this.tagLabel = 'Matched';
        this.tagColor = 'green';
        break;
      case 'F':
        this.tagLabel = 'Not Matched';
        this.tagColor = 'red';
        break;
      case 'P':
        this.tagLabel = 'Pending for Confirmaton';
        this.tagColor = 'yellow';
        break;
    }
  }
}
