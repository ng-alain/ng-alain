import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '@testing/common.spec';

import { WidgetsComponent } from './widgets.component';

describe('Comoponent: Widgets', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ WidgetsComponent ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(WidgetsComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
