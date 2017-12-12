import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { SpinComponent } from './spin.component';

describe('Component: Spin', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ SpinComponent ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(SpinComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
