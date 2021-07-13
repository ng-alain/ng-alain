import { Component } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html'
})
export class QRComponent {
  value = 'https://ng-alain.com/';
  background = '#ffffff';
  backgroundAlpha = 1.0;
  foreground = '#000000';
  foregroundAlpha = 1.0;
  level = 'L';
  mime = 'image/png';
  padding = 10;
  size = 220;
}
