import { NgModule } from '@angular/core';
import { DelonFormModule, WidgetRegistry } from '@delon/form';
import { AutoCompleteWidgetModule } from '@delon/form/widgets/autocomplete';
import { CascaderWidgetModule } from '@delon/form/widgets/cascader';
import { MentionWidgetModule } from '@delon/form/widgets/mention';
import { RateWidgetModule } from '@delon/form/widgets/rate';
import { SliderWidgetModule } from '@delon/form/widgets/slider';
import { TagWidgetModule } from '@delon/form/widgets/tag';
import { TimeWidgetModule } from '@delon/form/widgets/time';
import { TransferWidgetModule } from '@delon/form/widgets/transfer';
import { TreeSelectWidgetModule } from '@delon/form/widgets/tree-select';
import { UploadWidgetModule } from '@delon/form/widgets/upload';

import { TestWidget } from './test/test.widget';
import { SharedModule } from '../shared.module';

export const SCHEMA_THIRDS_COMPONENTS = [TestWidget];

@NgModule({
  declarations: SCHEMA_THIRDS_COMPONENTS,
  imports: [
    SharedModule,
    DelonFormModule.forRoot(),
    AutoCompleteWidgetModule,
    CascaderWidgetModule,
    MentionWidgetModule,
    RateWidgetModule,
    SliderWidgetModule,
    TagWidgetModule,
    TimeWidgetModule,
    TransferWidgetModule,
    TreeSelectWidgetModule,
    UploadWidgetModule
  ],
  exports: SCHEMA_THIRDS_COMPONENTS
})
export class JsonSchemaModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(TestWidget.KEY, TestWidget);
  }
}
