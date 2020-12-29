import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { LayoutDirection, SettingsService } from '@delon/theme';
import { AlainConfigService } from '@delon/util';
import { NzConfigService } from 'ng-zorro-antd/core/config';

@Component({
  selector: 'header-rtl',
  template: `
    <i nz-icon [nzType]="nextDir === 'rtl' ? 'border-left' : 'border-right'"></i>
    {{ nextDir | uppercase }}
  `,
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '[class.d-block]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderRTLComponent {
  get nextDir(): LayoutDirection {
    return this.dir === 'ltr' ? 'rtl' : 'ltr';
  }

  dir: LayoutDirection = 'ltr';

  constructor(private settingsSrv: SettingsService, private nzConfigService: NzConfigService, private configSrv: AlainConfigService) {
    this.dir = settingsSrv.layout.direction;
  }

  @HostListener('click')
  toggleDirection(): void {
    this.dir = this.nextDir;
    this.settingsSrv.setLayout('direction', this.dir);
    this.updateLibConfig();
  }

  private updateLibConfig(): void {
    ['modal', 'drawer', 'message', 'notification', 'image'].forEach((name) => {
      this.nzConfigService.set(name as any, { nzDirection: this.dir });
    });
    ['loading', 'onboarding'].forEach((name) => {
      this.configSrv.set(name as any, { direction: this.dir });
    });
  }
}
