import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  isCollapsed = false;
  
    constructor() {
    }
  
    ngOnInit() {
    }
  // 内嵌折叠
    toggleCollapsed() {
      this.isCollapsed = !this.isCollapsed;
    }

// 单项 手风琴效果
    isOpenOne = true;
    isOpenTwo = false;
    isOpenThree = false;
  
    openChange(value) {
      if (value === 'one') {
        this.isOpenTwo = false;
        this.isOpenThree = false;
      } else if (value === 'two') {
        this.isOpenOne = false;
        this.isOpenThree = false;
      } else if (value === 'three') {
        this.isOpenOne = false;
        this.isOpenTwo = false;
      }
  
    }

    // 主题切换
    theme:true;

    //切换动态菜单

}
