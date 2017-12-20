import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { AngularSplitModule } from 'angular-split';

import { OtherRoutingModule } from './other-routing.module';
import { SplitComponent } from './split/split.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OtherRoutingModule,
    AngularSplitModule
  ],
  declarations: [SplitComponent]
})
export class OtherModule { }
