import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { MapsBaiduComponent } from './baidu.component';
import { AbmModule } from 'angular-baidu-maps';

describe('Component: MapsBaidu', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ MapsBaiduComponent ],
        imports: [
            AbmModule.forRoot({
                apiKey: 'p3HIQIqLqKVQOXao1IiLp5O0eTFakjEP' // app key为必选项
            })
        ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(MapsBaiduComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
