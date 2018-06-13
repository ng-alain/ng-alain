import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '@testing/common.spec';

import { HeaderComponent } from './header.component';

describe('Layout: Header', () => {
  setUpTestBed(<TestModuleMetadata>{
    declarations: [HeaderComponent],
  });

  it('should create an instance', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });
});
