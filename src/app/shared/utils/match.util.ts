import { FormGroup } from '@angular/forms';

export function matchValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchControl = formGroup.controls[matchingControlName];

    if (matchControl.errors && !matchControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchControl.value) {
      matchControl.setErrors({ mustMatch: true });
    } else {
      matchControl.setErrors(null);
    }
  };
}
