import User from "../../../../domain/model/User";
import UserService from "../../../../services/UserService";
import { AppThunk } from "../../../../store";
import { CompetitionPageActions, SET_LISTUSER } from "./types";

const internalSetListUser = (users?: User[]): CompetitionPageActions => ({
  type: SET_LISTUSER,
  payload: {
    users,
  },
});

export const setListUser = (): AppThunk => async (dispatch) => {
  let users;

  try {
    users = (await UserService.listUser()).data.body.Items;
  } catch (e) {
    console.log('erro ao listar usuario');
    //dispatch(showNotification(errorNotificationMessages.defaultError, notificationIcons.error));
  }
  dispatch(internalSetListUser(users));
};
