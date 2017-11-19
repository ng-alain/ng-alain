import { Component } from '@angular/core';
import swal, { SweetAlertType } from 'sweetalert2';

@Component({
    selector: 'app-sweetalert',
    templateUrl: './sweetalert.component.html'
})
export class SweetAlertComponent {
    types = [ 'success', 'error', 'warning', 'info', 'question' ];

    alertType(type: SweetAlertType) {
        swal(`Try me! Example: ${type} modal`, '', type);
    }

    async alertText() {
        const { value: name } = await swal({
            title: 'What is your name?',
            input: 'text',
            inputPlaceholder: 'Enter your name or nickname',
            showCancelButton: true,
            inputValidator: function (value) {
                return !value && 'You need to write something!';
            }
        });

        if (name) {
            swal({type: 'success', title: 'Hi, ' + name});
        }
    }

    async alertHtml() {
        const {value: formValues} = await swal({
            title: 'Multiple inputs',
            html:
              '<input id="swal-input1" class="swal2-input">' +
              '<input id="swal-input2" class="swal2-input">',
            focusConfirm: false,
            preConfirm: function () {
              return [
                (document.querySelector('#swal-input1') as HTMLInputElement).value,
                (document.querySelector('#swal-input2') as HTMLInputElement).value
              ];
            }
        });

        if (formValues) {
            swal(JSON.stringify(formValues));
        }
    }
}
