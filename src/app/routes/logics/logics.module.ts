import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { LogicsRoutingModule } from './logics-routing.module';

import { GuardComponent } from './guard/guard.component';
import { CanLeaveProvide } from './guard/can-leave.provide';
import { UserService } from './guard/user.service';
import { CanAuthProvide } from './guard/can-auth.provide';
import { CanAdminProvide } from './guard/can-admin.provide';
import { GuardAdminComponent } from './guard/admin.component';
import { GuardAuthComponent } from './guard/auth.component';
import { GuardLeaveComponent } from './guard/leave.component';
import { ACLComponent } from './acl/acl.component';
import { DownFileComponent } from 'app/routes/logics/downfile/downfile.component';

@NgModule({
    imports: [ SharedModule, LogicsRoutingModule ],
    providers: [ UserService, CanLeaveProvide, CanAuthProvide, CanAdminProvide ],
    declarations: [
        GuardComponent,
        GuardLeaveComponent,
        GuardAdminComponent,
        GuardAuthComponent,
        ACLComponent,
        DownFileComponent
    ]
})
export class LogicsModule { }
