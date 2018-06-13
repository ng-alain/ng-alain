import { TestBed, TestModuleMetadata } from '@angular/core/testing';

import { setUpTestBed } from '@testing/common.spec';

import { LayoutDefaultComponent } from './default.component';

describe('Layout', () => {
  setUpTestBed(<TestModuleMetadata>{
    declarations: [LayoutDefaultComponent],
  });

  it('should create an instance', () => {
    const fixture = TestBed.createComponent(LayoutDefaultComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });
});
