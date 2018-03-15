import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { AngularSplitModule } from 'angular-split';
import { NzClipboardModule } from 'ng-clipboard-antd';

import { OtherRoutingModule } from './other-routing.module';
import { SplitComponent } from './split/split.component';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { PrintComponent } from './print/print.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OtherRoutingModule,
    AngularSplitModule,
    NzClipboardModule.forRoot()
  ],
  declarations: [SplitComponent, ClipboardComponent, PrintComponent]
})
export class OtherModule { }
