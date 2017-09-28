import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
    disabled = false;
    loading = false;
    size = 'default';

    toggleDisabled() {
        this.disabled = !this.disabled;
    }

    toggleLoading() {
        this.loading = !this.loading;
    }
}
