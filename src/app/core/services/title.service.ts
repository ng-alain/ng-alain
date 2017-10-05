import { Injectable, Inject } from '@angular/core';
import { Title, DOCUMENT } from '@angular/platform-browser';

/**
 * 设置标题（用法见 AppComponent）
 * 标题获取的优先级为：route（支持i18n） > html
 *  + 路由：配置标准的方法见 `./routes/routes.ts` 路由配置节点中 `data` 属性，允许设置：`translate` 或 `title` 两个参数，前者 i18n.
 *  + html：若不指定则从 `content__title` 中获取 `h1` 内容
 */
@Injectable()
export class TitleService {
    constructor(private title: Title, @Inject(DOCUMENT) private doc: Document) { }

    private _prefix = '';
    private _suffix = '';
    private _separator = ' - ';
    private _reverse = false;

    /** 设置分隔符 */
    set separator(value: string) {
        this._separator = value;
    }

    /** 设置前缀 */
    set prefix(value: string) {
        this._prefix = value;
    }

    /** 设置后缀 */
    set suffix(value: string) {
        this._suffix = value;
    }
    
    /** 设置是否反转 */
    set reverse(value: boolean) {
        this._reverse = value;
    }

    private getByElement(): string {
        const el = this.doc.querySelector('.content__title h1');
        if (el) {
            return el.firstChild.textContent.trim();
        }
        return '';
    }

    /**
     * 设置标题
     * 若不指定则从 `content__title` 中获取 `h1` 内容
     */
    setTitle(title?: string | string[]) {
        if (!title) {
            title = this.getByElement();
        }
        if (title && !Array.isArray(title)) {
            title = [ title ];
        }

        let newTitles = [];
        if (this._prefix) {
            newTitles.push(this._prefix);
        }
        if (title && title.length > 0) {
            newTitles.push(...(title as string[]));
        }
        if (this._suffix) {
            newTitles.push(this._suffix);
        }
        if (this._reverse) {
            newTitles = newTitles.reverse();
        }
        this.title.setTitle(newTitles.join(this._separator));
    }
}
