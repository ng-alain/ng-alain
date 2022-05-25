import { Location } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { finalize, map } from 'rxjs';
import { SettingRestService } from 'src/app/shared/services/rest/setting.rest.service';

interface UpdatedValues {
  symbol: string[];
  bid: any[];
  ask: any[];
  amount: any[];
  interval: any[];
  id: string;
  exchange: string;
}

@Component({
  selector: 'app-dropdown-setting',
  templateUrl: './dropdown-setting.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownSettingComponent implements OnInit {
  listOfData: UpdatedValues[] = [];
  dropdownSetting: any;
  initialData: {} = {};
  loading = false;

  optionsCP: Array<{ value: string; label: string }> = [];
  optionsSymbol: Array<{ value: string; label: string }> = [];
  optionsBid: Array<{ value: string; label: string }> = [];
  optionsAsk: Array<{ value: string; label: string }> = [];
  optionsAmount: Array<{ value: string; label: string }> = [];
  optionsInterval: Array<{ value: string; label: string }> = [];

  selectedCP: any;
  selectedSymbol: any;
  selectedBids: any[] = [];
  selectedAsks: any[] = [];
  selectedAmounts: any[] = [];
  selectedIntervals: any[] = [];

  constructor(
    public _router: Router,
    public _location: Location,
    private cdr: ChangeDetectorRef,
    private settingRestService: SettingRestService,
    private modalSrv: NzModalService,
    private notificationService: NzNotificationService
  ) {}

  getData() {
    this.listOfData = [];
    this.loading = true;

    this.settingRestService
      .getSetting()
      .pipe(
        map(res => {
          const found = res.find((x: any) => x.key === 'Dropdown Setting');
          if (found) {
            this.dropdownSetting = JSON.parse(found.value);
            this.initialData = this.dropdownSetting;
            let i = 1;
            Object.keys(this.dropdownSetting).map(key => {
              const data = {
                id: i.toString(),
                exchange: key,
                symbol: this.dropdownSetting[key].map((x: any) => x.symbol),
                bid: this.dropdownSetting[key].map((x: any) => x.bid),
                ask: this.dropdownSetting[key].map((x: any) => x.ask),
                amount: this.dropdownSetting[key].map((x: any) => x.amount),
                interval: this.dropdownSetting[key].map((x: any) => x.interval)
              };
              i++;
              this.listOfData.push(data);
              return data;
            });
          }
        }),
        finalize(() => {
          console.log('listOfData: ', this.listOfData);
          this.loading = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe();
  }

  cpChange(value: string) {
    this.selectedSymbol = '';
    this.clearSelectedArray();

    if (value == null) {
      this.selectedCP = '';
      this.optionsSymbol = [{ value: '', label: '' }];
    } else {
      this.selectedCP = value;
      this.optionsSymbol = this.listOfData[parseInt(value) - 1]?.symbol.map(item => ({
        value: item,
        label: item.charAt(0).toUpperCase() + item.slice(1)
      }));
    }
  }

  symbolChange(value: string) {
    this.clearSelectedArray();
    this.selectedSymbol = value;
    const index = this.optionsSymbol.map(item => item.value).indexOf(value);
    this.optionsBid = this.listOfData[parseInt(this.selectedCP) - 1].bid[index].map((item: any) => ({
      value: item,
      label: item
    }));
    this.optionsBid.map(item => {
      this.selectedBids.push(item.value);
    });
    this.optionsAsk = this.listOfData[parseInt(this.selectedCP) - 1].ask[index].map((item: any) => ({
      value: item,
      label: item
    }));
    this.optionsAsk.map(item => {
      this.selectedAsks.push(item.value);
    });
    this.optionsAmount = this.listOfData[parseInt(this.selectedCP) - 1].amount[index].map((item: any) => ({
      value: item,
      label: item
    }));
    this.optionsAmount.map(item => {
      this.selectedAmounts.push(item.value);
    });
    this.optionsInterval = this.listOfData[parseInt(this.selectedCP) - 1].interval[index].map((item: any) => ({
      value: item,
      label: item
    }));
    this.optionsInterval.map(item => {
      this.selectedIntervals.push(item.value);
    });
  }

  updateDropdown() {
    let inputs: any = [];
    const validate = /^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/;

    this.selectedBids.map(item => {
      inputs.push(validate.test(item));
    });
    this.selectedAsks.map(item => {
      inputs.push(validate.test(item));
    });
    this.selectedAmounts.map(item => {
      inputs.push(validate.test(item));
    });
    this.selectedIntervals.map(item => {
      inputs.push(validate.test(item));
    });

    if (this.selectedCP == '' || this.selectedSymbol == '' || this.selectedCP == null || this.selectedSymbol == null) {
      this.notificationService.error('Error', 'All fields are required.');
    } else if (inputs.includes(false)) {
      this.notificationService.error('Error', 'Only number inputs are allowed.');
      this.clearInput();
      this.getData();
    } else {
      let updatedData: any = {};
      updatedData = { ...this.initialData };

      this.loading = true;

      const callback = () => {
        const key: any = this.listOfData[this.selectedCP - 1]?.exchange;
        const symbolIndex = this.optionsSymbol.map(item => item.value).indexOf(this.selectedSymbol);

        updatedData[key][symbolIndex] = {
          symbol: this.selectedSymbol,
          bid: this.selectedBids,
          ask: this.selectedAsks,
          amount: this.selectedAmounts,
          interval: this.selectedIntervals
        };

        this.settingRestService
          .updateSiteSetting({
            details: [
              {
                key: 'Dropdown Setting',
                value: JSON.stringify(updatedData)
              }
            ]
          })
          .pipe(
            map(res => {
              if (!res || res.message == null) {
                this.notificationService.success('Success', 'Setting successfully updated!');
              }
            }),
            finalize(() => {
              this.loading = false;
              this.clearInput();
              this.getData();
            })
          )
          .subscribe();
      };

      this.modalSrv.confirm({
        nzTitle: 'Confirmation',
        nzContent: 'Would you like to update your settings?',
        nzCancelDisabled: false,
        nzOkText: 'Confirm',
        nzCancelText: 'Cancel',
        nzOnOk: () => callback(),
        nzOnCancel: () => {
          this.clearInput();
          this.getData();
        }
      });
    }
  }

  clearSelectedArray(): void {
    this.selectedBids = [];
    this.selectedAsks = [];
    this.selectedAmounts = [];
    this.selectedIntervals = [];
  }

  clearInput(): void {
    this.selectedCP = '';
    this.selectedSymbol = '';
    this.optionsSymbol = [];
    this.selectedBids = [];
    this.optionsBid = [];
    this.selectedAsks = [];
    this.optionsAsk = [];
    this.selectedAmounts = [];
    this.optionsAmount = [];
    this.selectedIntervals = [];
    this.optionsInterval = [];
  }

  ngOnInit(): void {
    this.getData();
  }
}
