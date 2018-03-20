import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '@testing/common.spec';

import { IconsFontComponent } from './iconsfont.component';

describe('Component: IconsFont', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [IconsFontComponent]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(IconsFontComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
