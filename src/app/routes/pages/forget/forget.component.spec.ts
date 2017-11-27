import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { ForgetComponent } from './forget.component';

describe('Pages: forget', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ ForgetComponent ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(ForgetComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
