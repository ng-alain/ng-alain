/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { SharedModule } from "@shared/shared.module";
import { ModalComponent } from "./modal.component";


describe('Component: Modal', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [RouterTestingModule, SharedModule.forRoot()],
            declarations: [ModalComponent]
        });
    });

    it('should create an instance', async(() => {
        let fixture = TestBed.createComponent(ModalComponent);
        let comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
});
