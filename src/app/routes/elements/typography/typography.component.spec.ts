import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { TypographyComponent } from './typography.component';
import { ColorsService } from '@core/services/colors.service';

describe('Component: Typography', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [RouterTestingModule, SharedModule.forRoot()],
            declarations: [TypographyComponent],
            providers: [ColorsService]
        });
    });

    it('should create an instance', async(() => {
        const fixture = TestBed.createComponent(TypographyComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
});
