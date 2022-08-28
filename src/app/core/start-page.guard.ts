import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MenuService } from '@delon/theme';
import { Observable } from 'rxjs';

export const startPageGuard: CanActivateFn = (_, state): boolean | Observable<boolean> => {
  // 以下代码是根据菜单的第一项进行重新跳转
  // const menuSrv = inject(MenuService);
  // if (menuSrv.find({ url: state.url }) == null) {
  //   inject(Router).navigateByUrl(menuSrv.menus[0].link!);
  //   return false;
  // }
  return true;
};
