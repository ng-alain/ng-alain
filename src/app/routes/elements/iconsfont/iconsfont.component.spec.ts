import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { IconsFontComponent } from './iconsfont.component';
import { _HttpClient } from '@core/services/http.client';

describe('Component: IconsFont', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [RouterTestingModule, SharedModule.forRoot()],
            declarations: [IconsFontComponent],
            providers: [_HttpClient]
        });
    });

    it('should create an instance', async(() => {
        const fixture = TestBed.createComponent(IconsFontComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
});
