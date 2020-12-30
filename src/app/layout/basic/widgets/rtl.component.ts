import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { RTLService } from '@delon/theme';

@Component({
  selector: 'header-rtl',
  template: `
    <i nz-icon [nzType]="rtl.nextDir === 'rtl' ? 'border-left' : 'border-right'"></i>
    {{ rtl.nextDir | uppercase }}
  `,
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '[class.d-block]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderRTLComponent {
  constructor(public rtl: RTLService) {}

  @HostListener('click')
  toggleDirection(): void {
    this.rtl.toggle();
  }
}
