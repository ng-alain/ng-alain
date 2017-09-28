import { ACLService } from './acl.service';
import { ACLType } from './acl.type';

describe('service: ACLService', () => {

    const ADMIN = 'admin';
    const USER = 'user';
    const ABILITY = 'order-cancel';

    let srv: ACLService = null;

    beforeEach(() => {
        srv = new ACLService();
        srv.set(<ACLType>{ role: [ADMIN] });
    });

    it(`#set()`, () => {
        expect(srv.can(ADMIN)).toBe(true);
        expect(srv.can(USER)).toBe(false);
    });

    it(`#setFull() set [true]`, () => {
        srv.setFull(true);
        expect(srv.can(ADMIN)).toBe(true);
        expect(srv.can(USER)).toBe(true);
    });

    it(`#setFull() set [false]`, () => {
        srv.setFull(false);
        expect(srv.can(ADMIN)).toBe(true);
        expect(srv.can(USER)).toBe(false);
    });

    it(`#setAbility() set [${ABILITY}]`, () => {
        srv.setAbility([ABILITY]);
        expect(srv.canAbility(ABILITY)).toBe(true);
        expect(srv.canAbility(ABILITY + `1`)).toBe(false);
    });

    it(`#setRole()`, () => {
        expect(srv.can(ADMIN)).toBe(true);
    });

    it(`#add()`, () => {
        srv.add({
            role: ['NEWROLE'],
            ability: ['NEWABILITY']
        });
        expect(srv.can(ADMIN)).toBe(true);
        expect(srv.can('NEWROLE')).toBe(true);
        expect(srv.canAbility('NEWABILITY')).toBe(true);
    });

    it(`#attachRole()`, () => {
        srv.attachRole(['NEWROLE']);
        expect(srv.can(ADMIN)).toBe(true);
        expect(srv.can('NEWROLE')).toBe(true);
    });

    it(`#attachAbility()`, () => {
        srv.attachAbility(['NEWABILITY']);
        expect(srv.can(ADMIN)).toBe(true);
        expect(srv.canAbility('NEWABILITY')).toBe(true);
    });

    it(`#removeRole()`, () => {
        expect(srv.can(ADMIN)).toBe(true);
        srv.removeRole([ADMIN]);
        expect(srv.can(ADMIN)).toBe(false);
    });

    it(`#removeAbility()`, () => {
        srv.attachAbility([ABILITY]);
        expect(srv.canAbility(ABILITY)).toBe(true);
        srv.removeAbility([ABILITY]);
        expect(srv.canAbility(ABILITY)).toBe(false);
    });

    it(`#can()`, () => {
        expect(srv.can(ADMIN)).toBe(true);
        expect(srv.can(ADMIN + '1')).toBe(false);
    });

    it(`#canAbility()`, () => {
        srv.attachAbility([ABILITY]);
        expect(srv.canAbility(ABILITY)).toBe(true);
        expect(srv.canAbility(ADMIN + '1')).toBe(false);
    });
});
