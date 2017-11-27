import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { _HttpClient } from '@delon/theme';

@Injectable()
export class RandomUserService {
    randomUserUrl = 'https://api.randomuser.me/';

    getUsers(PageIndex = 1, pageSize = 10, args?: any) {
        return this.http
            .get(this.randomUserUrl, { results: pageSize, page: PageIndex, _allow_anonymous: true })
            .pipe(catchError(this.handleError));
    }

    handleError(error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    constructor(private http: _HttpClient) {
    }


}
