import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { MapsBaiduComponent } from './baidu.component';
import { MapsModule } from '../maps.module';

describe('Component: MapsBaidu', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [RouterTestingModule, SharedModule.forRoot(), MapsModule]
        });
    });

    it('should create an instance', async(() => {
        const fixture = TestBed.createComponent(MapsBaiduComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
});
