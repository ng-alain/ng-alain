import { Component } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
})
export class TypographyComponent {
  get names() {
    return this.colorSrv.names;
  }

  constructor(private colorSrv: ColorService) {}
}
