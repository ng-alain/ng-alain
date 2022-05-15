import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { STColumn } from '@delon/abc/st';
import { finalize, map, Observable } from 'rxjs';
import { FeedRestService } from 'src/app/shared/services/rest/feed.rest.service';
import commonUtil from 'src/app/shared/utils/common-util';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderHistoryComponent {
  orderHistory = [
    {
      counterParty: '',
      orderID: '',
      orderTime: '',
      symbol: '',
      side: '',
      orderAmount: '',
      orderPrice: '',
      orderType: '',
      orderResult: ''
    }
  ];

  $orders!: Observable<any>;
  loading = false;

  // table props
  total = 0;
  pageIndex = 1;
  pageSize = 100;
  criteriaStored = undefined;
  data = [];

  constructor(private feedRestService: FeedRestService, private cdr: ChangeDetectorRef) {}

  getData($criteria?: any): void {
    this.criteriaStored = $criteria;
    this.loading = true;

    this.$orders = this.feedRestService.getOrderHistory(this.criteria($criteria)).pipe(
      map(res => {
        const { data, total } = res;
        this.total = total;
        this.data = data;
        return commonUtil.deepCopy(data);
      }),
      finalize(() => {
        this.loading = false;
        this.cdr.detectChanges();
      })
    );
  }

  reset(): void {
    this.getData();
  }

  private criteria($criteria: any = { pageIndex: 1, pageSize: 10, sort: [] }) {
    const { pageIndex = 1, pageSize = 100, sort = [] } = $criteria;
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
    const sortObj = sort.find((i: { key: string; value: string }) => i.value != null);
    const orderBy = sortObj ? sortObj?.key : 'createdDate';
    const orderSequence = sortObj ? (sortObj?.value == 'ascend' ? 1 : -1) : -1;

    return {
      limit: this.pageSize,
      page: this.pageIndex,
      orderBy,
      orderSequence
    };
  }
}
