import { ACLService } from './../acl/acl.service';
import { Injectable } from '@angular/core';
import { ACLType } from "../acl/acl.type";

export interface Menu {
    /** 文本 */
    text: string;
    /** i18n主键 */
    translate?: string;
    /** 是否菜单组 */
    group?: boolean;
    /** angular 链接 */
    link?: string;
    /** 外部链接 */
    externalLink?: string;
    /** 链接 target */
    target?: '_blank' | '_self' | '_parent' | '_top';
    /** 图标 */
    icon?: string;
    /** 徽标数 */
    badge?: string;
    /** 是否选中 */
    selected?: boolean;
    /** 是否隐藏 */
    hide: boolean;
    /** ACL配置 */
    acl?: string | string[] | ACLType;
    /** 二级菜单 */
    children?: Menu[];
}

@Injectable()
export class MenuService {

    private data: Menu[] = [];

    constructor(private aclService: ACLService) { }

    add(items: Menu[]) {
        this.data.push(...items);
        this.resume();
    }

    /**
     * 若用户权限变动时需要调用刷新
     */
    resume() {
        const inFn = (list: Menu[]) => {
            for(let item of list) {
                item.hide = item.acl && !this.aclService.can(item.acl);
                if (item.children && item.children.length > 0)
                    inFn(item.children);
            }
        };

        inFn(this.data);
        console.log(this.data);
    }

    get menus() {
        return this.data;
    }

    setSelected(url: string) {
        if (!url) return;
        let pages = this.data
            .map(g => g.children || [])
            .reduce((acc, val) => [...acc, ...val], [])
            .map(item => {
                item.selected = false;
                return item;
            })
            .filter(f => f.link && url.startsWith(f.link))
            .map(m => {
                m.selected = true;
                return m.children || [];
            })
            .reduce((acc, val) => [...acc, ...val], [])
            .filter(f => f.link && url.endsWith(f.link));
        if (pages.length === 0) {
            console.warn(`not found page name: ${url}`)
            return;
        }
        pages[0].selected = true;
    }

}
