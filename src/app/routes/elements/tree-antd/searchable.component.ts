import { Component, ViewChild, OnInit } from '@angular/core';
import { generateData } from './generate-data';
import { NzTreeComponent } from 'ng-tree-antd';

@Component({
  selector: 'app-tree-antd-demo-searchable',
  template: `
  <nz-card>
      <ng-template #title>Searchable</ng-template>
      <ng-template #body>
        <nz-input [nzType]="'search'" [nzPlaceHolder]="'input search text'" [(ngModel)]="q" (ngModelChange)="filterNodes()"></nz-input>
        <nz-tree #tree [nzNodes]="nodes"
                [nzOptions]="options"
                [nzCheckable]="true"
                (nzEvent)="onEvent($event)"></nz-tree>
      </ng-template>
  </nz-card>
  `
})
export class TreeAntdSearchableComponent implements OnInit {
  q = '';

  nodes = [];

  options = {
    allowDrag: false
  };

  @ViewChild(NzTreeComponent) tree: NzTreeComponent;
  filterNodes() {
    this.tree.treeModel.filterNodes(this.q);
    if (!this.q) {
      this.tree.treeModel.collapseAll();
    }
  }

  ngOnInit() {
    generateData(this.nodes, 3, 2, 1);
  }

  onEvent(ev: any) {
    console.log('basic', 'onEvent', ev);
  }
}
