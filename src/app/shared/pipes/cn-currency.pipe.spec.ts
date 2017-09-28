import { CNCurrencyPipe } from '@shared/pipes/cn-currency.pipe';

describe('Pipe: _currency', () => {

    let instance: CNCurrencyPipe = null;
    const date = new Date(2017, 9, 17, 15, 35, 59);

    beforeEach(() => {
        // equar
        // { provide: LOCALE_ID, useValue: 'zh-Hans' }
        instance = new CNCurrencyPipe('zh-Hans');
    });

    it('should return zh-hans format currency', () => {
        expect(instance.transform(100)).toBe(`￥100.00`);
        expect(instance.transform(100.50)).toBe(`￥100.50`);
        expect(instance.transform(100.53)).toBe(`￥100.53`);
        expect(instance.transform(100.534)).toBe(`￥100.53`);
        expect(instance.transform(100.536)).toBe(`￥100.54`);
        expect(instance.transform(10000.536)).toBe(`￥10,000.54`);
        expect(instance.transform(1000000.536)).toBe(`￥1,000,000.54`);
    });

});
