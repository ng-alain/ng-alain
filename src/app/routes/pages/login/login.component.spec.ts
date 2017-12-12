import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { LoginComponent } from './login.component';

describe('Pages: login', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ LoginComponent ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(LoginComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
