import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ACLGuard } from '@delon/acl';

import { GuardComponent } from './guard/guard.component';
import { GuardAdminComponent } from './guard/admin.component';
import { GuardAuthComponent } from './guard/auth.component';
import { CanLeaveProvide } from './guard/can-leave.provide';
import { GuardLeaveComponent } from './guard/leave.component';
import { ACLComponent } from './acl/acl.component';
import { DownFileComponent } from './downfile/downfile.component';
import { XlsxComponent } from './xlsx/xlsx.component';
import { ZipComponent } from './zip/zip.component';
import { CacheComponent } from './cache/cache.component';

const routes: Routes = [
    {
        path: 'guard',
        component: GuardComponent,
        children: [
            { path: 'leave', component: GuardLeaveComponent, canDeactivate: [ CanLeaveProvide ] },
            { path: 'auth', component: GuardAuthComponent, canActivate: [ ACLGuard ], data: { guard: 'user1' } },
            { path: 'admin', component: GuardAdminComponent, canActivate: [ ACLGuard ], data: { guard: 'admin' } }
        ]
    },
    { path: 'acl', component: ACLComponent },
    { path: 'downfile', component: DownFileComponent },
    { path: 'xlsx', component: XlsxComponent },
    { path: 'zip', component: ZipComponent },
    { path: 'cache', component: CacheComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class LogicsRoutingModule { }
