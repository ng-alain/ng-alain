import { SharedModule } from '@shared/shared.module';
import { TestBed, async, inject } from '@angular/core/testing';
import { SettingsService } from './settings.service';
import { TitleService } from './title.service';
import { Title } from '@angular/platform-browser';

describe('Service: Title', () => {
    class TestTitleService {
        setTitle = jasmine.createSpy('reset');
    }

    let title: TestTitleService;
    const alain = 'Alain';
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
            providers: [
                TitleService,
                SettingsService,
                { provide: Title, useClass: TestTitleService }
            ]
        });
        title = TestBed.get(Title);
    });

    it('should set the default empty title', inject([TitleService], (titleSrv: TitleService) => {
        titleSrv.suffix = alain;
        titleSrv.setTitle();
        expect(title.setTitle).toHaveBeenCalledWith(alain);
    }));
    
    it('should set new title', inject([TitleService], (titleSrv: TitleService) => {
        titleSrv.suffix = alain;
        titleSrv.setTitle('newTitle');
        expect(title.setTitle).toHaveBeenCalledWith('newTitle - ' + alain);
    }));
});
