import { Component } from '@angular/core';
import { ACLService } from '@delon/acl';
import { MenuService } from '@delon/theme';

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

    private reMenu() {
        this.menuSrv.resume((item) => {
            if (item.hide !== true && item.acl)
                item.hide = !this.aclService.can(item.acl);
        });
    }

    toggleFull() {
        this.full = !this.full;
        this.aclService.setFull(this.full);
        this.reMenu();
    }

    toggleRoleA() {
        this.full = false;
        this.roleA = this.roleA.length > 0 ? '' : 'role-a';
        this.aclService.setFull(this.full);
        this.aclService.setRole([this.roleA]);
        this.reMenu();
    }

    toggleRoleB() {
        this.full = false;
        this.roleB = this.roleB.length > 0 ? '' : 'role-b';
        this.aclService.setFull(this.full);
        this.aclService.setRole([this.roleB]);
        this.reMenu();
    }
}
