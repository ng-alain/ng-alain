import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { GuardComponent } from './guard.component';
import { ColorsService } from '@core/services/colors.service';
import { UserService } from './user.service';

describe('Comoponent: Guard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [RouterTestingModule, SharedModule.forRoot()],
            declarations: [GuardComponent],
            providers: [ColorsService, UserService]
        });
    });

    it('should create an instance', async(() => {
        const fixture = TestBed.createComponent(GuardComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
});
