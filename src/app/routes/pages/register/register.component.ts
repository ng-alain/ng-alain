import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SettingsService } from '@core/services/settings.service';

@Component({
  selector: 'app-pages-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  valForm: FormGroup;

  constructor(public settings: SettingsService, fb: FormBuilder, private router: Router) {
    this.valForm = fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      mobile: [null, Validators.compose([Validators.required, Validators.pattern('^1[0-9]{10}$')])],
      password: [null, Validators.required],
      agreed: [null, Validators.required]
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
