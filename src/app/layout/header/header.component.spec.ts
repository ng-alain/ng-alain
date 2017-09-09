import { HttpClient } from '@angular/common/http';
/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { SharedModule } from "../../shared/shared.module";
import { SettingsService } from "../../core/settings/settings.service";
import { ThemesService } from "../../core/themes/themes.service";
import { MenuService } from "../../core/menu/menu.service";

import { HeaderComponent } from './header.component';
import { TranslatorService } from "../../core/translator/translator.service";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { HttpLoaderFactory } from "../../app.module";
import { ACLService } from '../../core/acl/acl.service';

describe('Layout: Header', () => {
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
            declarations: [HeaderComponent],
            providers: [SettingsService, MenuService, ThemesService, TranslatorService, ACLService]
        });
    });

    it('should create an instance', async(() => {
        let fixture = TestBed.createComponent(HeaderComponent);
        let comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
});
