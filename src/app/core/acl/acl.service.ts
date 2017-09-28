import { Injectable } from '@angular/core';
import { ACLType } from './acl.type';

/**
 * 访问控制服务
 */
@Injectable()
export class ACLService {

    private roles: string[] = [];
    private abilities: (number | string)[] = [];
    private full = false;

    private parseACLType(val: string | string[] | ACLType): ACLType {
        if (typeof val !== 'string') {
            return <ACLType>val;
        }
        if (Array.isArray(val)) {
            return <ACLType>{ role: <string[]>val };
        }
        return <ACLType>{
            role: [val]
        };
    }

    /**
     * 设置当前用户角色或权限能力（会先清除所有）
     *
     * @param {ACLType} value
     */
    set(value: ACLType) {
        this.abilities = [];
        this.roles = [];
        this.add(value);
    }

    /**
     * 标识当前用户为全量，即不受限
     *
     * @param {boolean} val
     */
    setFull(val: boolean) {
        this.full = val;
    }

    /**
     * 设置当前用户权限能力（会先清除所有）
     *
     * @param {((number | string)[])} abilities
     */
    setAbility(abilities: (number | string)[]) {
        this.set(<ACLType>{ ability: abilities });
    }

    /**
     * 设置当前用户角色（会先清除所有）
     *
     * @param {string[]} roles
     */
    setRole(roles: string[]) {
        this.set(<ACLType>{ role: roles });
    }

    /**
     * 为当前用户增加角色或权限能力
     *
     * @param {ACLType} value
     */
    add(value: ACLType) {
        if (value.role && value.role.length > 0) {
            this.roles.push(...value.role);
        }
        if (value.ability && value.ability.length > 0) {
            this.abilities.push(...value.ability);
        }
    }

    /**
     * 为当前用户附加角色
     *
     * @param {string[]} roles
     */
    attachRole(roles: string[]) {
        for (const val of roles) {
            if (!this.roles.includes(val)) {
                this.roles.push(val);
            }
        }
    }

    /**
     * 为当前用户附加权限
     *
     * @param {((number | string)[])} abilities
     */
    attachAbility(abilities: (number | string)[]) {
        for (const val of abilities) {
            if (!this.abilities.includes(val)) {
                this.abilities.push(val);
            }
        }
    }

    /**
     * 为当前用户移除角色
     *
     * @param {string[]} roles
     */
    removeRole(roles: string[]) {
        for (const val of roles) {
            const idx = this.roles.indexOf(val);
            if (idx !== -1) {
                this.roles.splice(idx, 1);
            }
        }
    }

    /**
     * 为当前用户移除权限
     *
     * @param {((number | string)[])} abilities
     */
    removeAbility(abilities: (number | string)[]) {
        for (const val of abilities) {
            const idx = this.abilities.indexOf(val);
            if (idx !== -1) {
                this.abilities.splice(idx, 1);
            }
        }
    }

    /**
     * 当前用户是否有对应角色
     *
     * @param {(string | string[] | ACLType)} roleOrAbility
     */
    can(roleOrAbility: string | string[] | ACLType): boolean {
        if (this.full === true) {
            return true;
        }

        const t = this.parseACLType(roleOrAbility);
        if (t.role) {
            for (const _r of t.role) {
                if (this.roles.includes(_r)) {
                    return true;
                }
            }
        }
        if (t.ability) {
            for (const _p of t.ability) {
                if (this.abilities.includes(_p)) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * 当前用户是否有对应权限点
     *
     * @param {(number | string)} ability
     */
    canAbility(ability: number | string): boolean {
        return this.can(<ACLType>{
            ability: [ability],
            role: null
        });
    }
}
