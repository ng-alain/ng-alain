export interface ACLType {
    /**
     * 角色
     *
     * @type {string[]}
     */
    role?: string[];
    /**
     * 权限点
     *
     * @type {(number[] | string[])}
     */
    ability?: number[] | string[];
}
