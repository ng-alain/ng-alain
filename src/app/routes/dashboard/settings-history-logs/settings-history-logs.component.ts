import { Component, OnDestroy, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { map } from 'rxjs';
import { EventConstant } from 'src/app/shared/constants/event.constant';
import { EventService } from 'src/app/shared/services/event.service';
import { AuditLogRestService } from 'src/app/shared/services/rest/audit-log.rest.service';

@Component({
  selector: 'app-settings-history-logs',
  templateUrl: './settings-history-logs.component.html'
})
export class SettingsHistoryLogsComponent implements OnInit, OnDestroy {
  list = [];

  constructor(private auditLogRestService: AuditLogRestService, private eventService: EventService) {}

  ngOnInit(): void {
    this.getData();

    this.eventService.subscribe(EventConstant.UPDATE_HISTORY_LOGS, () => {
      this.getData();
    });
  }

  private getData() {
    this.auditLogRestService
      .getAuditLog()
      .pipe(
        map(res => {
          this.list = res;
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.eventService.destroy(EventConstant.UPDATE_HISTORY_LOGS);
  }
}
