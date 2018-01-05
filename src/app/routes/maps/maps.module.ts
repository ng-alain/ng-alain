import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbmModule } from 'angular-baidu-maps';
import { AqmModule } from 'angular-qq-maps';

import { SharedModule } from '@shared/shared.module';
import { MapsRoutingModule } from './maps-routing.module';

import { MapsQQComponent } from './qq/qq.component';
import { MapsBaiduComponent } from './baidu/baidu.component';

@NgModule({
    imports: [
        SharedModule,
        MapsRoutingModule,
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
    ]
})
export class MapsModule { }
