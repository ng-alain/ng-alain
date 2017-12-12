import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { Page404Component } from './404.component';

describe('Pages: 404', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ Page404Component ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(Page404Component);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
