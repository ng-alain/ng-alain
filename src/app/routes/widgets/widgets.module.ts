import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { WidgetsComponent } from './widgets/widgets.component';

const routes: Routes = [
  { path: '', component: WidgetsComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    WidgetsComponent
  ],
  exports: [
    RouterModule
  ]
})
export class WidgetsModule { }
