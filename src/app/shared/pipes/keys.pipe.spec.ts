import { KeysPipe } from '@shared/pipes/keys.pipe';

describe('Pipe: keys', () => {

    let instance: KeysPipe = null;
    const data = { name: 'cipchk', address: { city: 'shanghai', district: 'changning' } };

    beforeEach(() => {
        instance = new KeysPipe();
    });

    it('should return a array', () => {
        const ret = instance.transform(data, null);
        expect(Array.isArray(ret)).toBeTruthy();
        const retArr = ret as any[];
        expect(retArr[0].key).toBe('name');
        expect(retArr[0].value).toBe('cipchk');
        expect(retArr[1].key).toBe('address');
        expect(retArr[1].value).toBe(data.address);
    });

});
