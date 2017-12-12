import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { MapsQQComponent } from './qq.component';
import { AqmModule } from 'angular-qq-maps';

describe('Component: MapsQQ', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ MapsQQComponent ],
        imports: [
            AqmModule.forRoot({
                apiKey: 'I3TBZ-QTN3J-MWPFI-FERMS-IBOCQ-LBBWY' // app key为必选项
            })
        ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(MapsQQComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
