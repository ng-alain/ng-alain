/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MenuService } from './menu.service';

describe('Service: Menu', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [MenuService]
        });
    });

    it('should create an instance', inject([MenuService], (service: MenuService) => {
        expect(service).toBeTruthy();
    }));

    it('#add()', inject([MenuService], (service: MenuService) => {
        service.add([{ text: 'text' }]);
        expect(service.menus.length).toBe(1);
    }));

});
