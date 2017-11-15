import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { SettingsService } from './core/services/settings.service';
import { ThemesService } from './core/services/themes.service';
import { TranslatorService } from './core/translator/translator.service';
import { TitleService } from '@core/services/title.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  @HostBinding('class.layout-fixed') get isFixed() { return this.settings.layout.fixed; }
  @HostBinding('class.layout-boxed') get isBoxed() { return this.settings.layout.boxed; }
  @HostBinding('class.aside-collapsed') get isCollapsed() { return this.settings.layout.collapsed; }

  constructor(
    private theme: ThemesService,
    private tsServ: TranslatorService,
    private settings: SettingsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private titleSrv: TitleService) {
  }

  ngOnInit() {
    this.router
        .events
        .filter(evt => evt instanceof NavigationEnd)
        .map(() => this.activatedRoute)
        .map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
        .filter((route) => route.outlet === 'primary')
        .mergeMap((route) => route.data)
        .subscribe(event => {
          let t = event['translate'];
          if (t) {
            t = this.tsServ.fanyi(t);
          } else {
            t = event['title'];
          }
          this.titleSrv.setTitle(t);
        });
  }
}
