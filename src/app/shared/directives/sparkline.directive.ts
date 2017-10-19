// tslint:disable:directive-selector
import { Directive, Input, ElementRef, OnInit, OnDestroy } from '@angular/core';
declare var $: any;

@Directive({
    selector: '[sparkline]'
})
export class SparklineDirective implements OnInit, OnDestroy {

    @Input() sparkline;

    private resizeEventId = 'resize.sparkline' + 1324;

    constructor(private el: ElementRef) {}

    ngOnInit(): void {
        this.initSparkLine();
    }

    initSparkLine() {
        const $el = $(this.el.nativeElement),
              data = $el.data();
        let options = this.sparkline;

        if (!options) {
            options = data;
        } else {
            if (data) {
                options = $.extend({}, options, data);
            }
        }

        options.type = options.type || 'bar';
        options.disableHiddenCheck = true;

        $el.sparkline('html', options);

        if (options.resize) {
            $(window).on(this.resizeEventId, () => {
                $el.sparkline('html', options);
            });
        }
    }

    ngOnDestroy() {
        $(window).off(this.resizeEventId);
    }
}
