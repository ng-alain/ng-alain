import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '@testing/common.spec';

import { HelpCenterComponent } from './helpcenter.component';

describe('Comoponent: HelpCenter', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ HelpCenterComponent ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(HelpCenterComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
