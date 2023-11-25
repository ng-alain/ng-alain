import { NgModule } from '@angular/core';
import { AvatarListModule } from '@delon/abc/avatar-list';
import { EllipsisModule } from '@delon/abc/ellipsis';
import { FooterToolbarModule } from '@delon/abc/footer-toolbar';
import { ResultModule } from '@delon/abc/result';
import { TagSelectModule } from '@delon/abc/tag-select';
import { CurrencyPipeModule } from '@delon/util/pipes/currency';
import { SharedModule } from '@shared';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzUploadModule } from 'ng-zorro-antd/upload';

import { ProAccountCenterApplicationsComponent } from './account/center/applications/applications.component';
import { ProAccountCenterArticlesComponent } from './account/center/articles/articles.component';
import { ProAccountCenterComponent } from './account/center/center.component';
import { ProAccountCenterProjectsComponent } from './account/center/projects/projects.component';
import { ProAccountSettingsBaseComponent } from './account/settings/base/base.component';
import { ProAccountSettingsBindingComponent } from './account/settings/binding/binding.component';
import { ProAccountSettingsNotificationComponent } from './account/settings/notification/notification.component';
import { ProAccountSettingsSecurityComponent } from './account/settings/security/security.component';
import { ProAccountSettingsComponent } from './account/settings/settings.component';
import { AdvancedFormComponent } from './form/advanced-form/advanced-form.component';
import { BasicFormComponent } from './form/basic-form/basic-form.component';
import { StepFormComponent } from './form/step-form/step-form.component';
import { Step1Component } from './form/step-form/step1.component';
import { Step2Component } from './form/step-form/step2.component';
import { Step3Component } from './form/step-form/step3.component';
import { ProListApplicationsComponent } from './list/applications/applications.component';
import { ProListArticlesComponent } from './list/articles/articles.component';
import { ProBasicListComponent } from './list/basic-list/basic-list.component';
import { ProBasicListEditComponent } from './list/basic-list/edit/edit.component';
import { ProCardListComponent } from './list/card-list/card-list.component';
import { ProListLayoutComponent } from './list/list/list.component';
import { ProListProjectsComponent } from './list/projects/projects.component';
import { ProTableListComponent } from './list/table-list/table-list.component';
import { ProRoutingModule } from './pro-routing.module';
import { ProProfileAdvancedComponent } from './profile/advanced/advanced.component';
import { ProProfileBaseComponent } from './profile/basic/basic.component';
import { ProResultFailComponent } from './result/fail/fail.component';
import { ProResultSuccessComponent } from './result/success/success.component';

const COMPONENTS = [
  BasicFormComponent,
  StepFormComponent,
  AdvancedFormComponent,
  ProTableListComponent,
  ProBasicListComponent,
  ProCardListComponent,
  ProListLayoutComponent,
  ProListArticlesComponent,
  ProListProjectsComponent,
  ProListApplicationsComponent,
  ProProfileBaseComponent,
  ProProfileAdvancedComponent,
  ProResultSuccessComponent,
  ProResultFailComponent,
  ProAccountCenterComponent,
  ProAccountCenterArticlesComponent,
  ProAccountCenterProjectsComponent,
  ProAccountCenterApplicationsComponent,
  ProAccountSettingsComponent,
  ProAccountSettingsBaseComponent,
  ProAccountSettingsSecurityComponent,
  ProAccountSettingsBindingComponent,
  ProAccountSettingsNotificationComponent,
  Step1Component,
  Step2Component,
  Step3Component,
  ProBasicListEditComponent
];

@NgModule({
  imports: [
    SharedModule,
    ProRoutingModule,
    EllipsisModule,
    TagSelectModule,
    AvatarListModule,
    FooterToolbarModule,
    NzPaginationModule,
    NzStepsModule,
    CurrencyPipeModule,
    ResultModule,
    NzUploadModule
  ],
  declarations: COMPONENTS
})
export class ProModule {}
