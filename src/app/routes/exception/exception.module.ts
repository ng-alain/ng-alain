import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { ExceptionRoutingModule } from './exception-routing.module';

import { Exception403Component } from './403.component';
import { Exception404Component } from './404.component';
import { Exception500Component } from './500.component';
import { ExceptionTriggerComponent } from './trigger.component';

const COMPONENTS = [Exception403Component, Exception404Component, Exception500Component, ExceptionTriggerComponent];

@NgModule({
  imports: [SharedModule, ExceptionRoutingModule],
  declarations: [...COMPONENTS],
})
export class ExceptionModule {}
