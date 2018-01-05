import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { TableFullComponent } from './full.component';
import { RandomUserService } from '../randomUser.service';

describe('Component: TableFull', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [TableFullComponent],
        providers: [RandomUserService]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(TableFullComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
