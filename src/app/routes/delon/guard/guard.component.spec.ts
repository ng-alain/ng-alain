import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '@testing/common.spec';

import { GuardComponent } from './guard.component';

describe('Comoponent: Guard', () => {
  setUpTestBed(<TestModuleMetadata>{
    declarations: [GuardComponent],
    providers: [],
  });

  it('should create an instance', () => {
    const fixture = TestBed.createComponent(GuardComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });
});
