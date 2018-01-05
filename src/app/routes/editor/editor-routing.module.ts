import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UeditorComponent } from './ueditor/ueditor.component';
import { TinymceComponent } from './tinymce/tinymce.component';

const routes: Routes = [
    { path: 'ueditor', component: UeditorComponent },
    { path: 'tinymce', component: TinymceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
