import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { DashboardV1Component } from './v1.component';

describe('Comoponent: DashboardV1', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [RouterTestingModule, SharedModule.forRoot()],
            declarations: [DashboardV1Component]
        });
    });

    it('should create an instance', async(() => {
        const fixture = TestBed.createComponent(DashboardV1Component);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
});
