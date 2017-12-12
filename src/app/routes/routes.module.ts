import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { environment } from '../../environments/environment';

import { routes } from './routes';
import { DashboardV1Component } from './dashboard/v1/v1.component';
import { DashboardAnalysisComponent } from './dashboard/analysis/analysis.component';
import { DashboardMonitorComponent } from './dashboard/monitor/monitor.component';
import { DashboardWorkplaceComponent } from './dashboard/workplace/workplace.component';
import { CallbackComponent } from './callback/callback.component';

// pro
import { ProUserLoginComponent } from './pro/user/login/login.component';
import { ProUserRegisterComponent } from './pro/user/register/register.component';
import { ProUserRegisterResultComponent } from './pro/user/register-result/register-result.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes, { useHash: environment.useHash }),
        PagesModule
    ],
    declarations: [
        DashboardV1Component,
        DashboardAnalysisComponent,
        DashboardMonitorComponent,
        DashboardWorkplaceComponent,
        CallbackComponent,
        // pro
        ProUserLoginComponent,
        ProUserRegisterComponent,
        ProUserRegisterResultComponent
    ],
    exports: [
        RouterModule
    ]
})

export class RoutesModule {}
