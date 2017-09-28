import { Component, OnInit } from '@angular/core';
import { generateData } from './generate-data';

@Component({
  selector: 'app-tree-antd-demo-line',
  template: `
  <nz-card>
      <ng-template #title>Line</ng-template>
      <ng-template #body>
        <nz-tree [nzNodes]="nodes"
                [nzShowLine]="true"
                (nzEvent)="onEvent($event)"></nz-tree>
      </ng-template>
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
