import { AxiosResponse } from "axios";
import Brother from "../../../../domain/model/Brother";
import BrothersService from "../../../../services/BrothersService";
import { AppThunk } from "../../../../store";
import { BetPageActions, SET_BROTHERS } from "../../bet-page/store/types";

const internalSetBrothers = (brothers?: Brother[]): BetPageActions => ({
  type: SET_BROTHERS,
  payload: {
    brothers,
  },
});

export const setBrothers = (): AppThunk => async (dispatch) => {
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
