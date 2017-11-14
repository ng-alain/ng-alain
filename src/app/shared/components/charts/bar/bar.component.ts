import { Component, Input, HostBinding, ViewChild, ElementRef, OnDestroy, OnChanges, SimpleChanges, NgZone, AfterViewInit, TemplateRef, OnInit, HostListener } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'bar',
    template: `
    <ng-container *ngIf="_title; else _titleTpl"><h4>{{_title}}</h4></ng-container>
    <div #container></div>
    `
})
export class G2BarComponent implements OnDestroy, OnChanges, AfterViewInit, OnInit {

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

    @Input() color = 'rgba(24, 144, 255, 0.85)';
    @HostBinding('style.height.px')
    @Input() height = 0;
    @Input() margin: number[];
    @Input() data: any[];
    @Input() autoLabel = true;

    // endregion

    @HostBinding('class.g2-chart') _cls = true;

    @ViewChild('container') node: ElementRef;

    chart: any;
    initFlag = false;

    constructor(private el: ElementRef, private zone: NgZone) { }

    ngAfterViewInit(): void {
        this.initFlag = true;
        this.resize();
    }

    install() {
        if (!this.data || (this.data && this.data.length < 1)) return;
        // this.uninstall();

        if (!this.margin) this.margin = [32, 0, this.autoHideXLabels ? 8 : 32, 40];

        this.zone.runOutsideAngular(() => {

            this.node.nativeElement.innerHTML = '';

            const { Frame } = G2;
            const frame = new Frame(this.data);

            const chart = new G2.Chart({
                container: this.node.nativeElement,
                forceFit: true,
                height: +this.height - 22,
                legend: null,
                plotCfg: {
                    margin: this.margin
                }
            });

            if (this.autoHideXLabels) {
                chart.axis('x', {
                    title: false,
                    tickLine: false,
                    labels: false
                });
            } else {
                chart.axis('x', {
                    title: false
                });
            }
            chart.axis('y', {
                title: false,
                line: false,
                tickLine: false
            });

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
            chart.interval().position('x*y').color(this.color).style({
                fillOpacity: 1,
            });
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
        if (!this.autoLabel || this.scroll$) return;

        this.scroll$ = Observable.fromEvent(window, 'resize')
                                 .debounceTime(200)
                                 .subscribe(() => this.resize());
    }

    private uninstallResizeEvent() {
        if (this.scroll$) this.scroll$.unsubscribe();
    }

    resize() {
        const canvasWidth = this.el.nativeElement.clientWidth;
        const minWidth = this.data.length * 30;

        if (canvasWidth <= minWidth) {
            if (!this.autoHideXLabels) {
                this.autoHideXLabels = true;
                this.install();
                return;
            }
        } else if (this.autoHideXLabels) {
            this.autoHideXLabels = false;
            this.install();
            return;
        }
        if (!this.chart) this.install();
    }

    // endregion
}
