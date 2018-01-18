import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { UploadComponent } from './upload.component';

describe('Component: Upload', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ UploadComponent ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(UploadComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
