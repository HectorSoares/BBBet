import { AxiosResponse } from "axios";
import Brother from "../../../../domain/model/Brother";
import Week from "../../../../domain/model/manager/Week";
import BetManagerService from "../../../../services/BetManagerService";
import BrothersService from "../../../../services/BrothersService";
import { AppThunk } from "../../../../store";
import { BetPageActions, SET_BROTHERS, SET_BETMANAGERWEEKS } from "../../bet-page/store/types";

const internalSetBrothers = (brothers?: Brother[]): BetPageActions => ({
  type: SET_BROTHERS,
  payload: {
    brothers,
  },
});

export const setBrothers = async (): Promise<AppThunk> => async (dispatch) => {
  var brothers: Brother[] = [];
  try {
    var response: AxiosResponse = (await BrothersService.listBrothers());
    brothers = response.data.body.Items;

  } catch (e) {
    //dispatch(showNotification(errorNotificationMessages.defaultError, notificationIcons.error));
    console.log('erro ao listar brothers');
  }
  dispatch(internalSetBrothers(brothers));
};

const internalSetListBetManager = (weeks?: Week[]): BetPageActions => ({
  type: SET_BETMANAGERWEEKS,
  payload: {
    weeks,
  },
});

export const setListBetManager = async (): Promise<AppThunk> => async (dispatch) => {
  var weeks: Week[] = [];
  try {
    var response: AxiosResponse = (await BetManagerService.listBetManager());
    weeks = response.data.body.Items;

  } catch (e) {
    //dispatch(showNotification(errorNotificationMessages.defaultError, notificationIcons.error));
    console.log('erro ao listar weeks');
  }
  dispatch(internalSetListBetManager(weeks));
};
