import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { ColorService } from './color.service';
import { StyleRoutingModule } from './style-routing.module';

import { ColorsComponent } from './colors/colors.component';
import { GridMasonryComponent } from './gridmasonry/gridmasonry.component';
import { TypographyComponent } from './typography/typography.component';

const COMPONENTS = [GridMasonryComponent, TypographyComponent, ColorsComponent];

@NgModule({
  imports: [SharedModule, StyleRoutingModule],
  providers: [ColorService],
  declarations: [...COMPONENTS],
})
export class StyleModule {}
