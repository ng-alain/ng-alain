import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { NzUploadModule } from 'ng-zorro-antd/upload';

import { ExtrasRoutingModule } from './extras-routing.module';
import { HelpCenterComponent } from './helpcenter/helpcenter.component';
import { ExtrasPoiEditComponent } from './poi/edit/edit.component';
import { ExtrasPoiComponent } from './poi/poi.component';
import { ExtrasSettingsComponent } from './settings/settings.component';

const COMPONENTS = [HelpCenterComponent, ExtrasSettingsComponent, ExtrasPoiComponent, ExtrasPoiEditComponent];

@NgModule({
  imports: [SharedModule, ExtrasRoutingModule, NzUploadModule],
  declarations: [...COMPONENTS]
})
export class ExtrasModule {}
