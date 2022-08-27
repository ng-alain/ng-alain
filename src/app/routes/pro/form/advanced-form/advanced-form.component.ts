import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

interface UserForm {
  key: FormControl<string>;
  workId: FormControl<string>;
  name: FormControl<string>;
  department: FormControl<string>;
}

@Component({
  selector: 'app-advanced-form',
  templateUrl: './advanced-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedFormComponent implements OnInit {
  editIndex = -1;
  editObj = {};
  form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    url: new FormControl('', { validators: [Validators.required] }),
    owner: new FormControl(undefined, { validators: [Validators.required] }),
    approver: new FormControl('', { validators: [Validators.required] }),
    date_range: new FormControl('', { validators: [Validators.required] }),
    type: new FormControl('', { validators: [Validators.required] }),
    name2: new FormControl('', { validators: [Validators.required] }),
    summary: new FormControl('', { validators: [Validators.required] }),
    owner2: new FormControl('', { validators: [Validators.required] }),
    approver2: new FormControl('', { validators: [Validators.required] }),
    time: new FormControl('', { validators: [Validators.required] }),
    type2: new FormControl('', { validators: [Validators.required] }),
    items: new FormArray<FormGroup<UserForm>>([])
  });
  users: Array<{ value: string; label: string }> = [
    { value: 'xiao', label: '付晓晓' },
    { value: 'mao', label: '周毛毛' }
  ];

  ngOnInit(): void {
    const userList = [
      {
        key: '1',
        workId: '00001',
        name: 'John Brown',
        department: 'New York No. 1 Lake Park'
      },
      {
        key: '2',
        workId: '00002',
        name: 'Jim Green',
        department: 'London No. 1 Lake Park'
      },
      {
        key: '3',
        workId: '00003',
        name: 'Joe Black',
        department: 'Sidney No. 1 Lake Park'
      }
    ];
    userList.forEach(i => {
      const field = this.createUser();
      field.patchValue(i);
      this.items.push(field);
    });
  }

  createUser(): FormGroup<UserForm> {
    return new FormGroup({
      key: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      workId: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      department: new FormControl('', { nonNullable: true, validators: [Validators.required] })
    });
  }

  get items(): FormArray<FormGroup<UserForm>> {
    return this.form.controls.items;
  }

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
    const item = this.items.at(index);
    this.formValidity(item.controls);
    if (item.invalid) {
      return;
    }
    this.editIndex = -1;
  }

  cancel(index: number): void {
    const item = this.items.at(index);
    if (!item.value.key) {
      this.del(index);
    } else {
      item.patchValue(this.editObj);
    }
    this.editIndex = -1;
  }

  _submitForm(): void {
    this.formValidity(this.form.controls);
    if (this.form.invalid) {
      return;
    }
  }

  private formValidity(controls: NzSafeAny): void {
    Object.keys(controls).forEach(key => {
      const control = (controls as NzSafeAny)[key] as AbstractControl;
      control.markAsDirty();
      control.updateValueAndValidity();
    });
  }
}
