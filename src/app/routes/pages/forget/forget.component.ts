import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SettingsService } from '@core/services/settings.service';

@Component({
  selector: 'app-pages-forget',
  templateUrl: './forget.component.html'
})
export class ForgetComponent {
  valForm: FormGroup;

  constructor(public settings: SettingsService, fb: FormBuilder, private router: Router) {
    this.valForm = fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])]
    });
  }

  submit() {
    // tslint:disable-next-line:forin
    for (const i in this.valForm.controls) {
      this.valForm.controls[i].markAsDirty();
    }
    if (this.valForm.valid) {
      console.log('Valid!');
      console.log(this.valForm.value);
      this.router.navigate(['dashboard']);
    }
  }
}
