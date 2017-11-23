import { ElementRef, Renderer2, HostBinding } from '@angular/core';
// tslint:disable
import { Directive, Input, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

const CLS = 'fixed-btns';

@Directive({
    selector: '[fixed-btns]'
})
export class FixedBtnsDirective implements OnInit, OnDestroy {

    constructor(private el: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private doc: Document) {}

    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, CLS);
        this.doc.querySelector('body').classList.add(`has-${CLS}`);
    }

    ngOnDestroy() {
        this.doc.querySelector('body').classList.remove(`has-${CLS}`);
    }

}
