import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { SHARED_IMPORTS } from '@shared';

@Component({
  selector: 'app-account-center-articles',
  templateUrl: './articles.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: SHARED_IMPORTS
})
export class ProAccountCenterArticlesComponent {
  list$ = inject(_HttpClient).get('/api/list', { count: 8 });
}
