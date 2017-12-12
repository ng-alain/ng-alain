import { TestBed, TestModuleMetadata } from '@angular/core/testing';

import { setUpTestBed } from 'testing/common.spec';

import { LayoutComponent } from './layout.component';

describe('Layout', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [LayoutComponent]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(LayoutComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
