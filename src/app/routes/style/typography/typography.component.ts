import { Component, inject } from '@angular/core';

import { ColorService } from '../color.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html'
})
export class TypographyComponent {
  private readonly colorSrv = inject(ColorService);
  get names(): string[] {
    return this.colorSrv.names;
  }
}
