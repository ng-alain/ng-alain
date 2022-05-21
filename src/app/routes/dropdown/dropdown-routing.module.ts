import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownSettingComponent } from './dropdown-setting/dropdown-setting.component';

const routes: Routes = [{ path: 'dropdown-setting', component: DropdownSettingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropdownRoutingModule {}
