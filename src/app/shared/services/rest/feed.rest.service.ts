import { Injectable } from '@angular/core';

import { PaginationDto } from '../../interfaces/pagination.interface';
import responseHandler from '../../utils/response-handler';
import { AbstractRestService } from './abstract.rest.service';

@Injectable({
  providedIn: 'root'
})
export class FeedRestService extends AbstractRestService {
  getBasePath(): string {
    return 'v1/feed';
  }

  getOrderHistory(payload: GetOrderHistoryDto) {
    return this.post('/get-order-history', payload).pipe(responseHandler());
  }
}

export interface GetOrderHistoryDto extends PaginationDto {
  orderId?: string;
  status?: string[];
  fromDate?: string;
  toDate?: string;
}
