import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ACLGuard } from '@delon/acl';
import { JWTGuard, SimpleGuard } from '@delon/auth';
import { PreloadOptionalModules } from '@delon/theme';
import { environment } from '@env/environment';

import { AuthGuardService } from '../auth-guard.service';
// layout
import { LayoutBasicComponent } from '../layout/basic/basic.component';
import { LayoutBlankComponent } from '../layout/blank/blank.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutBasicComponent,
    canActivate: [JWTGuard, ACLGuard],
    canActivateChild: [JWTGuard, ACLGuard],
    data: {},
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        data: {
          breadcrumb: {
            title: 'Dashboard',
            breadcrumbI18nKey: 'menu.dashboard'
          }
        }
      },
      { path: 'dropdown', loadChildren: () => import('./dropdown/dropdown.module').then(m => m.DropdownModule) }
    ,  { path: 'exchange', loadChildren: () => import('./exchange/exchange-setting.module').then((m) => m.ExchangeApiModule) }]
  },
  {
    path: '',
    loadChildren: () => import('./passport/passport.module').then(m => m.PassportModule)
  },
  { path: 'exception', loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule) },
  { path: '**', redirectTo: 'exception/404' }
];

@NgModule({
  // providers: [PreloadOptionalModules],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
      // Pls refer to https://ng-alain.com/components/reuse-tab
      scrollPositionRestoration: 'top'
      // preloadingStrategy: PreloadOptionalModules
    })
  ],
  exports: [RouterModule]
})
export class RouteRoutingModule {}
