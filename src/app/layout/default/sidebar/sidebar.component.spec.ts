import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '@testing/common.spec';

import { SidebarComponent } from './sidebar.component';

describe('Layout: Sidebar', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ SidebarComponent ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(SidebarComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
