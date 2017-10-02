import { Component } from '@angular/core';
import { MenuService } from '@core/services/menu.service';
import { ACLService } from '@core/acl/acl.service';

@Component({
    selector: 'app-acl',
    templateUrl: './acl.component.html'
})
export class ACLComponent {

    full = true;
    roleA = '';
    roleB = '';

    constructor(
        private aclService: ACLService,
        private menuSrv: MenuService) { }

    toggleFull() {
        this.full = !this.full;
        this.aclService.setFull(this.full);
        this.menuSrv.resume();
    }

    toggleRoleA() {
        this.full = false;
        this.roleA = this.roleA.length > 0 ? '' : 'role-a';
        this.aclService.setFull(this.full);
        this.aclService.setRole([this.roleA]);
        this.menuSrv.resume();
    }

    toggleRoleB() {
        this.full = false;
        this.roleB = this.roleB.length > 0 ? '' : 'role-b';
        this.aclService.setFull(this.full);
        this.aclService.setRole([this.roleB]);
        this.menuSrv.resume();
    }
}
