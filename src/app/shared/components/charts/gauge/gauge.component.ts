import { Component, Input, HostBinding, ViewChild, ElementRef, OnDestroy, OnChanges, SimpleChanges, NgZone, AfterViewInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'gauge',
    template: `<div #container></div>`,
    styles: [`:host { display: block; }`]
})
export class GaugeComponent implements OnDestroy, OnChanges, AfterViewInit {

    // region: fields

    @Input() title: string;
    @Input() height;
    @Input() color = '#2F9CFF';
    @Input() bgColor = '#F0F2F5';
    @Input() format: Function;

    @Input() percent: number;

    // endregion

    @ViewChild('container') node: ElementRef;

    chart: any;
    initFlag = false;

    constructor(private zone: NgZone) { }

    ngAfterViewInit(): void {
        this.initFlag = true;
        this.installDelay();
    }

    installDelay() {
        setTimeout(() => this.install(), 1000);
    }

    private initChart() {
        const color = this.color;
        G2.Shape.registShape('point', 'dashBoard', {
            drawShape(cfg, group) {
                const originPoint = cfg.points[0];
                const point = this.parsePoint({ x: originPoint.x, y: 0.4 });

                const center = this.parsePoint({
                    x: 0,
                    y: 0
                });

                const shape = group.addShape('polygon', {
                    attrs: {
                        points: [
                            [center.x, center.y],
                            [point.x + 8, point.y],
                            [point.x + 8, point.y - 2],
                            [center.x, center.y - 2]
                        ],
                        radius: 2,
                        lineWidth: 2,
                        arrow: false,
                        fill: color
                    }
                });

                group.addShape('Marker', {
                    attrs: {
                        symbol: 'circle',
                        lineWidth: 2,
                        fill: color,
                        radius: 8,
                        x: center.x,
                        y: center.y
                    }
                });

                group.addShape('Marker', {
                    attrs: {
                        symbol: 'circle',
                        lineWidth: 2,
                        fill: '#fff',
                        radius: 5,
                        x: center.x,
                        y: center.y
                    }
                });

                const { origin } = cfg;
                group.addShape('text', {
                    attrs: {
                        x: center.x,
                        y: center.y + 80,
                        text: `${origin._origin.value}%`,
                        textAlign: 'center',
                        fontSize: 24,
                        fill: 'rgba(0, 0, 0, 0.85)'
                    }
                });

                group.addShape('text', {
                    attrs: {
                        x: center.x,
                        y: center.y + 45,
                        text: this.title,
                        textAlign: 'center',
                        fontSize: 14,
                        fill: 'rgba(0, 0, 0, 0.43)'
                    }
                });

                return shape;
            }
        });
    }

    install() {
        this.uninstall();

        this.zone.runOutsideAngular(() => {
            this.node.nativeElement.innerHTML = '';

            const data = [{ name: this.title, value: this.percent }];

            if (this.chart) this.chart.clear();

            this.initChart();

            const chart = new G2.Chart({
                container: this.node.nativeElement,
                forceFit: true,
                height: this.height,
                animate: false,
                plotCfg: {
                    margin: [10, 10, 30, 10]
                }
            });

            chart.source(data);

            chart.tooltip(false);

            chart.coord('gauge', {
                startAngle: -1.2 * Math.PI,
                endAngle: 0.20 * Math.PI
            });
            chart.col('value', {
                type: 'linear',
                nice: true,
                min: 0,
                max: 100,
                tickCount: 6
            });
            chart.axis('value', {
                subTick: false,
                tickLine: {
                    stroke: this.color,
                    lineWidth: 2,
                    value: -14
                },
                labelOffset: -12,
                formatter: this.format
            });

            chart.point().position('value').shape('dashBoard');

            // region: draw
            const val = data[0].value;
            const lineWidth = 12;
            chart.guide().clear();

            chart.guide().arc(() => {
                return [0, 0.95];
            }, () => {
                return [val, 0.95];
            }, {
                stroke: this.color,
                lineWidth
            });

            chart.guide().arc(() => {
                return [val, 0.95];
            }, (arg) => {
                return [arg.max, 0.95];
            }, {
                stroke: this.bgColor,
                lineWidth
            });

            chart.changeData(data);

            // endregion

            this.zone.run(() => {
                this.chart = chart;
            });
        });
    }

    uninstall() {
        this.zone.runOutsideAngular(() => {
            if (this.chart) this.chart.destroy();
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.initFlag)
            this.installDelay();
    }

    ngOnDestroy(): void {
        this.uninstall();
    }
}
