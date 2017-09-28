import { ReflectiveInjector } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';
import { ScrollService } from './scroll.service';

describe('Service: Scroll', () => {

  const topOfPageElem = {} as Element;
  let injector: ReflectiveInjector;
  let document: MockDocument;
  let location: MockPlatformLocation;
  let scrollService: ScrollService;

  class MockPlatformLocation {
    hash: string;
  }

  class MockDocument {
    body = new MockElement();
    getElementById = jasmine.createSpy('Document getElementById').and.returnValue(topOfPageElem);
    querySelector = jasmine.createSpy('Document querySelector');
  }

  class MockElement {
    getBoundingClientRect = jasmine.createSpy('Element getBoundingClientRect')
      .and.returnValue({ top: 0 });
    scrollIntoView = jasmine.createSpy('Element scrollIntoView');
  }

  beforeEach(() => {
    spyOn(window, 'scrollBy');
  });

  beforeEach(() => {
    injector = ReflectiveInjector.resolveAndCreate([
      ScrollService,
      { provide: DOCUMENT, useClass: MockDocument },
      { provide: PlatformLocation, useClass: MockPlatformLocation }
    ]);
    location = injector.get(PlatformLocation);
    document = injector.get(DOCUMENT);
    scrollService = injector.get(ScrollService);
  });
});
