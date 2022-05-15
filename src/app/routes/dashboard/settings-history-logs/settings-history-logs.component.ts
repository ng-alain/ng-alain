import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AuditLogRestService } from 'src/app/shared/services/rest/audit-log.rest.service';

@Component({
  selector: 'app-settings-history-logs',
  templateUrl: './settings-history-logs.component.html'
})
export class SettingsHistoryLogsComponent implements OnInit {
  list = [];

  constructor(private auditLogRestService: AuditLogRestService) {}

  ngOnInit(): void {
    this.auditLogRestService
      .getAuditLog()
      .pipe(
        map(res => {
          this.list = res;
        })
      )
      .subscribe();
  }
}
