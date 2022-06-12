import { HttpStatusCode } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { finalize, map } from 'rxjs';
import { ExchangeKeyPermission } from 'src/app/shared/constants/status.constant';
import { SettingRestService } from 'src/app/shared/services/rest/setting.rest.service';

@Component({
  selector: 'app-exchange-setting',
  templateUrl: './exchange-setting.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExchangeSettingComponent implements OnInit {
  i: { ak?: string; sk?: string } = {};
  additional_input: string = "";
  listOfData: any[] = [];
  exchangeOptions: any;
  selectExchange: any;
  initialData: {} = {};
  statusControl = false;
  loading = false;
  exchange_name: any = "";

  formJson: any[] = [
    { label: "ACCESS KEY",  key: "access_key", value: null, isRequired: false, isVisible: true},
    { label: "SECRET KEY", key: "secret_key", value: null, isRequired: false, isVisible: false},
    { label: "PASSPHRASE", key: "passphrase", value: null, isRequired: false, isVisible: false}
  ]

  tempJsonBackup: any[] = [];

  inputModel = this.formJson.map(x=>{
    x.key
  })

  constructor(
    public msg: NzMessageService,
    private settingRestService: SettingRestService,
    private cdr: ChangeDetectorRef,
    private notificationService: NzNotificationService
    ) {
    this.tempJsonBackup = this.formJson;
  }

  ngOnInit(): void {
    this.getData()
  }

  onSelectedExchange(value: number) {
    // this.selectedSymbol = '';
    this.clearSelectedArray();

    if (value == null) {
      this.selectExchange = '';
      // this.optionsSymbol = [{ value: '', label: '' }];
    } else {
      this.exchange_name = this.listOfData[value-1];
      this.selectExchange = value;
      let i = 0;
      Object.keys(this.listOfData[value-1]).map((xs: any)=>{
        this.statusControl = this.listOfData[value-1].status == 'A' ? false : true;
        const set = this.formJson.find((x: any) => x.key === xs)
        if(set?.key == 'access_key') {
          if(this.listOfData[value-1].access_key !== '' && this.listOfData[value-1].access_key !== ExchangeKeyPermission.DISALLOWED) {
            this.formJson[i].value = this.listOfData[value-1].access_key;
            this.formJson[i].isRequired = true;
            i++;
          } else {
            this.formJson[i].isRequired = false;
          }
        }

        if(set?.key == 'secret_key') {
          if(this.listOfData[value-1].secret_key !== '' && this.listOfData[value-1].secret_key !== ExchangeKeyPermission.DISALLOWED) {
            this.formJson[i].value = this.listOfData[value-1].secret_key;
            this.formJson[i].isRequired = true;
            i++;
          } else {
            this.formJson[i].isRequired = false;
          }
        }

        if(set?.key == 'passphrase') {
          if(this.listOfData[value-1].passphrase !== '' && this.listOfData[value-1].passphrase !== ExchangeKeyPermission.DISALLOWED) {
            this.formJson[i].value = this.listOfData[value-1].passphrase;
            this.formJson[i].isRequired = true;
          } else {
            this.formJson[i].isRequired = false;
          }
        }
      });
    }
  }

  getData() {
    this.listOfData = [];
    this.loading = true;

    this.settingRestService
      .geAllExchangeCredentials()
      .pipe(
        map(res => {
            // res.map((x: any) => this.exchangeOptions = x);
          // console.log(found);
            this.initialData = this.exchangeOptions;
            let i = 1;
            this.exchangeOptions = res;
            Object.keys(this.exchangeOptions).map((key) => {
              const data = {
                id: i,
                exchange: key.charAt(0).toUpperCase() + key.slice(1),
                access_key: this.exchangeOptions[key].map((val: any) => val.KEY).toString(),
                secret_key: this.exchangeOptions[key].map((val: any) => val.SECRET).toString(),
                passphrase: this.exchangeOptions[key].map((val: any) => val.PASSPHRASE).toString(),
                status: this.exchangeOptions[key].map((val: any) => val.Status).toString(),
              };
              i++;
              this.listOfData.push(data);
            });
        }),
        finalize(() => {
          console.log('listOfData: ', this.listOfData);
          this.loading = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe();
  }

  reset() {
    console.log(this.tempJsonBackup)
    this.formJson = [    
      { label: "ACCESS KEY",  key: "access_key", value: null, isRequired: false, isVisible: true},
      { label: "SECRET KEY", key: "secret_key", value: null, isRequired: false, isVisible: false},
      { label: "PASSPHRASE", key: "passphrase", value: null, isRequired: false, isVisible: false}
    ];
  }

  submit(index: any) {
    this.loading = true;
    
    this.formJson.forEach(x=>{
      this.listOfData[index-1][x.key] = x.value;
    });

    console.log(this.listOfData);
    let payload: any = {};

    this.listOfData.forEach((x, i)=>{
      Object.assign(payload, {
        [x.exchange]: [{
          KEY: x.access_key,
          SECRET: x.secret_key,
          PASSPHRASE: x.passphrase,
          Status: x.status
        }]
      })
    })
    
    this.settingRestService.updateExchangeCredentials(payload, this.exchange_name.exchange).pipe(
      map(res => {
        console.log(res)
        if(res == HttpStatusCode.Ok) {
          this.notificationService.success('Success', this.listOfData[index-1].exchange+' successfully updated!');
        } else {
          this.notificationService.error('Invalid', 'Entered Keys Incorrect.');
        }
        
      }),
      finalize(() => {
        this.loading = false;
        this.getData();
      })
    ).subscribe();
  }

  clearSelectedArray(): void {
    this.formJson = [    
      { label: "ACCESS KEY",  key: "access_key", value: null, isRequired: false, isVisible: true},
      { label: "SECRET KEY", key: "secret_key", value: null, isRequired: false, isVisible: false},
      { label: "PASSPHRASE", key: "passphrase", value: null, isRequired: false, isVisible: false}
    ];
  }
}
