import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '@testing/common.spec';

import { ACLComponent } from './acl.component';

describe('Comoponent: ACL', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ ACLComponent ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(ACLComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
