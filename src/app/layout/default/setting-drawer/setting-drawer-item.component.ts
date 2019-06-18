import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'setting-drawer-item',
  templateUrl: './setting-drawer-item.component.html',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '[class.setting-drawer__body-item]': 'true',
  },
})
export class SettingDrawerItemComponent {
  i: any = {};
  @Input()
  set data(val: any) {
    this.i = val;
    if (val.type === 'px') {
      this.pxVal = +val.value.replace('px', '');
    }
  }

  pxVal: number;
  pxChange(val: number) {
    this.i.value = `${val}px`;
  }
  format = value => `${value} px`;
}
