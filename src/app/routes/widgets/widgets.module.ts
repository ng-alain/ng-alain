import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

import { WidgetsRoutingModule } from './widgets-routing.module';

import { WidgetsComponent } from './widgets/widgets.component';

const COMPONENTS: Type<void>[] = [WidgetsComponent];

@NgModule({
  imports: [SharedModule, WidgetsRoutingModule, NzCarouselModule],
  declarations: [...COMPONENTS],
})
export class WidgetsModule {}
