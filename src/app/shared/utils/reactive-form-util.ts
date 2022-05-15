import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

const updateValueAndValidityNested = (rootControl: FormGroup | FormArray) => {
  markRecursively(rootControl, (control: AbstractControl) => control.updateValueAndValidity());
};

const markAsTouchedNested = (rootControl: FormGroup | FormArray) => {
  markRecursively(rootControl, (control: AbstractControl) => control.markAsTouched());
};

const markAsDirtyNested = (rootControl: FormGroup | FormArray) => {
  markRecursively(rootControl, (control: AbstractControl) => control.markAsDirty());
};

const toggleEnabledNested = (rootControl: FormGroup | FormArray) => {
  markRecursively(rootControl, (control: AbstractControl) => control.enable());
};

const toggleDisableNested = (rootControl: FormGroup | FormArray) => {
  markRecursively(rootControl, (control: AbstractControl) => control.disable());
};

const controlsMarkAsDirty = (...controls: Array<AbstractControl>) => {
  for (let control of controls) {
    control.markAsDirty();
  }
};

const controlsUpdateValueAndValidity = (...controls: Array<AbstractControl>) => {
  for (let control of controls) {
    control.updateValueAndValidity();
  }
};

const markRecursively = (rootControl: FormGroup | FormArray, callback?: any) => {
  if (rootControl.controls) {
    Object.keys(rootControl.controls).forEach((key) => {
      // @ts-ignore
      const control = rootControl.controls[key];

      if (control instanceof FormControl) {
        if (callback != null) {
          callback(control);
        }
        control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
      } else if (control instanceof FormGroup || control instanceof FormArray) {
        markRecursively(control, callback);
      } else {
        console.error('control: ', control);
        throw new Error('Invalid control found.');
      }
    });
  }
};

const isDirtyAndError = (controls: AbstractControl | AbstractControl[]) => {
  if (Array.isArray(controls)) {
    return Array.of(...controls).some((control) => control.errors && control.dirty);
  } else {
    return controls.errors && controls.dirty;
  }
};

const scrollToError = (id?: string) => {
  try {
    let firstElementWithError;
    if (id) {
      if (document.getElementById(id)) {
        firstElementWithError = document.getElementById(id)!.querySelector('.ng-invalid');
      }
    } else {
      firstElementWithError = document.querySelector('.ng-invalid');
    }
    if (firstElementWithError) {
      firstElementWithError.scrollIntoView({ behavior: 'smooth' });
    }
  } catch (e) {
    console.error('something went wrong.', e);
  }
};

export default {
  markAsTouchedNested,
  markAsDirtyNested,
  toggleEnabledNested,
  toggleDisableNested,
  updateValueAndValidityNested,
  markRecursively,
  isDirtyAndError,
  scrollToError,
  controlsMarkAsDirty,
  controlsUpdateValueAndValidity
};
