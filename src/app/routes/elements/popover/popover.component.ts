import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.less']
})
export class PopoverComponent implements OnInit {

  title: string;
  content = '<div><p>内容</p><p>内容</p></div>';
  content1: any;
  visible: boolean;
  constructor() { }

  clickMe() {
    this.visible = false;
  }
  ngOnInit() {

  }

}
