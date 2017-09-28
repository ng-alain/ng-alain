import { TokenData } from './token.type';
import { TokenService } from './token.service';
import * as moment from 'moment';

describe('Service: token', () => {

    let instance: TokenService = null;
    const token = <TokenData>{
        access_token: '1234567890',
        expire_time: moment().add(7, 'days').unix(),
        refresh_token: '234567890',
        refresh_token_valid_time: moment().add(14, 'days').unix(),
        user_name: 'cipchk'
    };

    const _data = {};

    beforeEach(() => {
        spyOn(localStorage, 'getItem').and.callFake((key) => {
            return _data[key];
        });
        spyOn(localStorage, 'setItem').and.callFake((key, value) => {
            _data[key] = value;
        });
        spyOn(localStorage, 'removeItem').and.callFake((key) => {
            delete _data[key];
        });

        instance = new TokenService();
    });

    it('#data', () => {
        instance.data = token;
        expect(instance.data.access_token).toBe(token.access_token);
    });

    it('#logout', () => {
        instance.data = token;
        instance.logout();
        expect(instance.data.access_token).toBeUndefined();
    });

});
