import { Component } from '@angular/core';
import { SettingsService } from '@core/services/settings.service';

@Component({
  selector: 'app-pages-500',
  templateUrl: './500.component.html',
  styleUrls: ['./500.component.scss']
})
export class Page500Component {

    constructor(public settings: SettingsService) {}

}
