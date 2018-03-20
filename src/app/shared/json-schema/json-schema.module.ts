import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
// import { NzSchemaFormModule, WidgetRegistry } from 'nz-schema-form';

// import { TinymceWidget } from './widgets/tinymce/tinymce.widget';
// import { UEditorWidget } from './widgets/ueditor/ueditor.widget';

export const SCHEMA_THIRDS_COMPONENTS = [
    // TinymceWidget,
    // UEditorWidget
];

@NgModule({
    declarations: SCHEMA_THIRDS_COMPONENTS,
    entryComponents: SCHEMA_THIRDS_COMPONENTS,
    imports: [
        SharedModule,
        // NzSchemaFormModule.forRoot({

        // })
    ],
    exports: [
        ...SCHEMA_THIRDS_COMPONENTS
    ]
})
export class JsonSchemaModule {
    // constructor(widgetRegistry: WidgetRegistry) {
    //     widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
    //     widgetRegistry.register(UEditorWidget.KEY, UEditorWidget);
    // }
}
