import { Component, Input, HostBinding, ViewChild, ElementRef, OnDestroy, OnChanges, SimpleChanges, NgZone, AfterViewInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'timeline',
    template: `
    <ng-container *ngIf="_title; else _titleTpl"><h4>{{_title}}</h4></ng-container>
    <div #container></div>
    <div #slider></div>
    `
})
export class TimelineComponent implements OnDestroy, OnChanges, AfterViewInit {

    // region: fields

    _title = '';
    _titleTpl: TemplateRef<any>;
    @Input()
    set title(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._titleTpl = value;
        else
            this._title = value;
    }

    @Input() data: any[];
    @Input() titleMap: any;
    @Input() height = 400;
    @Input() margin: number[] = [60, 20, 40, 40];
    @Input() borderWidth = 2;

    // endregion

    @ViewChild('container') node: ElementRef;
    @ViewChild('slider') sliderNode: ElementRef;

    chart: any;
    initFlag = false;
    slider: any;

    constructor(private zone: NgZone) { }

    ngAfterViewInit(): void {
        this.initFlag = true;
        this.installDelay();
    }

    installDelay() {
        // TODO: 很多场景可能会在组件加载后才呈现，导致无法渲染
        setTimeout(() => this.install(), 100);
    }

    install() {
        if (!this.data || (this.data && this.data.length < 1)) return;
        this.uninstall();

        this.zone.runOutsideAngular(() => {
            // clean
            if (this.sliderNode) {
                this.sliderNode.nativeElement.id = `timeline-chart-slider-${Math.random() * 1000}`;
                this.sliderNode.nativeElement.innerHTML = '';
            }
            this.node.nativeElement.innerHTML = '';

            const chart = new G2.Chart({
                container: this.node.nativeElement,
                forceFit: true,
                height: this.height,
                plotCfg: {
                    margin: this.margin
                }
            });

            chart.axis('x', {
                title: false
            });
            chart.axis('y1', {
                title: false
            });
            chart.axis('y2', false);

            chart.legend({
                mode: false,
                position: 'top'
            });

            let max;
            if (this.data[0] && this.data[0].y1 && this.data[0].y2) {
                max = Math.max(
                        this.data.sort((a, b) => b.y1 - a.y1)[0].y1,
                        this.data.sort((a, b) => b.y2 - a.y2)[0].y2
                    );
            }

            chart.source(this.data, {
                x: {
                    type: 'timeCat',
                    tickCount: 16,
                    mask: 'HH:MM',
                    range: [0, 1]
                },
                y1: {
                    alias: this.titleMap.y1,
                    max,
                    min: 0
                },
                y2: {
                    alias: this.titleMap.y2,
                    max,
                    min: 0
                }
            });

            chart.line().position('x*y1').color('#1890FF').size(this.borderWidth);
            chart.line().position('x*y2').color('#2FC25B').size(this.borderWidth);

            const slider = new Slider({
                domId: this.sliderNode.nativeElement.id,
                height: 26,
                xDim: 'x',
                yDim: 'y1',
                charts: [chart]
            });
            slider.render();

            this.zone.run(() => {
                this.chart = chart;
                this.slider = slider;
            });
        });
    }

    uninstall() {
        this.zone.runOutsideAngular(() => {
            if (this.chart) this.chart.destroy();
            if (this.slider) this.slider.destroy();
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
