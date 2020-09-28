import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';

import { WidgetsRoutingModule } from './widgets-routing.module';

import { WidgetsComponent } from './widgets/widgets.component';

const COMPONENTS: Type<void>[] = [WidgetsComponent];

@NgModule({
  imports: [SharedModule, WidgetsRoutingModule],
  declarations: [...COMPONENTS],
})
export class WidgetsModule {}
