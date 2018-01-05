import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { ChartsRoutingModule } from './charts-routing.module';
import { G2Component } from './g2/g2.component';

@NgModule({
    imports: [ SharedModule, ChartsRoutingModule ],
    declarations: [ G2Component ]
})
export class ChartsModule { }
