/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { SharedModule } from "@shared/shared.module";
import { TableStandardComponent } from "./standard.component";
import { RandomUserService } from "../randomUser.service";

describe('Component: TableStandard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [RouterTestingModule, SharedModule.forRoot()],
            declarations: [TableStandardComponent],
            providers: [RandomUserService]
        });
    });

    it('should create an instance', async(() => {
        let fixture = TestBed.createComponent(TableStandardComponent);
        let comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
});
