import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbmModule } from 'angular-baidu-maps';
import { AqmModule } from 'angular-qq-maps';

import { SharedModule } from '@shared/shared.module';

import { MapsQQComponent } from './qq/qq.component';
import { MapsBaiduComponent } from './baidu/baidu.component';

const routes: Routes = [
    { path: 'qq', component: MapsQQComponent },
    { path: 'baidu', component: MapsBaiduComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        AbmModule.forRoot({
            apiKey: 'p3HIQIqLqKVQOXao1IiLp5O0eTFakjEP' // app key为必选项
        }),
        AqmModule.forRoot({
            apiKey: 'I3TBZ-QTN3J-MWPFI-FERMS-IBOCQ-LBBWY' // app key为必选项
        })
    ],
    declarations: [
        MapsQQComponent,
        MapsBaiduComponent
    ],
    exports: [
        RouterModule
    ],
    entryComponents: [

    ]
})
export class MapsModule { }
