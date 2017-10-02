import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

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

const routes: Routes = [
    {
        path: 'guard',
        component: GuardComponent,
        children: [
            { path: 'leave', component: GuardLeaveComponent, canDeactivate: [ CanLeaveProvide ] },
            { path: 'auth', component: GuardAuthComponent, canActivate: [ CanAuthProvide ] },
            { path: 'admin', component: GuardAdminComponent, canActivate: [ CanAdminProvide ] }
        ]
    },
    { path: 'acl', component: ACLComponent },
    { path: 'downfile', component: DownFileComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers: [ UserService, CanLeaveProvide, CanAuthProvide, CanAdminProvide ],
    declarations: [
        GuardComponent,
        GuardLeaveComponent,
        GuardAdminComponent,
        GuardAuthComponent,
        ACLComponent,
        DownFileComponent
    ],
    exports: [
        RouterModule
    ]
})
export class LogicsModule { }
