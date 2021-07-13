import { Component } from '@angular/core';
import { copy } from '@delon/util/browser';
import { NzMessageService } from 'ng-zorro-antd/message';

import { ColorService } from '../color.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.less']
})
export class ColorsComponent {
  nums = Array(10)
    .fill(1)
    .map((v, i) => v + i);

  get names(): string[] {
    return this.colorSrv.names;
  }

  get brands(): string[] {
    return this.colorSrv.brands;
  }

  constructor(private colorSrv: ColorService, private msg: NzMessageService) {}

  onCopy(str: string): void {
    copy(str).then(() => this.msg.success(`Copied Success!`));
  }
}
