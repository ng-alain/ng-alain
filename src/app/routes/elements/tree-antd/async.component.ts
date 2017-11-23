import { Component } from '@angular/core';

@Component({
  selector: 'app-tree-antd-demo-async',
  template: `
    <nz-card nzTitle="Async">
        <nz-tree [nzNodes]="nodes"
                [nzCheckable]="true"
                [nzOptions]="options"
                (nzEvent)="onEvent($event)"></nz-tree>
    </nz-card>
  `
})
export class TreeAntdAsyncComponent {
  nodes = [
    {
      name: 'root1',
      hasChildren: true
    },
    {
      name: 'root2',
      hasChildren: true
    },
    {
      name: 'root3',
      hasChildren: true
    },
    {
      name: 'root4',
      hasChildren: true
    }
  ];

  options = {
    getChildren: (node: any) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve([
          { name: 'async data1' },
          { name: 'async data2', hasChildren: true }
        ]), 1000);
      });
    }
  };

  onEvent(ev: any) {
    console.log('async', 'onEvent', ev);
  }
}
