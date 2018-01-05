import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { ExtendedComponent } from './extended.component';
import { ColorPickerModule } from 'ngx-color-picker';

describe('Component: FormsExtended', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ ExtendedComponent ],
        imports: [ColorPickerModule]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(ExtendedComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
