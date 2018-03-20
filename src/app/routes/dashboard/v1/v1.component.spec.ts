import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '@testing/common.spec';

import { DashboardV1Component } from './v1.component';

describe('Comoponent: DashboardV1', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ DashboardV1Component ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(DashboardV1Component);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
