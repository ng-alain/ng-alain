import { Component } from '@angular/core';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styles: [`
        .ant-box {
            margin-bottom: 16px;
            padding: 24px;
            border: 1px dashed #ddd;
            background: #fafafa;
            color: #444;
        }
    `]
})
export class DropdownComponent {
    ants = [
        'bounce',
        'flash',
        'pulse',
        'rubberBand',
        'shake',
        'swing',
        'tada',
        'wobble',
        'jello',
        'bounceIn',
        'bounceInDown',
        'bounceInLeft',
        'bounceInRight',
        'bounceInUp',
        'fadeIn',
        'fadeInDown',
        'fadeInDownBig',
        'fadeInLeft',
        'fadeInLeftBig',
        'fadeInRight',
        'fadeInRightBig',
        'fadeInUp',
        'fadeInUpBig',
        'flip',
        'flipInX',
        'flipInY',
        'lightSpeedIn',
        'rotateIn',
        'rotateInDownLeft',
        'rotateInDownRight',
        'rotateInUpLeft',
        'rotateInUpRight',
        'slideInUp',
        'slideInDown',
        'slideInLeft',
        'slideInRight',
        'zoomIn',
        'zoomInDown',
        'zoomInLeft',
        'zoomInRight',
        'zoomInUp',
        'hinge',
        'jackInTheBox',
        'rollIn'
    ];
}
