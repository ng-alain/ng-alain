import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { ButtonsComponent } from './buttons.component';

describe('Component: Buttons', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ ButtonsComponent ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(ButtonsComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
