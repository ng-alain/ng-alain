import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { TreeAntdComponent } from './tree-antd.component';

describe('Component: Tree Antd', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ TreeAntdComponent ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(TreeAntdComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
