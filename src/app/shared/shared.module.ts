import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularWebStorageModule } from 'angular-web-storage';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgZorroAntdExtraModule } from 'ng-zorro-antd-extra';
import { TranslateModule } from '@ngx-translate/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AngularEchartsModule } from 'ngx-echarts';

import { SparklineDirective } from './directives/sparkline.directive';
import { DownFileDirective } from './directives/down-file.directive';
import { ImageDirective } from './directives/image.directive';
import { FixedBtnsDirective } from './directives/fixed-btns.directive';
import { ErrorCollectComponent } from './directives/error-collect.directive';

import { MomentDatePipe } from './pipes/moment-date.pipe';
import { CNCurrencyPipe } from './pipes/cn-currency.pipe';
import { KeysPipe } from './pipes/keys.pipe';
import { YNPipe } from './pipes/yn.pipe';
import { ModalHelper } from './helper/modal.helper';

import { shared_entry_components, shared_components } from './components/index';

const DIRECTIVES = [SparklineDirective, DownFileDirective, ImageDirective, FixedBtnsDirective, ErrorCollectComponent];
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
        NgZorroAntdExtraModule.forRoot(),
        ChartsModule,
        AngularEchartsModule
    ],
    declarations: [...shared_components, ...DIRECTIVES, ...PIPES],
    providers: [ ...HELPERS ],
    entryComponents: [ ...shared_entry_components ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        RouterModule,
        AngularWebStorageModule,
        TranslateModule,
        ChartsModule,
        AngularEchartsModule,
        NgZorroAntdExtraModule,

        ...shared_components,
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
