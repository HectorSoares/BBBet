import { CompetitionPageActions, INITIAL_STATE, SET_LISTUSER, ListUserState } from "./types";


export default function reducer(state: ListUserState = INITIAL_STATE, action: CompetitionPageActions): ListUserState {
  if (action.type === SET_LISTUSER) {
    return {
      ...state,
      users: action.payload.users,
    };
  }
  return state;
}
