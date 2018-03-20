import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '@testing/common.spec';

import { ExtrasSettingsComponent } from './settings.component';

describe('Comoponent: ExtrasSetting', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ ExtrasSettingsComponent ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(ExtrasSettingsComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
