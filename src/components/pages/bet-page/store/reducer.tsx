import { BetPageActions, BetPageState, INITIAL_STATE, SET_BETMANAGERWEEKS, SET_BROTHERS } from "./types";



export default function reducer(state: BetPageState = INITIAL_STATE, action: BetPageActions): BetPageState {
  if (action.type === SET_BROTHERS) {
    return {
      ...state,
      brothers: action.payload.brothers
    };
  }

  if (action.type === SET_BETMANAGERWEEKS) {
    return {
      ...state,
      weeks: action.payload.weeks
    };
  }
  return state;
}
