import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { LockComponent } from './lock.component';

describe('Pages: lock', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ LockComponent ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(LockComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
