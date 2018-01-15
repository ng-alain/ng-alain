import { CommonResult } from '../common/common-result';
import { CommonPage } from '../common/common-page';
import { Topic } from '../topic/topic';

export class TopicListPageModel extends CommonResult {
    entity : TopicListPageT;
}

class TopicListPageT {
    page : CommonPage;
    topics : Topic[];
}