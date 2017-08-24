import { LayoutComponent } from "../layout/layout.component";
import { LoginComponent } from "./pages/login/login.component";
import { LockComponent } from "./pages/lock/lock.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ForgetComponent } from "./pages/forget/forget.component";
import { MaintenanceComponent } from "./pages/maintenance/maintenance.component";
import { Page404Component } from "./pages/404/404.component";
import { Page500Component } from "./pages/500/500.component";

export const routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'widgets', loadChildren: './widgets/widgets.module#WidgetsModule' },
            { path: 'elements', loadChildren: './elements/elements.module#ElementsModule' },
            { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
            { path: 'extras', loadChildren: './extras/extras.module#ExtrasModule' }
        ]
    },
    // 单页不包裹Layout
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'forget', component: ForgetComponent },
    { path: 'lock', component: LockComponent },
    { path: 'maintenance', component: MaintenanceComponent },
    { path: '404', component: Page404Component },
    { path: '500', component: Page500Component },
    { path: '**', redirectTo: 'dashboard' }
];
