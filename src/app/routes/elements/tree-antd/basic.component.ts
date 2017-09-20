import { Component } from '@angular/core';
import { generateData } from './generate-data';

@Component({
  selector: 'tree-antd-demo-basic',
  template: `
  <nz-card>
      <ng-template #title>Basic</ng-template>
      <ng-template #body>
        <nz-tree [nzNodes]="nodes"
                [nzCheckable]="true"
                (nzEvent)="onEvent($event)"></nz-tree>
      </ng-template>
  </nz-card>
  `
})
export class TreeAntdBasicComponent {
  nodes = [];

  ngOnInit() {
    generateData(this.nodes, 3, 2, 1);
  }

  onEvent(ev: any) {
    console.log('basic', 'onEvent', ev);
  }
}
