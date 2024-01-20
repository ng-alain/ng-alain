import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { TransferService } from './transfer.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Step2Component implements OnInit {
  private readonly srv = inject(TransferService);

  form = new FormGroup({
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]))
  });
  loading = false;
  get item(): TransferService {
    return this.srv;
  }

  ngOnInit(): void {
    this.form.patchValue(this.item);
  }

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
