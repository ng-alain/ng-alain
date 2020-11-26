/**
 * TIPS: When it does not take effect, you need to run it once: npm run theme
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AlainConfigService } from '@delon/util';

type SiteTheme = 'default' | 'dark' | 'compact';

@Component({
  selector: 'layout-theme-btn',
  templateUrl: './theme-btn.component.html',
  styleUrls: ['./theme-btn.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutThemeBtnComponent implements OnInit, OnDestroy {
  theme: SiteTheme = 'default';
  private el!: HTMLLinkElement;

  constructor(private renderer: Renderer2, private configSrv: AlainConfigService, private platform: Platform) {}

  ngOnInit(): void {
    this.initTheme();
  }

  private initTheme(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    this.theme = (localStorage.getItem('site-theme') as SiteTheme) || 'default';
    this.updateChartTheme();
    this.onThemeChange(this.theme);
  }

  private updateChartTheme(): void {
    this.configSrv.set('chart', { theme: this.theme === 'dark' ? 'dark' : '' });
  }

  onThemeChange(theme: SiteTheme): void {
    if (!this.platform.isBrowser) {
      return;
    }
    this.theme = theme;
    this.renderer.setAttribute(document.body, 'data-theme', theme);
    const dom = document.getElementById('site-theme');
    if (dom) {
      dom.remove();
    }
    localStorage.removeItem('site-theme');
    if (theme !== 'default') {
      const el = (this.el = document.createElement('link'));
      el.type = 'text/css';
      el.rel = 'stylesheet';
      el.id = 'site-theme';
      el.href = `assets/style.${theme}.css`;

      localStorage.setItem('site-theme', theme);
      document.body.append(el);
    }
    this.updateChartTheme();
  }

  ngOnDestroy(): void {
    if (this.el) {
      document.body.removeChild(this.el);
    }
  }
}
