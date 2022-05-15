export class DateConstant {
  public static readonly DATE_FORMAT = 'dd MMM yyyy';
  public static readonly DATE_FORMAT_WITH_DASH = 'dd-MMM-yyyy';
  public static readonly SIMPLE_DATE_FORMAT_WITH_DASH = 'dd-MM-yyyy';
  public static readonly SIMPLE_DATE_FORMAT_WITH_SLASH = 'dd/MM/yyyy';
  public static readonly DATE_FORMAT_WITHOUT_DAY = 'MMMM yyyy';
  public static readonly FULL_DATE_TIME_DAY_FORMAT = 'hh:mm a on EEEE dd MMMM yyyy';
  public static readonly FULL_DATE_TIME_DAY_FORMAT2 = 'EEEE, dd MMM yyyy hh:mm a';
  public static readonly CURRENT_DAY = 'EEEE';
  public static readonly CURRENT_DATE_TIME_FORMAT = 'dd MMM yyyy hh:mm:ss a';
  public static readonly DATE_TIME_FORMAT_WITHOUT_SECOND = 'dd/MM/yyyy h:mm a';
  public static readonly DEFAULT_TIME_ZONE = 'GMT+8';

  public static readonly DEFAULT_DATE_FORMAT = DateConstant.SIMPLE_DATE_FORMAT_WITH_SLASH;
  public static readonly BACKEND_INPUT_DATE_FORMAT = 'yyyy-MM-dd';

  public static readonly NOW: Date = new Date();
  public static readonly LAST_DAY_OF_LAST_MONTH = new Date(DateConstant.NOW.getFullYear(), DateConstant.NOW.getMonth(), 0);

  public static getTwoWeeksLater(fromDate: string | number | Date): Date {
    const from = new Date(fromDate);
    return new Date(from.getFullYear(), from.getMonth(), from.getDate() + 13, 23, 59, 59, 999);
  }

  public static getADayLater(fromDate: string | number | Date): Date {
    const from = new Date(fromDate);
    return new Date(from.getFullYear(), from.getMonth(), from.getDate() + 1, 23, 59, 59, 999);
  }
}
