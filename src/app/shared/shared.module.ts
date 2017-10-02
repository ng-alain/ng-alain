import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularWebStorageModule } from 'angular-web-storage';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { SparklineDirective } from './directives/sparkline/sparkline.directive';
import { DownFileDirective } from '@shared/directives/down-file.directive';
import { MomentDatePipe } from './pipes/moment-date.pipe';
import { CNCurrencyPipe } from './pipes/cn-currency.pipe';
import { KeysPipe } from './pipes/keys.pipe';
import { YNPipe } from './pipes/yn.pipe';
import { ModalHelper } from './helper/modal.helper';

const DIRECTIVES = [SparklineDirective, DownFileDirective];
const PIPES = [MomentDatePipe, CNCurrencyPipe, KeysPipe, YNPipe];
const HELPERS = [ ModalHelper ];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AngularWebStorageModule,
        NgZorroAntdModule.forRoot(),
        ChartsModule
    ],
    declarations: [...DIRECTIVES, ...PIPES],
    providers: [ ...HELPERS ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        RouterModule,
        AngularWebStorageModule,
        TranslateModule,
        ChartsModule,

        ...DIRECTIVES,
        ...PIPES
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}
