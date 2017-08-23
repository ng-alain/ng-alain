/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MenuService } from './menu.service';
import { menu } from "../../routes/menu";

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

    describe('#setSelected', () => {
        it('should be set selected by null', inject([MenuService], (service: MenuService) => {
            service.add(menu);
            service.setSelected(null);
            expect(service.menus[0].children[0].children[0].selected).toBeUndefined();
        }));
        it('should be set selected by use', inject([MenuService], (service: MenuService) => {
            service.add(menu);
            service.setSelected('/elements/buttons');
            expect(service.menus[1].children[0].children[0].selected).toBe(true);
            expect(service.menus[1].children[0].children[1].selected).toBeUndefined();
        }));
        it('should be set selected by nothing', inject([MenuService], (service: MenuService) => {
            service.add(menu);
            service.setSelected('/elements/invalid');
            expect(service.menus[1].children[0].children[1].selected).toBeUndefined();
        }));
    });
});
