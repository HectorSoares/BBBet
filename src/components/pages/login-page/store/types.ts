import User from '../../../../domain/model/User';

export const SET_USER = 'app/user/SET_USER';
export const SET_ISLOGGED = 'app/user/SET_ISLOGGED';

export interface UserState {
  user?: User,
  isLogged?: boolean,
}

export const INITIAL_STATE: UserState = {
  user: undefined,
  isLogged: false,
};

interface SetUserAction {
  type: typeof SET_USER,
  payload: {
    user?: User
  }
}

interface SetIsLoggedAction {
  type: typeof SET_ISLOGGED,
  payload: {
    isLogged?: boolean
  }
}
export type LoginPageActions = SetUserAction | SetIsLoggedAction;
