import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { RegisterComponent } from './register.component';

describe('Pages: register', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ RegisterComponent ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(RegisterComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
