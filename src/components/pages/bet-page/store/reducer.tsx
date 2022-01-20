import { BetPageActions, BrothersState, INITIAL_STATE, SET_BROTHERS } from "./types";



export default function reducer(state: BrothersState = INITIAL_STATE, action: BetPageActions): BrothersState {
  if (action.type === SET_BROTHERS) {
    return {
      ...state,
      brothers: action.payload.brothers,
    };
  }
  return state;
}
