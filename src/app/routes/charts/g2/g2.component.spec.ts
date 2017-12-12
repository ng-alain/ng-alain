import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { G2Component } from './g2.component';

describe('Component: Chart.js', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ G2Component ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(G2Component);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
