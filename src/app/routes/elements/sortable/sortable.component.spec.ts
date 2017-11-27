import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { DemoSortableComponent } from './sortable.component';
import { DndModule } from 'ng2-dnd';

describe('Component: Sortable', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ DemoSortableComponent ],
        imports: [DndModule.forRoot()]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(DemoSortableComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
