import { NgModule } from '@angular/core';
import { ColorPickerModule, ColorPickerService } from 'ngx-color-picker';
import { ImageCropperModule } from 'ng2-img-cropper';
import { SharedModule } from '@shared/shared.module';

import { FormsRoutingModule } from './forms-routing.module';

import { StandardComponent } from './standard/standard.component';
import { ExtendedComponent } from './extended/extended.component';
import { UploadComponent } from './upload/upload.component';
import { CropperComponent } from './cropper/cropper.component';
import { ValidationComponent } from './validation/validation.component';

@NgModule({
    imports: [
        SharedModule,
        FormsRoutingModule,
        ColorPickerModule,
        ImageCropperModule
    ],
    declarations: [
        StandardComponent,
        ExtendedComponent,
        UploadComponent,
        CropperComponent,
        ValidationComponent
    ]
})
export class FormsModule { }
