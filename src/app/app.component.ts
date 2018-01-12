import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ThemesService, SettingsService, TitleService, _HttpClient } from '@delon/theme';
import { filter, map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CommonResult } from 'app/model/common/common-result';

@Component({
    selector: 'app-root',
    template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

    @HostBinding('class.layout-fixed') get isFixed() { return this.settings.layout.fixed; }
    @HostBinding('class.layout-boxed') get isBoxed() { return this.settings.layout.boxed; }
    @HostBinding('class.aside-collapsed') get isCollapsed() { return this.settings.layout.collapsed; }

    constructor(
        private http: HttpClient,
        private _http: _HttpClient,
        private theme: ThemesService,
        private settings: SettingsService,
        private router: Router,
        private titleSrv: TitleService) {
    }

    ngOnInit() {
        this.router.events.pipe(
            filter(evt => evt instanceof NavigationEnd),
            map(() => this.router.url)
        )
            .subscribe(url => {
                this.titleSrv.setTitleByUrl(url);
            });

        const headers = new HttpHeaders()
            .set('x-requested-with', 'XMLHttpRequest')
            .set('Content-Type', 'application/x-www-form-urlencoded');

        this._http.post('sys/menu/ajaxList', {}, {}, { withCredentials: true, headers: headers })
            .subscribe((res: any) => {
                let a = res;
                console.log(a);
            });
    }
}
