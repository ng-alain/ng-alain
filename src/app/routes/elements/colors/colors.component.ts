import { ColorsService } from './../../../shared/services/colors.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-colors',
    templateUrl: './colors.component.html',
    styleUrls: ['./colors.component.scss']
})
export class ColorsComponent {
    nums = Array(10).fill(1).map((v, i) => v + i);
    colors = [];
    constructor(public colorSrv: ColorsService) {
        this.colors = colorSrv.names.slice(0, colorSrv.names.length - 1);
    }
}
