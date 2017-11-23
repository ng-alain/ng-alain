import { Component, Input, HostBinding, ViewChild, ElementRef, OnDestroy, OnChanges, SimpleChanges, NgZone, AfterViewInit, TemplateRef, OnInit, HostListener, ViewEncapsulation, Output, EventEmitter, ContentChild } from '@angular/core';

@Component({
    selector: 'radar',
    template: `
    <h4 *ngIf="_title; else _titleTpl">{{ _title }}</h4>
    <div #container></div>
    <div nz-row class="legend" *ngIf="hasLegend">
        <div nz-col [nzSpan]="24 / legendData.length" *ngFor="let i of legendData; let idx = index" (click)="handleLegendClick(i, idx)">
            <div class="legend-item">
                <p>
                    <i class="dot" [ngStyle]="{'background-color': !i.checked ? '#aaa' : i.color}"></i>
                    <span>{{i.name}}</span>
                </p>
                <h6>{{i.value}}</h6>
            </div>
        </div>
    </div>
    `,
    styleUrls: [ './radar.less' ],
    encapsulation: ViewEncapsulation.Emulated
})
export class G2RadarComponent implements OnDestroy, OnChanges, AfterViewInit, OnInit {

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

    @HostBinding('style.height.px')
    @Input() height = 0;
    @Input() margin: number[] = [24, 30, 16, 30];
    @Input() hasLegend = true;
    @Input() tickCount = 4;
    @Input() data: any[] = [];

    // endregion

    @ViewChild('container') node: ElementRef;

    chart: any;
    initFlag = false;
    legendData: any[] = [];

    constructor(private el: ElementRef, private zone: NgZone) { }

    handleLegendClick(item: any, i: number) {
        const newItem = item;
        newItem.checked = !newItem.checked;

        this.legendData[i] = newItem;

        if (this.chart) {
            const filterItem = this.legendData.filter(l => l.checked).map(l => l.name);
            this.chart.filter('name', filterItem);
            this.chart.repaint();
        }
    }

    ngAfterViewInit(): void {
        this.initFlag = true;
        this.install();
    }

    install() {
        if (!this.data || (this.data && this.data.length < 1)) return;

        // this.uninstall();

        this.zone.runOutsideAngular(() => {

            this.node.nativeElement.innerHTML = '';

            const colors = [
                '#1890FF', '#FACC14', '#2FC25B', '#8543E0', '#F04864', '#13C2C2', '#fa8c16', '#a0d911',
            ];

            const chart = new G2.Chart({
                container: this.node.nativeElement,
                forceFit: true,
                height: +this.height - (this.hasLegend ? 80 : 22),
                plotCfg: {
                    margin: this.margin
                }
            });
            chart.source(this.data, {
                value: {
                    min: 0,
                    tickCount: this.tickCount
                }
            });

            chart.coord('polar');
            chart.legend(false);

            chart.axis('label', {
                line: null,
                labelOffset: 8,
                labels: {
                    label: {
                        fill: 'rgba(0, 0, 0, .65)'
                    }
                },
                grid: {
                    line: {
                        stroke: '#e9e9e9',
                        lineWidth: 1,
                        lineDash: [0, 0]
                    }
                }
            });

            chart.axis('value', {
                grid: {
                    type: 'polygon',
                    line: {
                        stroke: '#e9e9e9',
                        lineWidth: 1,
                        lineDash: [0, 0]
                    }
                },
                labels: {
                    label: {
                        fill: 'rgba(0, 0, 0, .65)'
                    }
                }
            });

            chart.line().position('label*value').color('name', colors);
            chart.point().position('label*value').color('name', colors).shape('circle').size(3);

            chart.render();

            this.zone.run(() => {
                this.chart = chart;

                if (this.hasLegend) {
                    const geom = chart.getGeoms()[0]; // 获取所有的图形
                    const items = geom.getData(); // 获取图形对应的数据
                    this.legendData = items.map((item) => {
                        const origin = item._origin;
                        const result = {
                                name: origin[0].name,
                                color: item.color,
                                checked: true,
                                value: origin.reduce((p, n) => p + n.value, 0),
                        };

                        return result;
                    });
                }
            });
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

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.initFlag)
            this.install();
    }

    ngOnDestroy(): void {
        this.uninstall();
    }
}
