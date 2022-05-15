import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { LoadNotification, LoginSuccess, Logout, UpdateServerTime } from './global.action';

export interface GlobalStateModel {
  timeDifferent: number;
  user: any;
  notificationCount: number;
  notificationDetails: any[];
}

const stateDefaults: GlobalStateModel = {
  timeDifferent: 0,
  user: null,
  notificationCount: 0,
  notificationDetails: []
};

@State<GlobalStateModel>({
  name: 'global',
  defaults: stateDefaults
})
@Injectable()
export class GlobalState {
  @Selector()
  // tslint:disable-next-line: typedef
  static getUser(state: GlobalStateModel) {
    return state.user;
  }

  @Selector()
  // tslint:disable-next-line: typedef
  static getTimeDifferent(state: GlobalStateModel) {
    return state.timeDifferent;
  }

  @Selector()
  // tslint:disable-next-line: typedef
  static getNotificationCount(state: GlobalStateModel) {
    return state.notificationCount;
  }

  @Selector()
  // tslint:disable-next-line: typedef
  static getNotificationDetails(state: GlobalStateModel) {
    return state.notificationDetails;
  }

  @Action(UpdateServerTime)
  // tslint:disable-next-line: typedef
  updateServerTime({ patchState }: StateContext<GlobalStateModel>, action: UpdateServerTime) {
    patchState({
      timeDifferent: action.timeDifferent
    });
  }

  @Action(LoginSuccess)
  // tslint:disable-next-line: typedef
  loginSuccess({ patchState }: StateContext<GlobalStateModel>, action: LoginSuccess) {
    patchState({
      user: action.userData
    });
  }

  @Action(Logout)
  // tslint:disable-next-line: typedef
  logout({ patchState }: StateContext<GlobalStateModel>, action: Logout) {
    patchState({
      user: null,
      notificationCount: 0,
      notificationDetails: []
    });
  }

  @Action(LoadNotification)
  // tslint:disable-next-line: typedef
  loadNotification({ patchState }: StateContext<GlobalStateModel>, action: LoadNotification) {
    patchState({
      notificationCount: action.count,
      notificationDetails: action.notificationDetails
    });
  }
}
