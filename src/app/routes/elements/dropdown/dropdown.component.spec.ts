import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { DropdownComponent } from './dropdown.component';

describe('Component: Dropdown', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ DropdownComponent ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(DropdownComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
