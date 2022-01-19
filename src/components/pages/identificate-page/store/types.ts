import User from '../../../../domain/model/user/User';

export const SET_USER = 'app/user/SET_USER';

export interface UserState {
  user?: User,
}

export const INITIAL_STATE: UserState = {
  user: {name: "Hector", id: "0000"},
};

interface SetUserAction {
  type: typeof SET_USER,
  payload: {
    user?: User
  }
}

export type IdentificationPageActions = SetUserAction;
