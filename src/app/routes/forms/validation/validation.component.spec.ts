import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { ValidationComponent } from './validation.component';

describe('Component: Validation', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ ValidationComponent ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(ValidationComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
