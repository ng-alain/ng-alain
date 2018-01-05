import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class FormsRoutingModule { }
