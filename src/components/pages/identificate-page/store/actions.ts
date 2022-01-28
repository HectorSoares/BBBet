import User from "../../../../domain/model/User";
import UserService from "../../../../services/UserService";
import { AppThunk } from "../../../../store";
import { IdentificationPageActions, SET_USER } from "./types";

const internalSetUser = (user?: User): IdentificationPageActions => ({
  type: SET_USER,
  payload: {
    user,
  },
});

export const setUser = (id?: string): AppThunk => async (dispatch) => {
  var user;
  
  try {
    user = (await UserService.getUser(id)).data.body;
  } catch (e) {
    console.log('erro so buscar usuario');
    //dispatch(showNotification(errorNotificationMessages.defaultError, notificationIcons.error));
  }
  dispatch(internalSetUser(user));
};
