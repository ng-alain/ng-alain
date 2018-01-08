import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { LogicsRoutingModule } from './logics-routing.module';

import { GuardComponent } from './guard/guard.component';
import { CanLeaveProvide } from './guard/can-leave.provide';
import { GuardAdminComponent } from './guard/admin.component';
import { GuardAuthComponent } from './guard/auth.component';
import { GuardLeaveComponent } from './guard/leave.component';
import { ACLComponent } from './acl/acl.component';
import { DownFileComponent } from 'app/routes/logics/downfile/downfile.component';
import { XlsxComponent } from './xlsx/xlsx.component';
import { ZipComponent } from './zip/zip.component';
import { CacheComponent } from './cache/cache.component';

@NgModule({
    imports: [ SharedModule, LogicsRoutingModule ],
    providers: [ CanLeaveProvide ],
    declarations: [
        GuardComponent,
        GuardLeaveComponent,
        GuardAdminComponent,
        GuardAuthComponent,
        ACLComponent,
        DownFileComponent,
        XlsxComponent,
        ZipComponent,
        CacheComponent
    ]
})
export class LogicsModule { }
