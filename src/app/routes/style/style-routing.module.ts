import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridMasonryComponent } from './gridmasonry/gridmasonry.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsFontComponent } from './iconsfont/iconsfont.component';
import { ColorsComponent } from './colors/colors.component';

const routes: Routes = [
    { path: 'gridmasonry', component: GridMasonryComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'iconsfont', component: IconsFontComponent },
    { path: 'colors', component: ColorsComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class StyleRoutingModule { }
