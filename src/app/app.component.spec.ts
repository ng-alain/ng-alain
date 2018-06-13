import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { setUpTestBed } from '@testing/common.spec';

import { AppComponent } from './app.component';

describe('Component: App', () => {
  setUpTestBed(<TestModuleMetadata>{
    declarations: [AppComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });
});
