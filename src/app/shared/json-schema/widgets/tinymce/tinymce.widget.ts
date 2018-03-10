import { Component, OnInit } from '@angular/core';
import { ControlWidget } from 'nz-schema-form';

@Component({
    selector: 'nz-sf-tinymce-widget',
    template: `
    <div *ngIf="schema.title" nz-form-label nz-col [nzSpan]="schema.span_label">
        <label nz-form-item-required [nzRequired]="required" [attr.for]="id">
            <span>
                {{ schema.title }}
                <nz-tooltip *ngIf="showDescription && description" [nzTitle]="description">
                    <i nz-tooltip class="anticon anticon-question-circle-o"></i>
                </nz-tooltip>
            </span>
        </label>
    </div>
    <div nz-form-control nz-col
        [nzSpan]="schema.span_control"
        [nzOffset]="schema.offset_control">
        <tinymce
            [formControl]="control"
            [config]="config"
            [loading]="loading"></tinymce>
        <div nz-form-extra *ngIf="extra" [innerHTML]="extra"></div>
        <div nz-form-explain *ngIf="!onlyVisual && hasError">{{errorMessage}}</div>
    </div>`
})
export class TinymceWidget extends ControlWidget implements OnInit {
    static readonly KEY = 'tinymce';

    config: any;
    loading: string;

    ngOnInit(): void {
        this.loading = this.widgetData.loading || '加载中……';
        this.config = this.widgetData.config || {};
    }

    change(value: any) {
        if (this.widgetData.onContentChange) this.widgetData.onContentChange(value);
        this.formProperty.setValue(value, false);
    }
}
