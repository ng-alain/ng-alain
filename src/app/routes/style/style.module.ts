import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { StyleRoutingModule } from './style-routing.module';
import { ColorService } from './color.service';

import { GridMasonryComponent } from './gridmasonry/gridmasonry.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsFontComponent } from './iconsfont/iconsfont.component';
import { ColorsComponent } from './colors/colors.component';

@NgModule({
    imports: [
        SharedModule,
        StyleRoutingModule
    ],
    declarations: [
        GridMasonryComponent,
        TypographyComponent,
        IconsFontComponent,
        ColorsComponent
    ],
    providers: [
        ColorService
    ]
})
export class StyleModule { }
