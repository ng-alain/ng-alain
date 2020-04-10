import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// tslint:disable-next-line:import-blacklist
import { DelonABCModule } from '@delon/abc';
import { DelonACLModule } from '@delon/acl';
// tslint:disable-next-line:import-blacklist
import { DelonChartModule } from '@delon/chart';
import { DelonFormModule } from '@delon/form';
// delon
import { AlainThemeModule } from '@delon/theme';
// i18n
import { TranslateModule } from '@ngx-translate/core';

// #region third libs
// tslint:disable-next-line:import-blacklist
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CountdownModule } from 'ngx-countdown';
import { NgxTinymceModule } from 'ngx-tinymce';
import { UEditorModule } from 'ngx-ueditor';

const THIRDMODULES = [NgZorroAntdModule, CountdownModule, UEditorModule, NgxTinymceModule];
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
    DelonABCModule,
    DelonChartModule,
    DelonACLModule,
    DelonFormModule,
    // third libs
    ...THIRDMODULES,
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
    DelonABCModule,
    DelonChartModule,
    DelonACLModule,
    DelonFormModule,
    // i18n
    TranslateModule,
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
})
export class SharedModule {}
