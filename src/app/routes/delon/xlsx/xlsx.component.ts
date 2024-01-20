import { Component, inject } from '@angular/core';
import { STColumn } from '@delon/abc/st';
import { XlsxService } from '@delon/abc/xlsx';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-xlsx',
  templateUrl: './xlsx.component.html'
})
export class XlsxComponent {
  private readonly xlsx = inject(XlsxService);

  data: any;
  users: Array<{ id: number; name: string; age: number }> = Array(100)
    .fill(0)
    .map((_item: number, idx: number) => {
      return {
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20
      };
    });

  columns: STColumn[] = [
    { title: '编号', index: 'id', type: 'checkbox' },
    { title: '姓名', index: 'name' },
    { title: '年龄', index: 'age' }
  ];

  url(): void {
    this.xlsx.import(`./assets/tmp/demo.xlsx`).then(res => (this.data = res));
  }

  change(e: Event): void {
    const file = (e.target as HTMLInputElement).files![0];
    this.xlsx.import(file).then(res => (this.data = res));
  }

  download(): void {
    const data = [this.columns.map(i => i.title)];
    this.users.forEach((i: { [key: string]: NzSafeAny }) => data.push(this.columns.map(c => i[c.index as string])));
    this.xlsx.export({
      sheets: [
        {
          data,
          name: 'sheet name'
        }
      ]
    });
  }
}
