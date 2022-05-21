import { Injectable } from '@angular/core';

import responseHandler from '../../utils/response-handler';
import { AbstractRestService } from './abstract.rest.service';

@Injectable({
  providedIn: 'root'
})
export class SettingRestService extends AbstractRestService {
  getBasePath(): string {
    return 'v1/setting';
  }

  getExchangeSetting() {
    return this.get('/get-exchange-setting').pipe(responseHandler());
  }

  getSetting() {
    return this.get(`/get-setting`).pipe(responseHandler());
  }

  updateExchangeSetting(payload: ExchangeSetting) {
    return this.post(`/update-exchange-setting`, payload).pipe(responseHandler());
  }

  updateSiteSetting(payload: SiteSetting) {
    return this.put(`/update-site-setting`, payload).pipe(responseHandler());
  }
}

interface ExchangeSetting {
  exchangeId?: number;
  status?: string;
  values?: string;
}

interface SiteSetting {
  details?: [
    {
      key?: string;
      value?: string;
    }
  ];
}
