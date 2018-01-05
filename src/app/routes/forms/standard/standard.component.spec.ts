import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { StandardComponent } from './standard.component';

describe('Component: Standard', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ StandardComponent ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(StandardComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
