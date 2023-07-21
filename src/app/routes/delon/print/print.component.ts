import { Component } from '@angular/core';
import { Lodop, LodopService } from '@delon/abc/lodop';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html'
})
export class PrintComponent {
  constructor(
    public lodopSrv: LodopService,
    private msg: NzMessageService,
    private notify: NzNotificationService
  ) {
    this.lodopSrv.lodop.subscribe(({ lodop, ok }) => {
      if (!ok) {
        this.error = true;
        return;
      }
      this.error = false;
      this.msg.success(`打印机加载成功`);
      this.lodop = lodop as Lodop;
      this.pinters = this.lodopSrv.printer;
    });
  }
  cog: any = {
    url: 'https://localhost:8443/CLodopfuncs.js',
    printer: '',
    paper: '',
    html: `
      <h1>Title</h1>
      <p>这~！@#￥%……&*（）——sdilfjnvn</p>
      <p>这~！@#￥%……&*（）——sdilfjnvn</p>
      <p>这~！@#￥%……&*（）——sdilfjnvn</p>
      <p>这~！@#￥%……&*（）——sdilfjnvn</p>
      <p>这~！@#￥%……&*（）——sdilfjnvn</p>
    `
  };
  error = false;
  lodop: Lodop | null = null;
  pinters: any[] = [];
  papers: string[] = [];

  printing = false;

  reload(options: { url: string } | null = { url: 'https://localhost:8443/CLodopfuncs.js' }): void {
    this.pinters = [];
    this.papers = [];
    this.cog.printer = '';
    this.cog.paper = '';

    this.lodopSrv.cog = { ...this.cog, ...options };
    this.error = false;
    if (options === null) {
      this.lodopSrv.reset();
    }
  }

  changePinter(name: string): void {
    if (this.lodop == null) {
      return;
    }
    this.papers = this.lodop.GET_PAGESIZES_LIST(name, '\n').split('\n');
  }
  print(isPrivew: boolean = false): void {
    const LODOP = this.lodop as Lodop;
    LODOP.PRINT_INITA(10, 20, 810, 610, '测试C-Lodop远程打印四步骤');
    LODOP.SET_PRINTER_INDEXA(this.cog.printer);
    LODOP.SET_PRINT_PAGESIZE(0, 0, 0, this.cog.paper);
    LODOP.ADD_PRINT_TEXT(1, 1, 300, 200, '下面输出的是本页源代码及其展现效果：');
    LODOP.ADD_PRINT_TEXT(20, 10, '90%', '95%', this.cog.html);
    LODOP.SET_PRINT_STYLEA(0, 'ItemType', 4);
    LODOP.NEWPAGEA();
    LODOP.ADD_PRINT_HTM(20, 10, '90%', '95%', this.cog.html);
    if (isPrivew) {
      LODOP.PREVIEW();
    } else {
      LODOP.PRINT();
    }
  }
}
