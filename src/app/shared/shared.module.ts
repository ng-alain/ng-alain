import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// #region libs
// delon
import { AlainThemeModule } from '@delon/theme';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';
import { SidebarNavModule } from '@delon/abc/sidebar-nav';
import { NoticeIconModule } from '@delon/abc/notice-icon';
import { GlobalFooterModule } from '@delon/abc/global-footer';
import { QuickMenuModule } from '@delon/abc/quick-menu';
import { STModule } from '@delon/abc/table';
import { ResultModule } from '@delon/abc/result';
import { PageHeaderModule } from '@delon/abc/page-header';
import { G2MiniBarModule } from '@delon/chart/mini-bar';
import { CountDownModule } from '@delon/abc/count-down';
import { FooterToolbarModule } from '@delon/abc/footer-toolbar';
import { TagSelectModule } from '@delon/abc/tag-select';
import { AvatarListModule } from '@delon/abc/avatar-list';
import { SVModule } from '@delon/abc/view';
import { SGModule } from '@delon/abc/grid';
import { EllipsisModule } from '@delon/abc/ellipsis';
// ng-zorro-antd
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { SEModule } from '@delon/abc/edit';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzUploadModule } from 'ng-zorro-antd/upload';

// i18n
import { TranslateModule } from '@ngx-translate/core';
import { CountdownModule } from 'ngx-countdown';
import { UEditorModule } from 'ngx-ueditor';
import { NgxTinymceModule } from 'ngx-tinymce';

const MODULES = [
  DelonACLModule,
  DelonFormModule,
  SidebarNavModule,
  NoticeIconModule,
  GlobalFooterModule,
  QuickMenuModule,
  STModule,
  CountDownModule,
  PageHeaderModule,
  ResultModule,
  G2MiniBarModule,
  SEModule,
  SVModule,
  SGModule,
  FooterToolbarModule,
  EllipsisModule,
  TagSelectModule,
  AvatarListModule,
  NzMessageModule,
  NzProgressModule,
  NzPopconfirmModule,
  NzPopoverModule,
  NzPaginationModule,
  NzIconModule,
  NzDropDownModule,
  NzAvatarModule,
  NzSwitchModule,
  NzGridModule,
  NzDrawerModule,
  NzDividerModule,
  NzTabsModule,
  NzAlertModule,
  NzToolTipModule,
  NzInputModule,
  NzInputNumberModule,
  NzCardModule,
  NzBadgeModule,
  NzSpinModule,
  NzListModule,
  NzDatePickerModule,
  NzRadioModule,
  NzBreadCrumbModule,
  NzButtonModule,
  NzFormModule,
  NzSelectModule,
  NzTagModule,
  NzTableModule,
  NzNotificationModule,
  NzTimePickerModule,
  NzUploadModule,
  CountdownModule,
  UEditorModule,
  NgxTinymceModule,
];
// #endregion

// #region your componets & directives
const COMPONENTS = [];
const DIRECTIVES = [];
// #endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AlainThemeModule.forChild(),
    // third libs
    ...MODULES,
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AlainThemeModule,
    // i18n
    TranslateModule,
    // third libs
    ...MODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
})
export class SharedModule {}
