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
    hide?: boolean;
    /** ACL配置 */
    acl?: string | string[] | ACLType;
    /** 二级菜单 */
    children?: Menu[];

    [key: string]: any;
}

@Injectable()
export class MenuService {

    private data: Menu[] = [];

    constructor(private aclService: ACLService) { }

    private visit(callback: (item: Menu, parentMenum: Menu) => void) {
        const inFn = (list: Menu[], parentMenum: Menu) => {
            for (let item of list) {
                if (callback) callback(item, parentMenum);
                if (item.children && item.children.length > 0)
                    inFn(item.children, item);
            }
        };

        inFn(this.data, null);
    }

    add(items: Menu[]) {
        this.data.push(...items);
        this.resume();
    }

    /**
     * 若用户权限变动时需要调用刷新
     */
    resume() {
        this.visit((item, parent) => {
            item.__parent = parent;
            item.hide = item.acl && !this.aclService.can(item.acl);
        });
    }

    get menus() {
        return this.data;
    }

    setSelected(url: string) {
        if (!url) return;

        let findItem: Menu = null;
        this.visit(item => {
            item.selected = false;
            if (!item.link) return;
            if (!findItem && item.link.includes(url))
                findItem = item;
        });
        if (!findItem) {
            console.warn(`not found page name: ${url}`)
            return;
        }

        do {
            findItem.selected = true;
            findItem = findItem.__parent;
        } while (findItem);
    }
}
