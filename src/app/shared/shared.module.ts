import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';
import { AlainThemeModule, DatePipe } from '@delon/theme';

import { CurrencyPipe } from './pipes/currency.pipe';
import { DashNullPipe } from './pipes/dash-null.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { MinutePipe } from './pipes/minute.pipe';
import { MonthPipe } from './pipes/month.pipe';
import { EventService } from './services/event.service';
import { ExportService } from './services/export.service';
import { SseService } from './services/sse.service';
import { SHARED_DELON_MODULES } from './shared-delon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
import { PdfWrapperComponent } from './ui-components/pdf-wrapper/pdf-wrapper.component';
import { StatusTagComponent } from './ui-components/status-tag/status-tag.component';

// #region third libs
// import { NgxTinymceModule } from 'ngx-tinymce';
// import { UEditorModule } from 'ngx-ueditor';
const THIRDMODULES: Array<Type<void>> = [];

const COMPONENTS: Array<Type<void>> = [StatusTagComponent, PdfWrapperComponent];
const DIRECTIVES: Array<Type<void>> = [];
const PIPES: Array<Type<any>> = [DateFormatPipe, DashNullPipe, MinutePipe, MonthPipe, CurrencyPipe];
// #endregion

const SERVICES: Array<Type<any>> = [SseService, DatePipe, EventService, ExportService];
// #endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AlainThemeModule.forChild(),
    DelonACLModule,
    DelonFormModule,
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    // third libs
    ...THIRDMODULES
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AlainThemeModule,
    DelonACLModule,
    DelonFormModule,
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ],
  providers: [...SERVICES]
})
export class SharedModule {}
