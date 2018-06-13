import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '@testing/common.spec';

import { GridMasonryComponent } from './gridmasonry.component';

describe('Component: GridMasonry', () => {
  setUpTestBed(<TestModuleMetadata>{
    declarations: [GridMasonryComponent],
  });

  it('should create an instance', () => {
    const fixture = TestBed.createComponent(GridMasonryComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });
});
