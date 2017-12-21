import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardComponent } from './guard/guard.component';
import { CanAdminProvide } from './guard/can-admin.provide';
import { GuardAdminComponent } from './guard/admin.component';
import { CanAuthProvide } from './guard/can-auth.provide';
import { GuardAuthComponent } from './guard/auth.component';
import { CanLeaveProvide } from './guard/can-leave.provide';
import { GuardLeaveComponent } from './guard/leave.component';
import { ACLComponent } from './acl/acl.component';
import { DownFileComponent } from './downfile/downfile.component';

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
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class LogicsRoutingModule { }
