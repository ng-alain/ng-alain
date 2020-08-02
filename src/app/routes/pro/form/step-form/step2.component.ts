import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransferService } from './transfer.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step2Component implements OnInit {
  form: FormGroup;
  loading = false;
  get item(): TransferService {
    return this.srv;
  }

  constructor(private fb: FormBuilder, private srv: TransferService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
    });
    this.form.patchValue(this.item);
  }

  //#region get form fields
  get password(): AbstractControl {
    return this.form.controls.password;
  }
  //#endregion

  _submitForm(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      ++this.item.step;
    }, 500);
  }

  prev(): void {
    --this.item.step;
  }
}
