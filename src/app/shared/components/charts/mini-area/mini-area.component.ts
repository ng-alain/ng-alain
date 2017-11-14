import { Component, Input, HostBinding, ViewChild, ElementRef, OnDestroy, OnChanges, SimpleChanges, NgZone, AfterViewInit } from '@angular/core';

@Component({
    selector: 'mini-area',
    template: `
    <div class="g2-chart__desc"><div #container></div></div>
    `
})
export class MiniAreaComponent implements OnDestroy, OnChanges, AfterViewInit {

    // region: fields

    @Input() color = 'rgba(24, 144, 255, 0.2)';
    @Input() borderColor = '#1890FF';
    @Input() borderWidth = 2;

    @HostBinding('style.height.px')
    @Input() height = 0;

    @Input() fit = true;
    @Input() line = false;
    @Input() animate = true;
    @Input() xAxis: any;
    @Input() yAxis: any;
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

        this.zone.runOutsideAngular(() => {

        this.node.nativeElement.innerHTML = '';

            const chart = new G2.Chart({
                container: this.node.nativeElement,
                forceFit: this.fit,
                height: +this.height + 54,
                animate: this.animate,
                plotCfg: {
                    margin: [36, 5, 30, 5],
                },
                legend: null
            });

            if (!this.xAxis && !this.yAxis) {
                chart.axis(false);
            }

            if (this.xAxis) {
                chart.axis('x', this.xAxis);
            } else {
                chart.axis('x', false);
            }

            if (this.yAxis) {
                chart.axis('y', this.yAxis);
            } else {
                chart.axis('y', false);
            }

            const dataConfig = {
                x: {
                    type: 'cat',
                    range: [0, 1],
                    xAxis: this.xAxis
                },
                y: {
                    min: 0,
                    yAxis: this.yAxis
                }
            };

            chart.tooltip({
                title: null,
                crosshairs: false,
                map: {
                    title: null,
                    name: 'x',
                    value: 'y'
                }
            });

            const view = chart.createView();
            view.source(this.data, dataConfig);

            view.area().position('x*y').color(this.color).shape('smooth').style({ fillOpacity: 1 });

            if (this.line) {
                const view2 = chart.createView();
                view2.source(this.data, dataConfig);
                view2.line().position('x*y').color(this.borderColor).size(this.borderWidth).shape('smooth');
                view2.tooltip(false);
            }
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
