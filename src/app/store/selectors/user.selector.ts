import { createSelector } from '@ngrx/store';

import { IAppState } from '@states/app.state';
import { IUserState } from '@states/user.state';

const selectUsers = (state: IAppState) => state.users;

export const selectUserList = createSelector(
  selectUsers, (state: IUserState) => state.users
);

export const selectSelectedUser = createSelector(
  selectUsers, (state: IUserState) => state.selectedUser
);
