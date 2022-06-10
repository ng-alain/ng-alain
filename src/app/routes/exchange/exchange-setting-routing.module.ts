import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeSettingComponent } from './exchange-setting/exchange-setting.component';

const routes: Routes = [
  { path: 'exchange-setting', component: ExchangeSettingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeApiRoutingModule { }
