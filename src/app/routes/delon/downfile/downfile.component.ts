import { Component } from '@angular/core';
import { DownFileDirective } from '@delon/abc/down-file';
import { SHARED_IMPORTS } from '@shared';

@Component({
  selector: 'app-down-file',
  templateUrl: './downfile.component.html',
  imports: [...SHARED_IMPORTS, DownFileDirective]
})
export class DownFileComponent {
  fileTypes = ['.xlsx', '.docx', '.pptx', '.pdf'];

  data = {
    otherdata: 1,
    time: new Date()
  };
}
