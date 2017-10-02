import { Component } from '@angular/core';
import { ColorsService } from '@core/services/colors.service';

@Component({
    selector: 'app-colors',
    templateUrl: './colors.component.html'
})
export class ColorsComponent {
    nums = Array(10).fill(1).map((v, i) => v + i);
    colors = [];
    constructor(public colorSrv: ColorsService) {
        this.colors = colorSrv.names.slice(0, colorSrv.names.length - 1);
    }
}
