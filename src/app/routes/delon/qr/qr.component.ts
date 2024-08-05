import { Component } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html'
})
export class QRComponent {
  value = 'https://ng-alain.com/';
  background = '#ffffff';
  foreground = '#000000';
  level: 'L' | 'M' | 'Q' | 'H' = 'L';
  mime = 'image/png';
  padding = 10;
  size = 220;
}
