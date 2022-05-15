import { map } from 'rxjs/operators';

const responseHandler = (successCallback?: any) =>
  map((res: { statusCode: number; data?: any; message: string; total?: number }) => {
    if (res.statusCode !== 200) {
      return {
        message: res.message
      };
    }
    if (successCallback) {
      successCallback();
    }
    if (res.total) {
      return {
        total: res.total,
        data: res.data
      };
    }
    return res.data;
  });

export default responseHandler;
