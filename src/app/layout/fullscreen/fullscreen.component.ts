import { Component } from '@angular/core';

@Component({
  selector: 'layout-fullscreen',
  template: `<router-outlet></router-outlet> `,
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '[class.alain-fullscreen]': 'true',
  },
})
export class LayoutFullScreenComponent {}
