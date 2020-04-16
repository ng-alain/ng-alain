import { Component } from '@angular/core';
import { STColumn } from '@delon/abc/st';
import { XlsxService } from '@delon/abc/xlsx';

@Component({
  selector: 'app-xlsx',
  templateUrl: './xlsx.component.html',
})
export class XlsxComponent {
  constructor(private xlsx: XlsxService) {}
  data: any;

  users: any[] = Array(100)
    .fill({})
    .map((item: any, idx: number) => {
      return {
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20,
      };
    });

  columns: STColumn[] = [
    { title: '编号', index: 'id', type: 'checkbox' },
    { title: '姓名', index: 'name' },
    { title: '年龄', index: 'age' },
  ];
  url() {
    this.xlsx.import(`./assets/tmp/demo.xlsx`).then((res) => (this.data = res));
  }

  change(e: Event) {
    const file = (e.target as HTMLInputElement).files[0];
    this.xlsx.import(file).then((res) => (this.data = res));
  }

  download() {
    const data = [this.columns.map((i) => i.title)];
    this.users.forEach((i) => data.push(this.columns.map((c) => i[c.index as string])));
    this.xlsx.export({
      sheets: [
        {
          data,
          name: 'sheet name',
        },
      ],
    });
  }
}
