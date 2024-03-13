import { Component } from '@angular/core';
import type { ERROR_LEVEL_MAP } from 'ng-zorro-antd/qr-code/qrcode';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html'
})
export class QRComponent {
  value = 'https://ng-alain.com/';
  background = '#ffffff';
  foreground = '#000000';
  level: keyof typeof ERROR_LEVEL_MAP = 'L';
  mime = 'image/png';
  padding = 10;
  size = 220;
}
