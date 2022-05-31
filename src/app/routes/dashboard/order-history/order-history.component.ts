import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { STColumn } from '@delon/abc/st';
import { finalize, map, Observable } from 'rxjs';
import { DateConstant } from 'src/app/shared/constants/date.constant';
import { DateFormatPipe } from 'src/app/shared/pipes/date-format.pipe';
import { ExportService } from 'src/app/shared/services/export.service';
import { FeedRestService } from 'src/app/shared/services/rest/feed.rest.service';
import commonUtil from 'src/app/shared/utils/common-util';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderHistoryComponent {
  $orders!: Observable<any>;
  loading = false;

  // table props
  DATE = DateConstant;
  total = 0;
  pageIndex = 1;
  pageSize = 100;
  criteriaStored = undefined;
  data = [];

  exportData = [];

  constructor(
    private feedRestService: FeedRestService,
    private cdr: ChangeDetectorRef,
    private datePipe: DateFormatPipe,
    private exportService: ExportService
  ) {}

  getData($criteria?: any): void {
    this.criteriaStored = $criteria;
    this.loading = true;

    this.$orders = this.feedRestService.getOrderHistory(this.criteria($criteria)).pipe(
      map(res => {
        const { data, total } = res;
        this.total = total;
        this.data = data;
        if (data) {
          return commonUtil.deepCopy(data);
        } else {
          return data;
        }
      }),
      finalize(() => {
        this.loading = false;
        this.cdr.detectChanges();
      })
    );

    this.feedRestService
      .getOrderHistory({
        orderBy: 'createdDate',
        orderSequence: -1
      })
      .pipe(
        map(res => {
          if (res.data) {
            this.exportData = res.data;
          }
        }),
        finalize(() => {
          this.cdr.detectChanges();
        })
      )
      .subscribe();
  }

  reset(): void {
    this.getData();
  }

  export(): void {
    const data: any[] = [];
    this.exportData.forEach((d: any) => {
      // Remove unncessary things
      delete d.updatedBy;
      delete d.updatedDate;
      delete d.createdBy;

      data.push({
        ...d,
        orderTime: this.datePipe.transform(d.orderTime, 'dd/MM/yyyy HH:mm:ss'),
        createdDate: this.datePipe.transform(d.createdDate, this.DATE.CURRENT_DATE_TIME_FORMAT),
        orderResult: d.orderResult === 'C' ? 'Matched' : d.orderResult === 'P' ? 'Pending for confirmation' : 'Not matched'
      });
    });
    this.exportService.exportToCsv(data, `order_history`);
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
