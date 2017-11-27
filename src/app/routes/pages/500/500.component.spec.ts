import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { Page500Component } from './500.component';

describe('Pages: 500', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ Page500Component ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(Page500Component);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
