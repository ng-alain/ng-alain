import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ACLService } from '@delon/acl';
import { MenuService } from '@delon/theme';

@Component({
  selector: 'app-guard',
  templateUrl: './guard.component.html'
})
export class GuardComponent {
  private readonly aclSrv = inject(ACLService);
  private readonly menuSrv = inject(MenuService);
  private readonly router = inject(Router);

  get data(): any {
    return this.aclSrv.data;
  }

  setRole(value: string | boolean): void {
    this.aclSrv.setFull(false);
    if (typeof value === 'boolean') {
      this.aclSrv.setFull(value);
    } else {
      this.aclSrv.set({ role: [value as string] });
    }
    this.menuSrv.resume();
    this.router.navigate(['/delon/guard']);
  }
}
