import { Component } from '@angular/core';
import { NzMessageService } from "ng-zorro-antd";
import { SettingsService } from "@core/services/settings.service";
import { MenuService } from '@core/services/menu.service';

@Component({
  selector   : 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls  : ['./sidebar.component.scss']
})
export class SidebarComponent {
    constructor(
        private _message: NzMessageService,
        public menuSrv: MenuService,
        public settings: SettingsService) {
    }

    show(msg: string) {
        this._message.success(msg);
    }

    closeMenu() {
        this.settings.setLayout('collapsed', false);
    }
}
