import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MenuService } from '@delon/theme';
import { Observable } from 'rxjs';

/**
 * Dynamically load the start page
 *
 * 动态加载启动页
 */
export const startPageGuard: CanActivateFn = (_, state): boolean | Observable<boolean> => {
  // Re-jump according to the first item of the menu, you can re-customize the logic
  // 以下代码是根据菜单的第一项进行重新跳转，你可以重新定制逻辑
  // const menuSrv = inject(MenuService);
  // if (menuSrv.find({ url: state.url }) == null) {
  //   inject(Router).navigateByUrl(menuSrv.menus[0].link!);
  //   return false;
  // }
  return true;
};
