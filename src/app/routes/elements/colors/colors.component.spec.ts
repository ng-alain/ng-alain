import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ColorsComponent } from './colors.component';
import { ColorsService } from '@core/services/colors.service';

describe('Component: Colors', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [RouterTestingModule, SharedModule.forRoot()],
            declarations: [ColorsComponent],
            providers: [ColorsService]
        });
    });

    it('should create an instance', async(() => {
        const fixture = TestBed.createComponent(ColorsComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
});
