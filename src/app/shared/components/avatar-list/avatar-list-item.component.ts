import { Component, Input } from '@angular/core';

@Component({
    selector: 'avatar-list-item, [avatar-list-item]',
    template: ``
})
export class AvatarListItemComponent {
    @Input() src: string;
    @Input() tips: string;
}
