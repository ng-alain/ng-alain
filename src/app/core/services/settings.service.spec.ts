import { TestBed, async, inject } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { SettingsService } from './settings.service';

describe('Service: Settings', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
            providers: [SettingsService]
        });
    });

    it('should create an instance', inject([SettingsService], (service: SettingsService) => {
        expect(service).toBeTruthy();
    }));

    describe('#setLayout', () => {

        it('should be setting lang', inject([SettingsService], (service: SettingsService) => {
            service.setLayout('lang', 'zh-cn');
            expect(service.layout.lang).toBe('zh-cn');
        }));

        it('should be setting no exists key lang1', inject([SettingsService], (service: SettingsService) => {
            expect(service.setLayout('lang1', 'zh-cn')).toBeFalsy();
        }));

    });

});
