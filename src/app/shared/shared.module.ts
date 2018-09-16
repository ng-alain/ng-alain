import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AlainThemeModule } from '@delon/theme';
// import { DelonABCModule } from '@delon/abc';
// import { DelonChartModule } from '@delon/chart';
// performance modes
import {
  ABC_MODULES,
  CHART_MODULES,
  ZORRO_MODULES,
} from '../delon-perf.module';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';

// #region third libs
import { TranslateModule } from '@ngx-translate/core';
import { CountdownModule } from 'ngx-countdown';
import { UEditorModule } from 'ngx-ueditor';
import { NgxTinymceModule } from 'ngx-tinymce';

const THIRD_MODULES = [
  // NgZorroAntdModule,
  // performance modes
  ...ZORRO_MODULES,
  TranslateModule,
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
    ...ABC_MODULES,
    ...CHART_MODULES,
    DelonACLModule,
    DelonFormModule,
    // third libs
    ...THIRD_MODULES,
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
    ...ABC_MODULES,
    ...CHART_MODULES,
    DelonACLModule,
    DelonFormModule,
    // third libs
    ...THIRD_MODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
})
export class SharedModule {}
