import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { CropperComponent } from './cropper.component';
import { ImageCropperModule } from 'ng2-img-cropper';

describe('Component: Cropper', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ CropperComponent ],
        imports: [ImageCropperModule]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(CropperComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
