import { AsyncPipe, JsonPipe, NgClass, NgStyle, NgTemplateOutlet } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';
import { DatePipe, I18nPipe } from '@delon/theme';

import { SHARED_DELON_MODULES } from './shared-delon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

export const SHARED_IMPORTS = [
  FormsModule,
  ReactiveFormsModule,
  RouterLink,
  RouterOutlet,
  NgTemplateOutlet,
  NgClass,
  NgStyle,
  I18nPipe,
  JsonPipe,
  DatePipe,
  AsyncPipe,
  ...SHARED_DELON_MODULES,
  ...SHARED_ZORRO_MODULES
];
