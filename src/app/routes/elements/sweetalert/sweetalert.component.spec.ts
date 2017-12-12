import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { SweetAlertComponent } from './sweetalert.component';

describe('Component: SweetAlert', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ SweetAlertComponent ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(SweetAlertComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
