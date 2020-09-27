import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { preloaderFinished } from '@delon/theme';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { hmrBootstrap } from './hmr';

preloaderFinished();

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule, {
      defaultEncapsulation: ViewEncapsulation.Emulated,
      preserveWhitespaces: false,
    })
    .then((res) => {
      const win = window as NzSafeAny;
      if (win && win.appBootstrap) {
        win.appBootstrap();
      }
      return res;
    });
};

if (environment.hmr) {
  // tslint:disable-next-line: no-string-literal
  if ((module as NzSafeAny)['hot']) {
    hmrBootstrap(module, bootstrap);
  } else {
    console.error('HMR is not enabled for webpack-dev-server!');
    console.log('Are you using the --hmr flag for ng serve?');
  }
} else {
  bootstrap();
}
