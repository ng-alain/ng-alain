import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { TypographyComponent } from './typography.component';

describe('Component: Typography', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ TypographyComponent ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(TypographyComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
