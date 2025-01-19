import { Routes } from '@angular/router';

import { HelpCenterComponent } from './helpcenter/helpcenter.component';
import { ExtrasPoiComponent } from './poi/poi.component';
import { ExtrasSettingsComponent } from './settings/settings.component';

export const routes: Routes = [
  { path: 'helpcenter', component: HelpCenterComponent },
  { path: 'settings', component: ExtrasSettingsComponent },
  { path: 'poi', component: ExtrasPoiComponent }
];
