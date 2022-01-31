import User from '../../../../domain/model/User';

export const SET_LISTUSER = 'app/user/SET_LISTUSER';

export interface ListUserState {
  users?: User[],
}

export const INITIAL_STATE: ListUserState = {
  users: undefined,
};

interface SetListUserAction {
  type: typeof SET_LISTUSER,
  payload: {
    users?: User[]
  }
}

export type CompetitionPageActions = SetListUserAction;
