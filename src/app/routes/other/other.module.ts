import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { AngularSplitModule } from 'angular-split';
import { NzClipboardModule } from 'ng-clipboard-antd';

import { OtherRoutingModule } from './other-routing.module';
import { SplitComponent } from './split/split.component';
import { ClipboardComponent } from './clipboard/clipboard.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OtherRoutingModule,
    AngularSplitModule,
    NzClipboardModule.forRoot()
  ],
  declarations: [SplitComponent, ClipboardComponent]
})
export class OtherModule { }
