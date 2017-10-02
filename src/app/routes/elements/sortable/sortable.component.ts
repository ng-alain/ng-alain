import { Component, ViewEncapsulation } from '@angular/core';
@Component({
    selector: 'app-sortable',
    templateUrl: './sortable.component.html'
})
export class DemoSortableComponent {
    hiBaby: string[] = ['沐剑屏', '方怡', '双儿', '建宁公主', '苏荃', '曾柔', '阿珂'];
    hiBabyLove: string[] = ['双儿', '曾柔', '阿珂'];

    frontMidnight: string[] = ['沐剑屏', '方怡'];
    afterMidnight: string[] = ['建宁公主', '苏荃'];
}
