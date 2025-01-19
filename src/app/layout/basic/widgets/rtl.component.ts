import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { RTLService } from '@delon/theme';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'header-rtl',
  template: `
    <i nz-icon [nzType]="rtl.nextDir === 'rtl' ? 'border-left' : 'border-right'"></i>
    {{ rtl.nextDir | uppercase }}
  `,
  host: {
    '[class.flex-1]': 'true'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NzIconModule, UpperCasePipe]
})
export class HeaderRTLComponent {
  readonly rtl = inject(RTLService);

  @HostListener('click')
  toggleDirection(): void {
    this.rtl.toggle();
  }
}
