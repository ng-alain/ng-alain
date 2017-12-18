import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UeditorComponent } from './ueditor/ueditor.component';

const routes: Routes = [
    { path: 'ueditor', component: UeditorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
