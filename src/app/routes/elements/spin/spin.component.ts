import { Component } from '@angular/core';

@Component({
    selector: 'app-spin',
    templateUrl: './spin.component.html'
})
export class SpinComponent {
    loading = true;

    data = [];
    dataLoading = false;

    load() {
        this.dataLoading = true;
        setTimeout(() => {
            this.dataLoading = false;
            this.data = Array(100).fill({}).map((item, index) => <any>{
                key: index + 1,
                age: Math.floor(Math.random() * (50 - 20 + 1) + 20),
                name: `name ${index + 1}`,
                address: `London No. ${index + 1} Lake Park`
            });
        }, 1000 * 2);
    }
}
