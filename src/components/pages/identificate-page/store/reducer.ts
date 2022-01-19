import { IdentificationPageActions, INITIAL_STATE, SET_USER, UserState } from "./types";


export default function reducer(state: UserState = INITIAL_STATE, action: IdentificationPageActions): UserState {
  if (action.type === SET_USER) {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  return state;
}
