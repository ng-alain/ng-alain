import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { EditorRoutingModule } from './editor-routing.module';
import { UeditorComponent } from './ueditor/ueditor.component';
import { TinymceComponent } from './tinymce/tinymce.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        EditorRoutingModule
    ],
    declarations: [UeditorComponent, TinymceComponent]
})
export class EditorModule {}
