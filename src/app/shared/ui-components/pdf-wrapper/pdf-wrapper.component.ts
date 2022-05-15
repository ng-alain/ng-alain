import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'uic-pdf-wrapper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngIf="renderHTML">
      <object *ngIf="nzResourcesURL" [data]="safeUrl" type="text/html" width="100%" [height]="nzHeight"></object>
      <ng-content></ng-content>
    </ng-container>
  `
})
export class PdfWrapperComponent implements OnChanges {
  @Input() nzResourcesURL: any;
  @Input() nzResourcesData: any;
  @Input() nzHeight: string = '650px';

  safeUrl!: SafeResourceUrl;
  renderHTML = false;

  constructor(private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.renderHTML = false;
    this.cdr.detectChanges();
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.nzResourcesURL);
    this.renderHTML = true;
    this.cdr.detectChanges();
  }
}
