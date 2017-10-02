import { Component, ViewChild, ElementRef, NgZone, OnDestroy } from '@angular/core';
import { AqmComponent } from 'angular-qq-maps';

declare const qq: any;

@Component({
    selector: 'app-maps-qq',
    templateUrl: './qq.component.html'
})
export class MapsQQComponent implements OnDestroy {
    options: any = {};
    status = '';
    @ViewChild('map') mapComp: AqmComponent;
    satelliteOptions: any;
    private mapSatellite: any;

    constructor(private el: ElementRef, private zone: NgZone) { }

    private map: any;
    onReady(mapNative: any) {
        mapNative.setOptions({
            zoom: 12,
            center: new qq.maps.LatLng(39.916527, 116.397128)
        });
        this.map = mapNative;
        this.status = '加载完成';
        // 添加监听事件
        qq.maps.event.addListener(this.map, 'click', (event: any) => {
            // tslint:disable-next-line:no-unused-expression
            new qq.maps.Marker({
                position: event.latLng,
                map: this.map
            });
            this.zone.run(() => {
                this.status = `click ${+new Date}`;
            });
        });
    }

    panTo() {
        this.map.panTo(new qq.maps.LatLng(39.9, 116.4));
    }

    zoom() {
        this.map.zoomTo((this.map.getZoom() + 1) % 17);
    }

    infoWindow() {
        const infoWin = new qq.maps.InfoWindow({
            map: this.map
        });
        infoWin.open();
        infoWin.setContent('Hello world');
        infoWin.setPosition(this.map.getCenter());
    }

    // 卫星
    onReadySatellite(mapNative: any) {
        mapNative.setOptions({
            zoom: 14,
            center: new qq.maps.LatLng(39.916527, 116.397128),
            mapTypeId: qq.maps.MapTypeId.SATELLITE
        });
        this.mapSatellite = mapNative;
    }

    ngOnDestroy(): void {
        ['click'].forEach(eventName => {
            qq.maps.event.clearListeners(this.map, eventName);
        });
    }
}
