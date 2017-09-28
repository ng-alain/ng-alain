import { SharedModule } from '@shared/shared.module';
import { TestBed, async, inject } from '@angular/core/testing';
import { ThemesService } from './themes.service';
import { SettingsService } from './settings.service';

describe('Service: Themes', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
            providers: [ThemesService, SettingsService]
        });
    });

    it('should create an instance', inject([ThemesService, SettingsService], (themes: ThemesService, settings: SettingsService) => {
        expect(themes).toBeTruthy();
    }));
});
