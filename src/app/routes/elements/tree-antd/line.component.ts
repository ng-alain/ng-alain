import { Component, OnInit } from '@angular/core';
import { generateData } from './generate-data';

@Component({
  selector: 'app-tree-antd-demo-line',
  template: `
    <nz-card nzTitle="Line">
        <nz-tree [nzNodes]="nodes"
                [nzShowLine]="true"
                (nzEvent)="onEvent($event)"></nz-tree>
    </nz-card>
  `
})
export class TreeAntdLineComponent implements OnInit {
  nodes = [];

  ngOnInit() {
    generateData(this.nodes, 3, 2, 1);
  }

  onEvent(ev: any) {
    console.log('line', 'onEvent', ev);
  }
}
