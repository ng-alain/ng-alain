import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { TableStandardComponent } from './standard.component';
import { RandomUserService } from '../randomUser.service';

describe('Component: TableStandard', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [TableStandardComponent],
        providers: [RandomUserService]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(TableStandardComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
