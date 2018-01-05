import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { NotificationComponent } from './notification.component';

describe('Component: Notification', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ NotificationComponent ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(NotificationComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
