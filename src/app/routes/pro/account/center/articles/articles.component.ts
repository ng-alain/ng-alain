import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-account-center-articles',
  templateUrl: './articles.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProAccountCenterArticlesComponent {
  list$ = inject(_HttpClient).get('/api/list', { count: 8 });
}
