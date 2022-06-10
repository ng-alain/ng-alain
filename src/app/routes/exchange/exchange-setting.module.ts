import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { ExchangeApiRoutingModule } from './exchange-setting-routing.module';
import { ExchangeSettingComponent } from './exchange-setting/exchange-setting.component';

const COMPONENTS = [ExchangeSettingComponent];

@NgModule({
  imports: [
    SharedModule,
    ExchangeApiRoutingModule
  ],
  declarations: [...COMPONENTS],
})
export class ExchangeApiModule { }
