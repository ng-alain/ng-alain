import { Component, OnInit } from '@angular/core';
import { ControlWidget } from '@delon/form';

@Component({
  selector: 'sf-tinymce',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <tinymce
      [ngModel]="value"
      (ngModelChange)="change($event)"
      [config]="config"
      [loading]="loading">
    </tinymce>
  </sf-item-wrap>
  `,
  preserveWhitespaces: false,
})
// tslint:disable-next-line:component-class-suffix
export class TinymceWidget extends ControlWidget implements OnInit {
  static readonly KEY = 'tinymce';

  config: any;
  loading: string;

  ngOnInit(): void {
    this.loading = this.ui.loading || '加载中……';
    this.config = this.ui.config || {};
  }

  change(value: string) {
    if (this.ui.change) this.ui.change(value);
    this.setValue(value);
  }
}
