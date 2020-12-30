import { Direction } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SettingsService, TitleService, VERSION as VERSION_ALAIN } from '@delon/theme';
import { NzModalService } from 'ng-zorro-antd/modal';
import { VERSION as VERSION_ZORRO } from 'ng-zorro-antd/version';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <div [dir]="dir">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent implements OnInit {
  dir: Direction = 'ltr';

  constructor(
    el: ElementRef,
    renderer: Renderer2,
    private router: Router,
    private titleSrv: TitleService,
    private modalSrv: NzModalService,
    private settings: SettingsService,
    @Inject(DOCUMENT) private doc: any,
  ) {
    renderer.setAttribute(el.nativeElement, 'ng-alain-version', VERSION_ALAIN.full);
    renderer.setAttribute(el.nativeElement, 'ng-zorro-version', VERSION_ZORRO.full);
    this.dir = settings.layout.direction === 'rtl' ? 'rtl' : 'ltr';
    settings.setLayout('direction', this.dir);
    this.updateHtml();
  }

  ngOnInit(): void {
    this.router.events.pipe(filter((evt) => evt instanceof NavigationEnd)).subscribe(() => {
      this.titleSrv.setTitle();
      this.modalSrv.closeAll();
    });
    this.settings.notify.pipe(filter((w) => w.name === 'direction')).subscribe((res) => {
      this.dir = res.value;
      this.updateHtml();
    });
  }

  private updateHtml(): void {
    const htmlEl = this.doc.querySelector('html') as HTMLElement;
    if (htmlEl) {
      htmlEl.setAttribute('dir', this.dir);
    }
  }
}
