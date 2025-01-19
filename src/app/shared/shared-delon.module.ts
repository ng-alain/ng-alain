import { PageHeaderModule } from '@delon/abc/page-header';
import { SEModule } from '@delon/abc/se';
import { STModule } from '@delon/abc/st';
import { SVModule } from '@delon/abc/sv';
import { ACLDirective, ACLIfDirective } from '@delon/acl';
import { DelonFormModule } from '@delon/form';
import { CurrencyPricePipe } from '@delon/util';

export const SHARED_DELON_MODULES = [
  DelonFormModule,
  STModule,
  SVModule,
  SEModule,
  PageHeaderModule,
  ACLDirective,
  ACLIfDirective,
  CurrencyPricePipe
];
