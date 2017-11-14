import { Component, Input, HostBinding, ViewChild, ElementRef, OnDestroy, OnChanges, SimpleChanges, NgZone, AfterViewInit, TemplateRef, OnInit, HostListener, ViewEncapsulation, Output, EventEmitter, ContentChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'pie',
    template: `
    <div class="chart">
        <div #container></div>
        <div *ngIf="subTitle || total" class="total">
            <h4 *ngIf="subTitle" class="pie-sub-title" [innerHTML]="subTitle"></h4>
            <div *ngIf="total" class="pie-stat" [innerHTML]="total"></div>
        </div>
    </div>
    <ul *ngIf="hasLegend" class="legend">
        <li *ngFor="let item of legendData; let index = index" (click)="handleLegendClick(item, index)">
            <span class="dot" [ngStyle]="{'background-color': !item.checked ? '#aaa' : item.color}"></span>
            <span class="legend-title">{{item.x}}</span>
            <nz-divider nzType="vertical"></nz-divider>
            <span class="percent">{{(item['..percent'] * 100).toFixed(2)}}%</span>
            <span class="value" [innerHTML]="valueFormat ? valueFormat(item.y) : item.y"></span>
        </li>
    </ul>
    `,
    styleUrls: [ './pie.less' ],
    encapsulation: ViewEncapsulation.Emulated
})
export class G2PieComponent implements OnDestroy, OnChanges, AfterViewInit, OnInit {

    // region: fields

    @Input() animate = true;
    @Input() color = 'rgba(24, 144, 255, 0.85)';
    @Input() subTitle: string;
    @Input() total: string;
    @Input() height = 0;

    @HostBinding('class.has-legend')
    @Input() hasLegend = false;

    @HostBinding('class.legend-block')
    @Input() legendBlock = false;

    @Input() inner = 0.75;
    @Input() margin: number[] = [12, 0, 12, 0];
    @Input() percent: number;
    @Input() tooltip = true;
    @Input() lineWidth = 0;
    @Input() selected = true;
    @Input() data: any;
    @Input() valueFormat: Function;
    @Input() colors: any[];

    // endregion

    @ViewChild('container') node: ElementRef;

    chart: any;
    initFlag = false;
    legendData: any[] = [];

    constructor(private el: ElementRef, private zone: NgZone) { }

    ngAfterViewInit(): void {
        this.initFlag = true;
        this.install();
    }

    install() {
        let formatColor;
        if (this.percent) {
            this.selected = false;
            this.tooltip = false;
            formatColor = (value) => value === '占比' ? this.color || 'rgba(24, 144, 255, 0.85)' : '#F0F2F5';

            /* eslint no-param-reassign: */
            this.data = [
                {
                    x: '占比',
                    y: this.percent
                },
                {
                    x: '反比',
                    y: 100 - this.percent
                }
            ];
        }

        if (!this.data || (this.data && this.data.length < 1)) return;

        // this.uninstall();

        this.zone.runOutsideAngular(() => {

            this.node.nativeElement.innerHTML = '';

            const { Stat } = G2;

            const chart = new G2.Chart({
                container: this.node.nativeElement,
                forceFit: true,
                height: this.height,
                plotCfg: {
                    margin: this.margin
                },
                animate: this.animate
            });

            if (!this.tooltip) {
                chart.tooltip(false);
            } else {
                chart.tooltip({
                    title: null
                });
            }

            chart.axis(false);
            chart.legend(false);

            chart.source(this.data, {
                x: {
                    type: 'cat',
                    range: [0, 1]
                },
                y: {
                    min: 0
                }
            });

            chart.coord('theta', { inner: this.inner });

            chart
                .intervalStack()
                .position(Stat.summary.percent('y'))
                .style({ lineWidth: this.lineWidth, stroke: '#fff' })
                .color('x', this.percent ? formatColor : this.colors)
                .selected(this.selected);

            chart.render();

            this.zone.run(() => {
                this.chart = chart;
                if (this.hasLegend) {
                    const geom = chart.getGeoms()[0]; // 获取所有的图形
                    const items = geom.getData(); // 获取图形对应的数据
                    this.legendData = items.map((item) => {
                      const origin = item._origin;
                      origin.color = item.color;
                      origin.checked = true;
                      return origin;
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

    handleLegendClick(item: any, i: number) {
        const newItem = item;
        newItem.checked = !newItem.checked;

        this.legendData[i] = newItem;

        if (this.chart) {
            const filterItem = this.legendData.filter(l => l.checked).map(l => l.x);
            this.chart.filter('x', filterItem);
            this.chart.repaint();
        }
    }

    ngOnInit(): void {
        this.installResizeEvent();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.initFlag)
            this.install();
    }

    ngOnDestroy(): void {
        this.uninstallResizeEvent();
        this.uninstall();
    }

    // region: resize

    private autoHideXLabels = false;
    private scroll$: Subscription = null;
    private installResizeEvent() {
        if (!this.hasLegend) return;

        this.scroll$ = Observable.fromEvent(window, 'resize')
                                 .debounceTime(200)
                                 .subscribe(() => this.resize());
    }

    private uninstallResizeEvent() {
        if (this.scroll$) this.scroll$.unsubscribe();
    }

    resize() {
        if (this.el.nativeElement.clientWidth <= 380) {
            if (!this.legendBlock) {
                this.legendBlock = true;
            }
        } else if (this.legendBlock) {
            this.legendBlock = false;
        }
        if (!this.chart) this.install();
    }

    // endregion
}
