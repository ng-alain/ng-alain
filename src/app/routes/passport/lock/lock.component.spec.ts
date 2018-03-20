import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '@testing/common.spec';

import { UserLockComponent } from './lock.component';

describe('Pages: lock', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ UserLockComponent ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(UserLockComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
