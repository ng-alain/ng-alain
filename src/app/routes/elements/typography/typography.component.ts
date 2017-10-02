import { Component } from '@angular/core';
import { ColorsService } from '@core/services/colors.service';

@Component({
    selector: 'app-typography',
    templateUrl: './typography.component.html'
})
export class TypographyComponent {

    colors: string[] = [];

    constructor(srv: ColorsService) {
        this.colors = srv.brands;
    }
}
