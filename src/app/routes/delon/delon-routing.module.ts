import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { aclCanActivate } from '@delon/acl';

import { ACLComponent } from './acl/acl.component';
import { CacheComponent } from './cache/cache.component';
import { DownFileComponent } from './downfile/downfile.component';
import { DelonFormComponent } from './form/form.component';
import { GuardAdminComponent } from './guard/admin.component';
import { GuardAuthComponent } from './guard/auth.component';
import { canLeave } from './guard/can-leave';
import { GuardComponent } from './guard/guard.component';
import { GuardLeaveComponent } from './guard/leave.component';
import { PrintComponent } from './print/print.component';
import { QRComponent } from './qr/qr.component';
import { STDemoComponent } from './st/st.component';
import { UtilComponent } from './util/util.component';
import { XlsxComponent } from './xlsx/xlsx.component';
import { ZipComponent } from './zip/zip.component';

const routes: Routes = [
  { path: 'st', component: STDemoComponent },
  { path: 'util', component: UtilComponent },
  { path: 'print', component: PrintComponent },
  { path: 'acl', component: ACLComponent },
  {
    path: 'guard',
    component: GuardComponent,
    children: [
      {
        path: 'leave',
        component: GuardLeaveComponent,
        canDeactivate: [canLeave]
      },
      {
        path: 'auth',
        component: GuardAuthComponent,
        canActivate: [aclCanActivate],
        data: { guard: 'user1' }
      },
      {
        path: 'admin',
        component: GuardAdminComponent,
        canActivate: [aclCanActivate],
        data: { guard: 'admin' }
      }
    ]
  },
  { path: 'cache', component: CacheComponent },
  { path: 'qr', component: QRComponent },
  { path: 'downfile', component: DownFileComponent },
  { path: 'xlsx', component: XlsxComponent },
  { path: 'zip', component: ZipComponent },
  { path: 'form', component: DelonFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DelonRoutingModule {}
