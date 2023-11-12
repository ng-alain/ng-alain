import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { I18nPipe } from '@delon/theme';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'header-clear-storage',
  template: `
    <i nz-icon nzType="tool"></i>
    {{ 'menu.clear.local.storage' | i18n }}
  `,
  host: {
    '[class.flex-1]': 'true'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NzIconModule, I18nPipe]
})
export class HeaderClearStorageComponent {
  constructor(
    private modalSrv: NzModalService,
    private messageSrv: NzMessageService
  ) {}

  @HostListener('click')
  _click(): void {
    this.modalSrv.confirm({
      nzTitle: 'Make sure clear all local storage?',
      nzOnOk: () => {
        localStorage.clear();
        this.messageSrv.success('Clear Finished!');
      }
    });
  }
}
