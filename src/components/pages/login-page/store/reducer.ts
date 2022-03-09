import { LoginPageActions, INITIAL_STATE, SET_USER, SET_ISLOGGED, UserState } from "./types";


export default function reducer(state: UserState = INITIAL_STATE, action: LoginPageActions): UserState {
  if (action.type === SET_USER) {
    return {
      ...state,
      user: action.payload.user
    };
  }
  if (action.type === SET_ISLOGGED) {
    return {
      ...state,
      isLogged: action.payload.isLogged
    };
  }
  return state;
}
