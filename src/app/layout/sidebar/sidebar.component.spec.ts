/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { SharedModule } from "../../shared/shared.module";
import { SettingsService } from "../../core/settings/settings.service";
import { ThemesService } from "../../core/themes/themes.service";
import { ScrollService } from "../../shared/scroll.service";
import { MenuService } from "../../core/menu/menu.service";

import { SidebarComponent } from './sidebar.component';
import { TranslateService, TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { HttpLoaderFactory } from "../../app.module";

describe('Layout: Sidebar', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [RouterTestingModule, SharedModule.forRoot(),
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (HttpLoaderFactory),
                        deps: [HttpClient]
                    }
                })],
            declarations: [SidebarComponent],
            providers: [SettingsService, MenuService, ThemesService, ScrollService]
        });
    });

    it('should create an instance', async(() => {
        let fixture = TestBed.createComponent(SidebarComponent);
        let comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
});
