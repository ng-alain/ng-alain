import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalFooterModule } from '@delon/abc/global-footer';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { ThemeBtnComponent } from '@delon/theme/theme-btn';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { HeaderI18nComponent } from '../basic/widgets/i18n.component';

@Component({
  selector: 'layout-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.less'],
  standalone: true,
  imports: [RouterOutlet, HeaderI18nComponent, GlobalFooterModule, NzIconModule, ThemeBtnComponent]
})
export class LayoutPassportComponent implements OnInit {
  links = [
    {
      title: '帮助',
      href: ''
    },
    {
      title: '隐私',
      href: ''
    },
    {
      title: '条款',
      href: ''
    }
  ];

  constructor(@Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService) {}

  ngOnInit(): void {
    this.tokenService.clear();
  }
}
