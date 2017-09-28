import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';

import { LoginComponent } from './login/login.component';
import { LockComponent } from './lock/lock.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { Page404Component } from './404/404.component';
import { Page500Component } from './500/500.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    LoginComponent,
    LockComponent,
    RegisterComponent,
    ForgetComponent,
    MaintenanceComponent,
    Page404Component,
    Page500Component
  ]
})
export class PagesModule { }
