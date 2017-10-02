import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { DownFileComponent } from './downfile.component';
import { ColorsService } from '@core/services/colors.service';

describe('Comoponent: DownFile', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [RouterTestingModule, SharedModule.forRoot()],
            declarations: [DownFileComponent]
        });
    });

    it('should create an instance', async(() => {
        const fixture = TestBed.createComponent(DownFileComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
});
