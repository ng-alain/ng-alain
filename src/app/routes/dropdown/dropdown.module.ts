import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';

import { DropdownRoutingModule } from './dropdown-routing.module';
import { DropdownSettingComponent } from './dropdown-setting/dropdown-setting.component';

const COMPONENTS = [DropdownSettingComponent];

@NgModule({
  imports: [SharedModule, DropdownRoutingModule],
  declarations: [COMPONENTS]
})
export class DropdownModule {}
