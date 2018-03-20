import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '@testing/common.spec';

import { DownFileComponent } from './downfile.component';

describe('Comoponent: DownFile', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ DownFileComponent ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(DownFileComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
