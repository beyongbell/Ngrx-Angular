import { RouterReducerState } from '@ngrx/router-store';

import { IUserState, initialUserState } from '@states/user.state';
import { initialConfigState, IConfigState } from '@states/config.state';

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  config: IConfigState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  config: initialConfigState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
