import { ChangeDetectionStrategy, Component } from '@angular/core';
import { App, SettingsService } from '@delon/theme';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  searchToggleStatus: boolean;

  get app(): App {
    return this.settings.app;
  }

  get collapsed(): boolean {
    return this.settings.layout.collapsed;
  }

  constructor(private settings: SettingsService) {}

  toggleCollapsedSidebar(): void {
    this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
  }

  searchToggleChange(): void {
    this.searchToggleStatus = !this.searchToggleStatus;
  }
}
