import { Component, Input, HostBinding, ViewChild, ElementRef, OnDestroy, OnChanges, SimpleChanges, NgZone, AfterViewInit, TemplateRef, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'tag-cloud',
    template: `<div #container [ngStyle]="{'height.px': height}"></div>`,
    styleUrls: [ './tag-cloud.less' ],
    encapsulation: ViewEncapsulation.Emulated
})
export class TagCloudComponent implements OnDestroy, OnChanges, AfterViewInit, OnInit {

    // region: fields

    @Input() color = 'rgba(24, 144, 255, 0.85)';
    @Input() height = 0;
    @Input() margin: number[];
    @Input() data: any[];
    @Input() autoLabel = true;

    // endregion

    @ViewChild('container') node: ElementRef;

    chart: any;
    initFlag = false;

    constructor(private el: ElementRef, private zone: NgZone) { }

    private initTagCloud() {
        const { Util, Shape } = G2;

        function getTextAttrs(cfg) {
            const textAttrs = Util.mix(true, {}, {
                fillOpacity: cfg.opacity,
                fontSize: cfg.size,
                rotate: cfg.origin._origin.rotate,
                // rotate: cfg.origin._origin.rotate,
                text: cfg.origin._origin.text,
                textAlign: 'center',
                fill: cfg.color,
                textBaseline: 'Alphabetic'
            }, cfg.style);
            return textAttrs;
        }

        // 给point注册一个词云的shape
        Shape.registShape('point', 'cloud', {
            drawShape(cfg, container) {
                cfg.points = this.parsePoints(cfg.points);
                const attrs = getTextAttrs(cfg);
                const shape = container.addShape('text', {
                    attrs: Util.mix(attrs, {
                        x: cfg.points[0].x,
                        y: cfg.points[0].y
                    })
                });
                return shape;
            }
        });
    }

    renderChart() {
        if (!this.data || (this.data && this.data.length < 1)) return;

        this.zone.runOutsideAngular(() => {

            const colors = ['#1890FF', '#41D9C7', '#2FC25B', '#FACC14', '#9AE65C'];

            const height = this.height * 4;
            const width = this.el.nativeElement.offsetWidth * 4;

            this.data.sort((a, b) => b.value - a.value);

            const max = this.data[0].value;
            const min = this.data[this.data.length - 1].value;

            // 构造一个词云布局对象
            const layout = new Cloud({
                words: this.data,
                width,
                height,

                rotate: () => 0,

                // 设定文字大小配置函数(默认为12-24px的随机大小)
                size: words => (((words.value - min) / (max - min)) * 50) + 30,

                // 设定文字内容
                text: words => words.name,
            });

            layout.image('https://gw.alipayobjects.com/zos/rmsportal/gWyeGLCdFFRavBGIDzWk.png', (imageCloud) => {
                this.node.nativeElement.innerHTML = '';
                // 执行词云布局函数，并在回调函数中调用G2对结果进行绘制
                imageCloud.exec((texts) => {
                    const chart = new G2.Chart({
                        container: this.node.nativeElement,
                        width,
                        height,
                        plotCfg: {
                            margin: 0
                        }
                    });

                    chart.legend(false);
                    chart.axis(false);
                    chart.tooltip(false);

                    chart.source(texts);

                    // 将词云坐标系调整为G2的坐标系
                    chart.coord().reflect();

                    chart
                        .point()
                        .position('x*y')
                        .color('text', colors)
                        .size('size', size => size)
                        .shape('cloud')
                        .style({
                            fontStyle: texts[0].style,
                            fontFamily: texts[0].font,
                            fontWeight: texts[0].weight
                        });

                    chart.render();
                });
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

    ngAfterViewInit(): void {
        this.initFlag = true;
        this.resize();
    }

    ngOnInit(): void {
        this.initTagCloud();
        this.installResizeEvent();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.initFlag)
            this.renderChart();
    }

    ngOnDestroy(): void {
        this.uninstallResizeEvent();
        this.uninstall();
    }

    // region: resize

    private autoHideXLabels = false;
    private scroll$: Subscription = null;
    private installResizeEvent() {
        if (!this.autoLabel || this.scroll$) return;

        this.scroll$ = Observable.fromEvent(window, 'resize')
                                 .debounceTime(500)
                                 .subscribe(() => this.resize());
    }

    private uninstallResizeEvent() {
        if (this.scroll$) this.scroll$.unsubscribe();
    }

    resize() {
        this.renderChart();
    }

    // endregion
}
