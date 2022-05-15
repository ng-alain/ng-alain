import { Injectable } from '@angular/core';
import { STColumn, STPage } from '@delon/abc/st';

@Injectable()
export abstract class AbstractPaginationComponent {
  loading = false;
  total = 0;
  pageIndex = 1;
  pageSize = 10;

  scroll = { y: '800px' };
  columns: STColumn[] = [];
  stPage: STPage = {
    front: false,
    zeroIndexed: true,
    showSize: true,
  };

  stSortCache: any; // use to store existing sorting, when st paging will not get sorting attribute from st component
  stIgnoreAction = ['loaded', 'click','dblClick'];

  abstract formCriteria(): any;

  protected criteria(
    $criteria: any = { pageIndex: 1, pageSize: 10, sort: [] },
    defaultOrderSequence?: { orderBy: string; orderSequence: number },
  ) {
    const { pageIndex = 1, pageSize = 10, sort = [] } = $criteria;
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
    const sortObj = sort.find((i: { key: string; value: string }) => i.value != null);
    const orderBy = sortObj ? sortObj?.key : undefined;
    const orderSequence = sortObj ? (sortObj?.value == 'ascend' ? 1 : -1) : undefined;

    return {
      ...this.formCriteria(),
      limit: this.pageSize,
      page: this.pageIndex,
      orderBy: orderBy || defaultOrderSequence?.orderBy,
      orderSequence: orderSequence || defaultOrderSequence?.orderSequence,
    };
  }

  protected stCriteria($criteria: any = { pi: 1, ps: 10, sort: {}, type: '' }, defaultOrderSequence?: { orderBy: string; orderSequence: number }) {
    const { pi = 1, ps = 10, type } = $criteria;
    let sort;
    if (type == 'sort') {
      sort = $criteria.sort;
      this.stSortCache = sort;
    } else {
      sort = $criteria.sort || this.stSortCache;
    }
    this.pageIndex = pi;
    this.pageSize = ps;
    const orderSequence = sort && sort.value ? (sort?.value == 'ascend' ? 1 : -1) : undefined;
    const orderBy = orderSequence ? sort?.column?.indexKey : undefined;
    return {
      ...this.formCriteria(),
      limit: this.pageSize,
      page: this.pageIndex,
      orderBy: orderBy || defaultOrderSequence?.orderBy,
      orderSequence: orderSequence || defaultOrderSequence?.orderSequence,
    };
  }
}
