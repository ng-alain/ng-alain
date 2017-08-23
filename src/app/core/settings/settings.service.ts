import { Injectable } from '@angular/core';
import { LocalStorageService } from "angular-web-storage";
import { ThemeType } from "../themes/themes.service";

const KEY: string = 'layout';

export interface User {
    name: string;
    avatar: string;
    email: string;
    [key: string]: any;
}

export interface App {
    name: string,
    description: string,
    year: number;
    [key: string]: any;
}

export interface Layout {
    /** 是否固定顶部菜单 */
    fixed: boolean;
    /** 是否折叠右边菜单 */
    collapsed: boolean;
    /** 是否固定宽度 */
    boxed: boolean;
    /** 当前主题 */
    theme: ThemeType;
    /** 语言环境 */
    lang: string;
}

@Injectable()
export class SettingsService {
    app: App = {
        name: 'Alain',
        description: 'Ng-zorro admin panel front-end framework',
        year: (new Date()).getFullYear()
    };

    user: User = {
        name: 'Admin',
        avatar: './assets/img/zorro.svg',
        email: 'cipchk@qq.com'
    };

    private _layout: Layout = null;

    get layout(): Layout {
        if (!this._layout) {
            this._layout = Object.assign(<Layout>{
                fixed: true,
                collapsed: false,
                boxed: false,
                theme: 'A',
                lang: null
            }, this.local.get(KEY));
            this.local.set(KEY, this._layout);
        }
        return this._layout;
    }

    setLayout(name: string, value: any): boolean {
        if (typeof this.layout[name] !== 'undefined') {
            this.layout[name] = value;
            this.local.set(KEY, this._layout);
            return true;
        }
        return false;
    }

    constructor(private local: LocalStorageService) { }
}
