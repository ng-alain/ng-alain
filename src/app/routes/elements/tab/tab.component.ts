import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less']
})
export class TabComponent implements OnInit {

  tabs = [
    {
      name   : 'Tab 1',
      content: 'Content of Tab Pane 1'
    },
    {
      name   : 'Tab 2',
      content: 'Content of Tab Pane 2'
    },
    {
      name   : 'Tab 3',
      content: 'Content of Tab Pane 3'
    }
  ];
  // 禁用
  selectedIndex2 = 0;
  tabs2 = [
    {
      name    : 'Tab 1',
      disabled: false
    },
    {
      name    : 'Tab 2',
      disabled: true
    },
    {
      name    : 'Tab 3',
      disabled: false
    }
  ];
// 图标
  tabs3 = [
    {
      active: true,
      name  : 'Tab 1',
      icon  : 'anticon anticon-apple'
    },
    {
      active: false,
      name  : 'Tab 2',
      icon  : 'anticon anticon-android'
    }
  ];

  //滑动 纵横
  tabs4 = [];
  nzTabPosition4 = 'top';
  selectedIndex4 = 0;

  _console(args) {
    console.log(args);
  }
// 可改变位置
  nzTabPosition5 = 'top';
  _position5 = 'top';
  tabs5 = [
    {
      index: 1
    },
    {
      index: 2
    },
    {
      index: 3
    }
  ];
  options = [
    { value: 'top', label: 'top' },
    { value: 'left', label: 'left' },
    { value: 'right', label: 'right' },
    { value: 'bottom', label: 'bottom' }
  ];
  // 可关闭标签
  tabs6 = [
    {
      name: 'Tab 1'
    },
    {
      name: 'Tab 2'
    }
  ];
  closeTab(tab) {
    this.tabs6.splice(this.tabs6.indexOf(tab), 1);
  };

  newTab() {
    this.tabs6.push({
      name: 'New Tab'
    });
  };

  constructor() { }

  ngOnInit() {
    // 滑动纵横
    for (let i = 0; i < 11; i++) {
      this.tabs4.push({
        name   : `Tab ${i}`,
        content: `Content of tab ${i}`
      })
    }
  }

}
