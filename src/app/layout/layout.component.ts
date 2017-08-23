import { MenuService } from './../core/menu/menu.service';
import { Component } from '@angular/core';
import { Router, NavigationEnd, RouteConfigLoadStart } from "@angular/router";

import { SettingsService } from '../core/settings/settings.service';
import { ScrollService } from './../shared/scroll.service';
import { NzMessageService } from "ng-zorro-antd";

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
    isFetching: boolean = false;

    constructor(
        router: Router,
        scroll: ScrollService,
        private _message: NzMessageService,
        public menuSrv: MenuService,
        public settings: SettingsService) {
        // scroll to top in change page
        router.events.subscribe(evt => {
            if (!this.isFetching && evt instanceof RouteConfigLoadStart)
                this.isFetching = true;
            if (!(evt instanceof NavigationEnd)) return;
            setTimeout(() => {
                scroll.scrollToTop();
                this.isFetching = false;
            }, 100);

            // activation menu selected status by current url.
            this.menuSrv.setSelected(evt.url);
        });
    }
}
