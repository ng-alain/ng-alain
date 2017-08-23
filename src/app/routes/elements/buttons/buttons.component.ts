import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
    disabled: boolean = false;
    loading: boolean = false;
    size: string = 'default';

    toggleDisabled() {
        this.disabled = !this.disabled;
    }

    toggleLoading() {
        this.loading = !this.loading;
    }
}
