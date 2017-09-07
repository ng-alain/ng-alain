/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { SettingsService } from "../core/settings/settings.service";
import { ScrollService } from "../core/services/scroll.service";

import { LayoutComponent } from './layout.component';
import { MenuService } from "../core/menu/menu.service";

describe('Layout', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [RouterTestingModule, SharedModule.forRoot()],
            declarations: [LayoutComponent],
            providers: [SettingsService, ScrollService, MenuService]
        });
    });

    it('should create an instance', async(() => {
        let fixture = TestBed.createComponent(LayoutComponent);
        let comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
});
