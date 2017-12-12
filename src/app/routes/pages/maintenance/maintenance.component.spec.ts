import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { MaintenanceComponent } from './maintenance.component';

describe('Pages: 404', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ MaintenanceComponent ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(MaintenanceComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
