import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { GridComponent } from './grid.component';

describe('Component: Grid', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ GridComponent ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(GridComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
