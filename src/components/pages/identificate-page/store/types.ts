import User from '../../../../domain/model/User';

export const SET_USER = 'app/user/SET_USER';

export interface UserState {
  user?: User,
}

export const INITIAL_STATE: UserState = {
  user: undefined,
};

interface SetUserAction {
  type: typeof SET_USER,
  payload: {
    user?: User
  }
}

export type IdentificationPageActions = SetUserAction;
