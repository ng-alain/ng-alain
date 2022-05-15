export class UpdateServerTime {
  static readonly type: string = '[Global] Update Server Time';
  constructor(public timeDifferent: number) {}
}

export class LoginSuccess {
  static readonly type: string = '[Global] Login Success';
  constructor(public userData: any) {}
}

export class Logout {
  static readonly type: string = '[Global] Logout';
}

export class LoadNotification {
  static readonly type: string = '[Global] Load Notification';
  constructor(public count: number, public notificationDetails: any[]) {}
}
