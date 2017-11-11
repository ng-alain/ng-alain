import { Component, Input, ViewChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'desc-list-item',
    template: `
    <ng-template #tpl>
        <div class="term">{{term}}</div>
        <div class="detail"><ng-content></ng-content></div>
    </ng-template>
    `
})
export class DescListItemComponent {

    // region fields

    @Input() term: string;

    // endregion

    @ViewChild('tpl') tpl: TemplateRef<any>;
}
