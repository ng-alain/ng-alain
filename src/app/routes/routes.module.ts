import { NgModule, Type } from '@angular/core';

import { SharedModule } from '@shared';
import { RouteRoutingModule } from './routes-routing.module';

const COMPONENTS: Type<null>[] = [];

@NgModule({
  imports: [SharedModule, RouteRoutingModule],
  declarations: [...COMPONENTS],
})
export class RoutesModule {}
