import { Component, Input, HostBinding, ViewChild, ElementRef, OnDestroy, OnChanges, SimpleChanges, NgZone, AfterViewInit } from '@angular/core';

@Component({
    selector: 'mini-bar',
    template: `
    <div class="g2-chart__desc"><div #container></div></div>
    `
})
export class MiniBarComponent implements OnDestroy, OnChanges, AfterViewInit {

    // region: fields

    @Input() color = '#1890FF';

    @HostBinding('style.height.px')
    @Input() height = 0;

    @Input() borderWidth = 5;

    @Input() margin: number[] = [36, 5, 30, 5];

    @Input() data: any[];

    // endregion

    @HostBinding('class.g2-chart') _cls = true;

    @ViewChild('container') node: ElementRef;

    chart: any;
    initFlag = false;

    constructor(private zone: NgZone) { }

    ngAfterViewInit(): void {
        this.initFlag = true;
        this.install();
    }

    install() {
        if (!this.data || (this.data && this.data.length < 1)) return;
        this.uninstall();

        this.zone.runOutsideAngular(() => {

            this.node.nativeElement.innerHTML = '';

            const { Frame } = G2;
            const frame = new Frame(this.data);

            const chart = new G2.Chart({
                container: this.node.nativeElement,
                forceFit: true,
                height: +this.height + 54,
                plotCfg: {
                    margin: this.margin
                },
                legend: null
            });

            chart.axis(false);

            chart.source(frame, {
                x: {
                    type: 'cat'
                },
                y: {
                    min: 0
                }
            });

            chart.tooltip({
                title: null,
                crosshairs: false,
                map: {
                    name: 'x'
                }
            });
            chart.interval().position('x*y').size(this.borderWidth).color(this.color);

            chart.render();

            this.zone.run(() => this.chart = chart);
        });
    }

    uninstall() {
        if (this.chart) {
            this.zone.runOutsideAngular(() => {
                this.chart.destroy();
            });
            this.chart = null;
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.initFlag)
            this.install();
    }

    ngOnDestroy(): void {
        this.uninstall();
    }
}
