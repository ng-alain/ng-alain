import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';
import { ColorPickerModule, ColorPickerService } from 'ngx-color-picker';
import { ImageCropperModule } from 'ng2-img-cropper';

import { SharedModule } from '@shared/shared.module';

import { StandardComponent } from './standard/standard.component';
import { ExtendedComponent } from './extended/extended.component';
import { UploadComponent } from './upload/upload.component';
import { CropperComponent } from './cropper/cropper.component';
import { ValidationComponent } from './validation/validation.component';

const routes: Routes = [
    { path: 'standard', component: StandardComponent },
    { path: 'extended', component: ExtendedComponent },
    { path: 'upload', component: UploadComponent },
    { path: 'cropper', component: CropperComponent },
    { path: 'validation', component: ValidationComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        ColorPickerModule,
        FileUploadModule,
        ImageCropperModule
    ],
    declarations: [
        StandardComponent,
        ExtendedComponent,
        UploadComponent,
        CropperComponent,
        ValidationComponent
    ],
    exports: [
        RouterModule
    ],
    entryComponents: [

    ]
})
export class FormsModule { }
