import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-advanced-form',
  templateUrl: './advanced-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvancedFormComponent implements OnInit {
  editIndex = -1;
  editObj = {};
  form!: FormGroup;
  users: Array<{ value: string; label: string }> = [
    { value: 'xiao', label: '付晓晓' },
    { value: 'mao', label: '周毛毛' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      url: [null, [Validators.required]],
      owner: [undefined, [Validators.required]],
      approver: [null, [Validators.required]],
      date_range: [null, [Validators.required]],
      type: [null, [Validators.required]],
      name2: [null, [Validators.required]],
      summary: [null, [Validators.required]],
      owner2: [null, [Validators.required]],
      approver2: [null, [Validators.required]],
      time: [null, [Validators.required]],
      type2: [null, [Validators.required]],
      items: this.fb.array([]),
    });
    const userList = [
      {
        key: '1',
        workId: '00001',
        name: 'John Brown',
        department: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        workId: '00002',
        name: 'Jim Green',
        department: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        workId: '00003',
        name: 'Joe Black',
        department: 'Sidney No. 1 Lake Park',
      },
    ];
    userList.forEach((i) => {
      const field = this.createUser();
      field.patchValue(i);
      this.items.push(field);
    });
  }

  createUser(): FormGroup {
    return this.fb.group({
      key: [null],
      workId: [null, [Validators.required]],
      name: [null, [Validators.required]],
      department: [null, [Validators.required]],
    });
  }

  //#region get form fields
  get name(): AbstractControl {
    return this.form.controls.name;
  }
  get url(): AbstractControl {
    return this.form.controls.url;
  }
  get owner(): AbstractControl {
    return this.form.controls.owner;
  }
  get approver(): AbstractControl {
    return this.form.controls.approver;
  }
  get time_start(): AbstractControl {
    return this.form.controls.time_start;
  }
  get time_end(): AbstractControl {
    return this.form.controls.time_end;
  }
  get type(): AbstractControl {
    return this.form.controls.type;
  }
  get name2(): AbstractControl {
    return this.form.controls.name2;
  }
  get summary(): AbstractControl {
    return this.form.controls.summary;
  }
  get owner2(): AbstractControl {
    return this.form.controls.owner2;
  }
  get approver2(): AbstractControl {
    return this.form.controls.approver2;
  }
  get time(): AbstractControl {
    return this.form.controls.time;
  }
  get type2(): AbstractControl {
    return this.form.controls.type2;
  }
  get items(): FormArray {
    return this.form.controls.items as FormArray;
  }
  //#endregion

  add(): void {
    this.items.push(this.createUser());
    this.edit(this.items.length - 1);
  }

  del(index: number): void {
    this.items.removeAt(index);
  }

  edit(index: number): void {
    if (this.editIndex !== -1 && this.editObj) {
      this.items.at(this.editIndex).patchValue(this.editObj);
    }
    this.editObj = { ...this.items.at(index).value };
    this.editIndex = index;
  }

  save(index: number): void {
    this.items.at(index).markAsDirty();
    if (this.items.at(index).invalid) {
      return;
    }
    this.editIndex = -1;
  }

  cancel(index: number): void {
    if (!this.items.at(index).value.key) {
      this.del(index);
    } else {
      this.items.at(index).patchValue(this.editObj);
    }
    this.editIndex = -1;
  }

  _submitForm(): void {
    Object.keys(this.form.controls).forEach((key) => {
      this.form.controls[key].markAsDirty();
      this.form.controls[key].updateValueAndValidity();
    });
    if (this.form.invalid) {
      return;
    }
  }
}
