import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { ExtrasRoutingModule } from './extras-routing.module';

import { HelpCenterComponent } from './helpcenter/helpcenter.component';
import { ExtrasSettingsComponent } from './settings/settings.component';
import { ExtrasPoiComponent } from './poi/poi.component';
import { ExtrasPoiEditComponent } from './poi/edit/edit.component';

const COMPONENTS_NOROUNT = [ExtrasPoiEditComponent];

@NgModule({
  imports: [SharedModule, ExtrasRoutingModule],
  declarations: [
    HelpCenterComponent,
    ExtrasSettingsComponent,
    ExtrasPoiComponent,
    ...COMPONENTS_NOROUNT,
  ],
  entryComponents: COMPONENTS_NOROUNT,
})
export class ExtrasModule {}
