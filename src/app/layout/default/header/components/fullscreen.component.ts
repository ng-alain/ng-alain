import { Component, HostListener } from '@angular/core';
import * as screenfull from 'screenfull';

@Component({
    selector: 'header-fullscreen',
    template: `
    <div>
    <i class="anticon anticon-{{status ? 'shrink' : 'arrows-alt'}}"></i>
    {{(status ? 'fullscreen-exit' : 'fullscreen') | translate }}
    </div>
    `
})
export class HeaderFullScreenComponent {

    status = false;

    @HostListener('window:resize')
    _resize() {
        this.status = screenfull.isFullscreen;
    }

    @HostListener('click')
    _click() {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
    }
}
