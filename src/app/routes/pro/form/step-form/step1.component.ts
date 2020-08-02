import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransferService } from './transfer.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step1Component implements OnInit {
  form: FormGroup;
  get item(): TransferService {
    return this.srv;
  }

  constructor(private fb: FormBuilder, private srv: TransferService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      pay_account: [null, Validators.compose([Validators.required, Validators.email])],
      receiver_type: [null, [Validators.required]],
      receiver_account: [null, [Validators.required]],
      receiver_name: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      amount: [
        null,
        Validators.compose([Validators.required, Validators.pattern(`[0-9]+`), Validators.min(1), Validators.max(10000 * 100)]),
      ],
    });
    this.form.patchValue(this.item);
  }

  //#region get form fields
  get pay_account(): AbstractControl {
    return this.form.controls.pay_account;
  }
  get receiver_type(): AbstractControl {
    return this.form.controls.receiver_type;
  }
  get receiver_account(): AbstractControl {
    return this.form.controls.receiver_account;
  }
  get receiver_name(): AbstractControl {
    return this.form.controls.receiver_name;
  }
  get amount(): AbstractControl {
    return this.form.controls.amount;
  }
  //#endregion

  _submitForm(): void {
    Object.assign(this.item, this.form.value);
    ++this.item.step;
  }
}
