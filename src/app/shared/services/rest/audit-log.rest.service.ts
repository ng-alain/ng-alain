import { Injectable } from '@angular/core';

import { PaginationDto } from '../../interfaces/pagination.interface';
import responseHandler from '../../utils/response-handler';
import { AbstractRestService } from './abstract.rest.service';

@Injectable({
  providedIn: 'root'
})
export class AuditLogRestService extends AbstractRestService {
  getBasePath(): string {
    return 'v1/audit-log';
  }

  getAuditLog() {
    return this.get('/get-filtered-logs?page=1&limit=100&orderBy=createdDate&orderSequence=-1&role=U').pipe(responseHandler());
  }
}
