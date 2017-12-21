import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapsQQComponent } from './qq/qq.component';
import { MapsBaiduComponent } from './baidu/baidu.component';

const routes: Routes = [
    { path: 'qq', component: MapsQQComponent },
    { path: 'baidu', component: MapsBaiduComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MapsRoutingModule { }
