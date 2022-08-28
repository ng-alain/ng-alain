import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { MenuService } from '@delon/theme';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StartPageGuard implements CanActivate {
  private loaded = true;

  constructor(private srv: MenuService, private router: Router) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // 以下代码是根据菜单的第一项进行重新跳转
    // const menus = this.srv.menus;

    // if (this.loaded && menus.length === 1) {
    //   this.loaded = false;
    //   this.router.navigateByUrl(menus[0].link!);
    //   return false;
    // }
    return true;
  }
}
