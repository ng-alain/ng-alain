import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ACLGuard } from '@delon/acl';

import { SimpleTableComponent } from './simple-table/simple-table.component';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { PrintComponent } from './print/print.component';
import { ACLComponent } from './acl/acl.component';
import { GuardComponent } from './guard/guard.component';
import { GuardLeaveComponent } from './guard/leave.component';
import { GuardAuthComponent } from './guard/auth.component';
import { GuardAdminComponent } from './guard/admin.component';
import { CanLeaveProvide } from './guard/can-leave.provide';
import { CacheComponent } from './cache/cache.component';
import { DownFileComponent } from './downfile/downfile.component';
import { XlsxComponent } from './xlsx/xlsx.component';
import { ZipComponent } from './zip/zip.component';

const routes: Routes = [
    { path: 'simple-table', component: SimpleTableComponent },
    { path: 'clipboard', component: ClipboardComponent },
    { path: 'print', component: PrintComponent },
    { path: 'acl', component: ACLComponent },
    {
        path: 'guard',
        component: GuardComponent,
        children: [
            { path: 'leave', component: GuardLeaveComponent, canDeactivate: [ CanLeaveProvide ] },
            { path: 'auth', component: GuardAuthComponent, canActivate: [ ACLGuard ], data: { guard: 'user1' } },
            { path: 'admin', component: GuardAdminComponent, canActivate: [ ACLGuard ], data: { guard: 'admin' } }
        ]
    },
    { path: 'cache', component: CacheComponent },
    { path: 'downfile', component: DownFileComponent },
    { path: 'xlsx', component: XlsxComponent },
    { path: 'zip', component: ZipComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DelonRoutingModule { }
