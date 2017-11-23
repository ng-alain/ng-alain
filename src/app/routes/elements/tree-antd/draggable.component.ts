import { Component, OnInit } from '@angular/core';
import { generateData } from './generate-data';

@Component({
  selector: 'app-tree-antd-demo-draggable',
  template: `
    <nz-card nzTitle="Draggable">
        <nz-tree [nzNodes]="nodes"
                [nzOptions]="options"
                (nzEvent)="onEvent($event)"></nz-tree>
    </nz-card>
  `
})
export class TreeAntdDraggableComponent implements OnInit {
  nodes = [];

  options = {
    allowDrag: true
  };

  ngOnInit() {
    generateData(this.nodes, 3, 2, 1);
  }

  onEvent(ev: any) {
    console.log('basic', 'onEvent', ev);
  }
}
