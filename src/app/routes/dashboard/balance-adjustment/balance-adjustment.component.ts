import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { STColumn, STComponent, STData } from '@delon/abc/st';
import { NzMessageService } from 'ng-zorro-antd/message';
import { finalize, map, Observable } from 'rxjs';
import { FeedRestService } from 'src/app/shared/services/rest/feed.rest.service';
import commonUtil from 'src/app/shared/utils/common-util';

@Component({
  selector: 'app-balance-adjustment',
  templateUrl: './balance-adjustment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BalanceAdjustmentComponent {
  $balances!: Observable<any>;
  loading = false;

  editCache: { [key: string]: { data?: any; initialSymbol?: any; display?: any } } = {};
  listOfData = [];

  constructor(private feedRestService: FeedRestService, private cdr: ChangeDetectorRef) {}

  getData(): void {
    this.loading = true;

    this.$balances = this.feedRestService.getBalances().pipe(
      map(res => {
        this.listOfData = res.map((i: any) => {
          return {
            exchange: i.exchange,
            symbol: i.values.map((x: any) => x.symbol),
            amount: i.values.map((x: any) => x.balance)
          };
        });

        return this.listOfData;
      }),
      finalize(() => {
        this.loading = false;
        this.updateEditCache();
        this.cdr.detectChanges();
      })
    );
  }

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      const iitem = commonUtil.deepCopy(item);

      this.editCache[iitem.exchange] = {
        initialSymbol: iitem.symbol[0],
        data: { ...iitem },
        display: {
          amount: iitem.amount[0]
        }
      };
    });
  }

  changeSymbol(event: any, id: string) {
    const item = commonUtil.deepCopy(this.listOfData.find((x: any) => x.exchange === id));
    if (item) {
      const index = item.symbol.findIndex((x: any) => x === event);
      this.editCache[id].display = {
        amount: item.amount[index]
      };
    }
  }
}
