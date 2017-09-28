import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class RandomUserService {
    randomUserUrl = 'https://api.randomuser.me/';

    getUsers(PageIndex = 1, pageSize = 10, args?: any) {
        // fix laster version
        let param = new HttpParams().set('results', '' + pageSize).set('page', '' + PageIndex);
        if (args) {
            Object.keys(args).forEach(key => {
                param = param.append(key, args[key]);
            });
        }

        return this.http.get(this.randomUserUrl + '?' + param.toString())
            .catch(this.handleError);
    }

    handleError(error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    constructor(private http: HttpClient) {
    }


}
