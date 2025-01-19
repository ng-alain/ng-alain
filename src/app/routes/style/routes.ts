import { Routes } from '@angular/router';

import { ColorService } from './color.service';
import { ColorsComponent } from './colors/colors.component';
import { GridMasonryComponent } from './gridmasonry/gridmasonry.component';
import { TypographyComponent } from './typography/typography.component';

export const routes: Routes = [
  {
    path: '',
    providers: [ColorService],
    children: [
      { path: 'gridmasonry', component: GridMasonryComponent },
      { path: 'typography', component: TypographyComponent },
      { path: 'colors', component: ColorsComponent }
    ]
  }
];
