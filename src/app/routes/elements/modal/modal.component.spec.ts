import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { ModalComponent } from './modal.component';

describe('Component: Modal', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ ModalComponent ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(ModalComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
