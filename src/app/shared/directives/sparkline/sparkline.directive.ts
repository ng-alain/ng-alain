import { Directive, Input, ElementRef } from "@angular/core";
declare var $: any;

@Directive({
    selector: '[sparkline]'
})
export class SparklineDirective {

    @Input() sparkline;

    private resizeEventId = 'resize.sparkline' + 1324;

    constructor(private el: ElementRef) {}

    ngOnInit(): void {
        this.initSparkLine();
    }

    initSparkLine() {
        let $el = $(this.el.nativeElement),
            options = this.sparkline,
            data = $el.data();

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
