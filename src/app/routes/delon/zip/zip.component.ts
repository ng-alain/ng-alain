import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ZipService } from '@delon/abc/zip';
import * as JSZip from 'jszip';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZipComponent implements OnInit {
  list: any;
  instance: JSZip | null = null;
  data: Array<{ path?: string; url?: string }> = [
    { path: 'demo.docx', url: 'https://ng-alain.com/assets/demo.docx' },
    {
      path: '小程序标志.zip',
      url: 'https://wximg.gtimg.com/shake_tv/mina/standard_logo.zip'
    }
  ];

  constructor(
    private zip: ZipService,
    private msg: NzMessageService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.zip.create().then(ret => {
      this.instance = ret;
      this.cdr.detectChanges();
    });
  }

  private format(data: any): void {
    const files = data.files;
    this.list = Object.keys(files).map(key => {
      return {
        name: key,
        dir: files[key].dir,
        date: files[key].date
      };
    });
    this.cdr.detectChanges();
  }

  url(): void {
    this.zip.read(`./assets/tmp/demo.zip`).then(res => this.format(res));
  }

  change(e: Event): void {
    const file = (e.target as HTMLInputElement).files![0];
    this.zip.read(file).then(res => this.format(res));
  }

  download(): void {
    const promises: Array<Promise<void>> = [];
    this.data.forEach(item => {
      promises.push(this.zip.pushUrl(this.instance, item.path!, item.url!));
    });
    Promise.all(promises).then(
      () => {
        this.zip.save(this.instance).then(() => {
          this.msg.success('download success');
          this.data = [];
        });
      },
      (error: {}) => {
        console.warn(error);
        this.msg.error(JSON.stringify(error));
      }
    );
  }
}
