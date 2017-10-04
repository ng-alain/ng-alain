import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.less']
})
export class ProgressComponent implements OnInit {
  _percent = 0;
  
    increase() {
      this._percent = this._percent + 10;
      if (this._percent > 100) {
        this._percent = 100;
      }
    }
  
    decline() {
      this._percent = this._percent - 10;
      if (this._percent < 0) {
        this._percent = 0;
      }
    }


    _formatOne = percent => `${percent} Days`;
    _formatTwo = percent => `Done`;
    
  constructor() { }

  ngOnInit() {
  }

}
