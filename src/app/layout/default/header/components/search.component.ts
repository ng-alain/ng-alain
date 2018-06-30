import {
  Component,
  HostBinding,
  Input,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { MenuService, Menu } from '@delon/theme';
import { DomSanitizer } from '@angular/platform-browser';

// bypassSecurityTrustHtml 转为安全的html 不然没有颜色样式 推荐在绑定时使用管道 {{ title | html }}
@Component({
  selector: 'header-search',
  template: `
  <nz-input-group nzAddOnBeforeIcon="anticon anticon-search">
    <input nz-input [(ngModel)]="q" (focus)="qFocus()" (blur)="qBlur()" (ngModelChange)="qChange($event)"
      [placeholder]="'top-search-ph' | translate" [nzAutocomplete]="searchResult">
  </nz-input-group>
  <nz-autocomplete #searchResult>
        <nz-auto-optgroup *ngFor="let group of qResultGroups" [nzLabel]="group.title">
          <nz-auto-option *ngFor="let option of group.children" [nzValue]="option.value" [routerLink]="option.link">
            <a [innerHtml]="sanitizer.bypassSecurityTrustHtml(option.title)"></a>
          </nz-auto-option>
        </nz-auto-optgroup>
  </nz-autocomplete>
  `,
})
export class HeaderSearchComponent implements AfterViewInit {
  q: string;

  qResultGroups: any[] = [];

  qIpt: HTMLInputElement;

  menus = this.menuService.menus;

  selectedValue: string;

  @HostBinding('class.header-search__focus') focus = false;

  @HostBinding('class.header-search__toggled') searchToggled = false;

  @Input()
  set toggleChange(value: boolean) {
    if (typeof value === 'undefined') return;
    this.searchToggled = true;
    this.focus = true;
    setTimeout(() => this.qIpt.focus(), 300);
  }

  constructor(
    private el: ElementRef,
    private menuService: MenuService,
    private sanitizer: DomSanitizer,
  ) {}

  ngAfterViewInit() {
    this.qIpt = (this.el.nativeElement as HTMLElement).querySelector(
      '.ant-input',
    ) as HTMLInputElement;
  }

  qFocus() {
    this.focus = true;
  }

  qBlur() {
    this.focus = false;
    this.searchToggled = false;
  }

  qChange($event: string) {
    // 清空原数据
    this.qResultGroups = [];
    this.findMenuGroup($event);
    // ...其他分组数据的Api
  }

  /** 搜索菜单 */
  findMenuGroup(likeName: string) {
    if (likeName) {
      this.menus.forEach(menu => {
        this.findMenu(likeName, menu);
      });
    }
  }

  findMenu(likeName: string, menu: Menu, path: string = null) {
    path = path ? path + ' / ' : '';
    if (
      menu.text.toUpperCase().indexOf(likeName.toUpperCase()) !== -1 &&
      menu.link
    ) {
      let menuGroup = this.qResultGroups.find(group => group.title === '菜单');
      // 不存在菜单组则添加
      if (!menuGroup) {
        const index =
          this.qResultGroups.push({ title: '菜单', children: [] }) - 1;
        menuGroup = this.qResultGroups[index];
      }

      let title = menu.text;
      let startIndex = 0;
      const indexs: number[] = [];
      // 将匹配到的字符索引记录下来
      while (
        (startIndex = menu.text
          .toUpperCase()
          .indexOf(likeName.toUpperCase(), startIndex)) !== -1
      ) {
        if (!indexs.find(item => item === startIndex)) {
          indexs.push(startIndex);
        }
        startIndex += likeName.length;
      }
      // 倒序插入<b></b>
      for (let i = indexs.length - 1; i >= 0; i--) {
        title =
          title.substring(0, indexs[i]) +
          '<b style="color:#C00">' +
          title.substring(indexs[i], indexs[i] + likeName.length) +
          '</b>' +
          title.substring(indexs[i] + likeName.length, title.length);
      }

      title = path + title;
      menuGroup.children.push({
        value: menu.text,
        title: title,
        link: menu.link,
      });
    }

    if (menu.children && menu.children !== []) {
      menu.children.forEach(child => {
        this.findMenu(likeName, child, path + menu.text);
      });
    }
  }
}
