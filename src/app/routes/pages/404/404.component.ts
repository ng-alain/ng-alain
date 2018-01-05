import { Component } from '@angular/core';
import { SettingsService } from '@delon/theme';

@Component({
  selector: 'app-pages-404',
  templateUrl: './404.component.html'
})
export class Page404Component {

    constructor(public settings: SettingsService) {}

}
