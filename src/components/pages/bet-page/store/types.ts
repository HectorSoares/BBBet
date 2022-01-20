import Brother from '../../../../domain/model/Brother';

export const SET_BROTHERS = 'app/brother/SET_BROTHERS';

export interface BrothersState {
  brothers?: Brother[],
}

export const INITIAL_STATE: BrothersState = {
  brothers: undefined,
};

interface SetBrotherAction {
  type: typeof SET_BROTHERS,
  payload: {
    brothers?: Brother[]
  }
}

export type BetPageActions = SetBrotherAction;
