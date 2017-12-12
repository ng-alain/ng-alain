import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../testing/common.spec';

import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { ThemesService, TitleService } from '@delon/theme';

describe('Component: App', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ AppComponent ],
        providers: [
            ThemesService, TitleService,
            { provide: APP_BASE_HREF, useValue: '/' }
        ]
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
