import { Component, Directive, OnInit, Input, HostBinding, OnDestroy, ElementRef, Renderer2, HostListener, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';

const ANTDERRORCLS = '.has-error';
const HEADERMINHEIGHT = 65 + 8 * 2;

/**
 * 错误消息采集器
 * PS：虽然此法并不好看，但对响应式表单&模板表单有很好的效果。
 */
@Component({
    selector: 'error-collect, [error-collect]',
    template: `<i class="anticon anticon-exclamation-circle"></i> {{count}}`,
    // tslint:disable-next-line:use-host-property-decorator
    host: {
        '[class.error-collect]': 'true',
        '[class.pr-lg]': 'true',
        '[class.text-error]': 'true',
        '[class.point]': 'true'
    }
})
export class ErrorCollectComponent implements OnInit, OnDestroy {

    $time = null;
    formEl: HTMLFormElement;

    @Input() tick = 500;

    @HostBinding('class.d-none')
    _hiden = true;

    count = 0;

    constructor(private el: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private doc: Document) {}

    private update() {
        this.count = this.formEl.querySelectorAll(ANTDERRORCLS).length;
        this._hiden = this.count === 0;
    }

    @HostListener('click')
    _click() {
        if (this.count === 0) return false;
        // nz-form-item
        let formItemEl = this.findParent(this.formEl.querySelector(ANTDERRORCLS), '[nz-form-item]');
        if (!formItemEl) formItemEl = this.formEl.querySelector(ANTDERRORCLS);
        formItemEl.scrollIntoView(true);
        // fix header height
        this.doc.documentElement.scrollTop -= HEADERMINHEIGHT;
    }

    private install() {
        this.uninstall();
        if (this.tick < 300) this.tick = 300;
        this.$time = setInterval(() => this.update(), this.tick);
    }

    private uninstall() {
        if (this.$time) clearInterval(this.$time);
    }

    private findParent(el: any, selector: string) {
        let retEl = null;
        while (el) {
            if (el.querySelector(selector)) {
                retEl = el;
                break;
            }
            el = el.parentElement;
        }
        return retEl;
    }

    ngOnInit() {
        this.formEl = this.findParent(this.el.nativeElement, 'form');
        if (this.formEl === null) throw new Error('未找到有效 form 元素');
        this.install();
    }

    ngOnDestroy() {
        this.uninstall();
    }
}
