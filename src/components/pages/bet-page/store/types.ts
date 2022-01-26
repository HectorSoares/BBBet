import Brother from '../../../../domain/model/Brother';
import Week from '../../../../domain/model/manager/Week';

export const SET_BROTHERS = 'app/brother/SET_BROTHERS';
export const SET_BETMANAGERWEEKS = 'app/brother/SET_BETMANAGERWEEKS';

export interface BetPageState {
  weeks?: Week[],
  brothers?: Brother[]
}

export const INITIAL_STATE: BetPageState = {
  brothers: undefined,
  weeks: undefined,
};

interface SetBrotherAction {
  type: typeof SET_BROTHERS,
  payload: {
    brothers?: Brother[]
  }
}
interface SetWeekAction {
  type: typeof SET_BETMANAGERWEEKS,
  payload: {
    weeks?: Week[]
  }
}

export type BetPageActions = (SetBrotherAction | SetWeekAction);
