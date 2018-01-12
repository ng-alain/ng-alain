import { ArticleType } from '../article/article-type';
import { Article } from '../article/article';
import { CommonResult } from '../common/common-result';
import { CommonPage } from '../common/common-page';

export class ArticleListPageModel extends CommonResult {
    entity : ArticleListPageT;
}

class ArticleListPageT {
    page : CommonPage;
    articleTypeList : ArticleType[];
    articleList : Article[];
}