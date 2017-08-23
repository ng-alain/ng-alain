import { ColorsService } from './../../../shared/colors.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-colors',
    templateUrl: './colors.component.html',
    styleUrls: ['./colors.component.scss']
})
export class ColorsComponent {
    colors = [];
    constructor(public colorSrv: ColorsService) {
        this.colors = colorSrv.names.slice(0, colorSrv.names.length - 1);
    }
}
