import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    private _isLogin = false;

    private _user = '';

    private _role: string[] = [];

    private _token = '';

    get isLogin(): boolean {
        return this._isLogin;
    }

    get token(): string {
        return this._token;
    }

    hasRole(name: 'admin' | 'employee'): boolean {
        return this._role.includes(name);
    }

    login(user: string) {
        this._user = user;
        // mock
        if (user === 'admin') {
            this._role = [ 'admin' ];
        } else {
            this._role = [ 'employee' ];
        }
        this._isLogin = true;
        this._token = '' + Math.random();
        console.log(user, this._isLogin, this._role);
    }

    logout() {
        this._user = '';
        this._isLogin = false;
        this._token = '';
    }
}
