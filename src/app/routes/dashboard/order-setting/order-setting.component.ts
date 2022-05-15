import { Location } from '@angular/common';
import { HttpClient, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { STChange, STColumn, STComponent, STData } from '@delon/abc/st';
import { dateTimePickerUtil } from '@delon/util';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { delay, finalize, forkJoin, map, Observable, of, tap } from 'rxjs';
import { SettingRestService } from 'src/app/shared/services/rest/setting.rest.service';
import commonUtil from 'src/app/shared/utils/common-util';

interface UpdatedData {
  exchangeId: number;
  status: string;
  values: string;
}

interface UpdatedValues {
  symbol: string[];
  bid: string[];
  ask: string[];
  amount: string[];
  interval: string[];
  status: string;
  id: string;
  exchange: string;
}

@Component({
  selector: 'app-order-setting',
  templateUrl: './order-setting.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderSettingComponent {
  $findExchangeSetting!: Observable<any>;
  loading = false;

  // Tables
  data = [];
  editCache: { [key: string]: { edit: boolean; data: UpdatedValues; initialSymbol?: string; display?: any } } = {};
  listOfData: UpdatedValues[] = [];

  dropdownSetting: any;
  initialData: any;

  @ViewChild('st') private st!: STComponent;
  constructor(
    private msg: NzMessageService,
    private http: HttpClient,
    public _router: Router,
    public _location: Location,
    private cdr: ChangeDetectorRef,
    private settingRestService: SettingRestService,
    private modalSrv: NzModalService,
    private notificationService: NzNotificationService
  ) {}

  getData(): void {
    this.listOfData = [];
    this.loading = true;

    this.settingRestService
      .getSetting()
      .pipe(
        map(res => {
          const found = res.find((x: any) => x.key === 'Dropdown Setting');
          if (found) {
            this.dropdownSetting = JSON.parse(found.value);
          }
        }),
        finalize(() => {
          this.cdr.detectChanges();
        })
      )
      .subscribe();

    this.$findExchangeSetting = this.settingRestService.getExchangeSetting().pipe(
      map(res => {
        this.initialData = res;
        return res.map((i: any) => {
          const value = JSON.parse(i.value);
          const data = {
            exchange: i.exchange,
            symbol: value.map((x: any) => x.symbol),
            bid: value.map((x: any) => x.bid),
            ask: value.map((x: any) => x.ask),
            amount: value.map((x: any) => x.amount),
            interval: value.map((x: any) => x.interval),
            status: i.status,
            id: i.id.toString()
          };
          this.listOfData.push(data);
          return data;
        });
      }),
      finalize(() => {
        this.loading = false;
        this.updateEditCache(); // Update template
        this.cdr.detectChanges();
      })
    );
  }

  startEdit(id: string) {
    this.editCache[id].edit = true;
    this.mapConfig(id);
  }

  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    const symbolIndex = this.listOfData[index].symbol.findIndex(x => x === this.editCache[id].initialSymbol);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false,
      initialSymbol: this.editCache[id].initialSymbol,
      display: {
        status: this.listOfData[index].status,
        bid: this.listOfData[index].bid[symbolIndex],
        ask: this.listOfData[index].ask[symbolIndex],
        amount: this.listOfData[index].amount[symbolIndex],
        interval: this.listOfData[index].interval[symbolIndex]
      }
    };
    this.mapConfig(id);
  }

  saveEdit(id: string): void {
    const callback = () => {
      const index = this.listOfData.findIndex(item => item.id === id);
      Object.assign(this.listOfData[index], this.editCache[id].data);
      const found = this.initialData.find((x: any) => x.id.toString() === id);
      if (found) {
        let value = JSON.parse(found.value);
        value = value.map((x: any) => {
          if (x.symbol === this.editCache[id].initialSymbol) {
            return {
              ...x,
              bid: this.editCache[id].display.bid,
              ask: this.editCache[id].display.ask,
              amount: this.editCache[id].display.amount,
              interval: this.editCache[id].display.interval
            };
          } else {
            return x;
          }
        });

        this.loading = true;
        this.settingRestService
          .updateExchangeSetting({
            exchangeId: Number(id),
            status: this.editCache[id].display.status,
            values: JSON.stringify(value)
          })
          .pipe(
            map(res => {
              if (!res || res.message == null) {
                this.notificationService.success('Success', 'Updated successful.');
              }
            }),
            finalize(() => {
              this.editCache[id].edit = false;
              this.loading = true;
              this.getData();
            })
          )
          .subscribe();
      }
    };

    this.modalSrv.confirm({
      nzTitle: 'Confirmation',
      nzContent: 'Would you like to update your settings?',
      nzCancelDisabled: false,
      nzOkText: 'Confirm',
      nzCancelText: 'Cancel',
      nzOnOk: () => callback()
    });
  }

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        initialSymbol: item.symbol[0],
        data: { ...item },
        display: {
          status: item.status,
          bid: item.bid[0],
          ask: item.ask[0],
          amount: item.amount[0],
          interval: item.interval[0]
        }
      };
    });
  }

  changeSymbol(event: any, id: string) {
    const item = this.listOfData.find(x => x.id === id);
    if (item) {
      const index = item.symbol.findIndex(x => x === event);
      this.editCache[id].display = {
        status: item.status,
        bid: item.bid[index],
        ask: item.ask[index],
        amount: item.amount[index],
        interval: item.interval[index]
      };
    }

    this.mapConfig(id);
  }

  updateStatus(id: string) {
    if (this.editCache[id].edit) {
      if (this.editCache[id].display.status === 'A') {
        this.editCache[id].display.status = 'I';
      } else {
        this.editCache[id].display.status = 'A';
      }
    }
  }

  /**
   * Construct dropdown (preset values)
   *
   * @param id: Exchange Setting ID
   */
  private mapConfig(id: string) {
    const found = this.listOfData.find((x: any) => x.id === id);
    if (found) {
      const list = this.dropdownSetting[found.exchange.toLowerCase()];
      const setting = list.find((x: any) => x.symbol === this.editCache[id].initialSymbol);
      Object.assign(this.editCache[id], {
        bidConfig: setting.bid,
        askConfig: setting.ask,
        amountConfig: setting.amount,
        intervalConfig: setting.interval
      });
    }
  }
}
