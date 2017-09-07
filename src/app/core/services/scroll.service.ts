import { Injectable, Inject } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';
import { fromEvent } from 'rxjs/observable/fromEvent';

export const topMargin = 16;

@Injectable()
export class ScrollService {

  private _topOffset: number | null;
  private _topOfPageElement: Element;

  get topOffset() {
    if (!this._topOffset) {
      const toolbar = this.doc.querySelector('md-toolbar.app-toolbar');
      this._topOffset = (toolbar && toolbar.clientHeight || 0) + topMargin;
    }
    return this._topOffset;
  }

  get topOfPageElement() {
    if (!this._topOfPageElement) {
      this._topOfPageElement = this.doc.getElementById('top-of-page') || this.doc.body;
    }
    return this._topOfPageElement;
  }

  constructor( @Inject(DOCUMENT) private doc: any, private location: PlatformLocation) {
    fromEvent(window, 'resize').subscribe(() => this._topOffset = null);
  }

  scroll() {
    const hash = this.getCurrentHash();
    const element: HTMLElement = hash ? this.doc.getElementById(hash) : this.topOfPageElement;
    this.scrollToElement(element);
  }

  scrollToElement(element: Element) {
    if (element) {
      element.scrollIntoView();

      if (window && window.scrollBy) {
        window.scrollBy(0, element.getBoundingClientRect().top - this.topOffset);

        if (window.pageYOffset < 20) {
          window.scrollBy(0, -window.pageYOffset);
        }
      }
    }
  }

  scrollToTop() {
    this.scrollToElement(this.topOfPageElement);
  }

  private getCurrentHash() {
    return this.location.hash.replace(/^#/, '');
  }
}
