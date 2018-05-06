import { Component, OnInit } from '@angular/core';
import { ControlWidget } from '@delon/form';

@Component({
  selector: 'sf-ueditor',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <ueditor
      [ngModel]="value"
      [config]="config"
      [loadingTip]="loading"
      (onContentChange)="change($event)">
    </ueditor>
  </sf-item-wrap>
  `,
  preserveWhitespaces: false,
  styles: [`:host ueditor { line-height:normal; }`],
})
// tslint:disable-next-line:component-class-suffix
export class UeditorWidget extends ControlWidget implements OnInit {
  static readonly KEY = 'ueditor';

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
