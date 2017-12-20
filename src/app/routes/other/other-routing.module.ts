import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplitComponent } from './split/split.component';

const routes: Routes = [
    { path: 'split', component: SplitComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
