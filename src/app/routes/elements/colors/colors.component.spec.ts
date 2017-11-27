import { TestBed, TestModuleMetadata } from '@angular/core/testing';

import { setUpTestBed } from '../../../../testing/common.spec';

import { ColorsComponent } from './colors.component';

describe('Component: Colors', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ ColorsComponent ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(ColorsComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
