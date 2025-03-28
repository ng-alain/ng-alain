import { Component, inject } from '@angular/core';
import { ACLService } from '@delon/acl';
import { MenuService } from '@delon/theme';
import { SHARED_IMPORTS } from '@shared';

@Component({
  selector: 'app-acl',
  templateUrl: './acl.component.html',
  imports: SHARED_IMPORTS
})
export class ACLComponent {
  private readonly aclSrv = inject(ACLService);
  private readonly menuSrv = inject(MenuService);

  full = true;
  roleA = '';
  roleB = '';

  get data(): {
    full: boolean;
    roles: string[];
    abilities: Array<string | number>;
  } {
    return this.aclSrv.data;
  }

  private reMenu(): void {
    this.menuSrv.resume();
  }

  toggleFull(): void {
    this.full = !this.full;
    this.aclSrv.setFull(this.full);
    this.reMenu();
  }

  toggleRoleA(): void {
    this.full = false;
    this.roleA = this.roleA === 'role-a' ? '' : 'role-a';
    this.aclSrv.setFull(this.full);
    this.aclSrv.setRole([this.roleA]);
    this.reMenu();
  }

  toggleRoleB(): void {
    this.full = false;
    this.roleB = this.roleB === 'role-b' ? '' : 'role-b';
    this.aclSrv.setFull(this.full);
    this.aclSrv.setRole([this.roleB]);
    this.reMenu();
  }
}
