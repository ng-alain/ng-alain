import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'layout-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.less'],
})
export class LayoutPassportComponent {
  ngOnInit(){
    $('#particles').particleground({
      dotColor: '#d0ded9',
      lineColor: '#d0ded9'
    });
  }
}
