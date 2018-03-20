import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { DelonRoutingModule } from './delon-routing.module';

import { SimpleTableComponent } from './simple-table/simple-table.component';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { PrintComponent } from './print/print.component';
import { ACLComponent } from './acl/acl.component';
import { CanLeaveProvide } from './guard/can-leave.provide';
import { GuardComponent } from './guard/guard.component';
import { GuardLeaveComponent } from './guard/leave.component';
import { GuardAdminComponent } from './guard/admin.component';
import { GuardAuthComponent } from './guard/auth.component';
import { CacheComponent } from './cache/cache.component';
import { DownFileComponent } from './downfile/downfile.component';
import { XlsxComponent } from './xlsx/xlsx.component';
import { ZipComponent } from './zip/zip.component';

const COMPONENTS = [
    SimpleTableComponent,
    ClipboardComponent,
    PrintComponent,
    ACLComponent,
    GuardComponent,
    GuardLeaveComponent,
    GuardAdminComponent,
    GuardAuthComponent,
    CacheComponent,
    DownFileComponent,
    XlsxComponent,
    ZipComponent
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        DelonRoutingModule
    ],
    providers: [ CanLeaveProvide ],
    declarations: COMPONENTS
})
export class DelonModule { }
