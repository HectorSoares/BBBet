import User from "../../../../domain/model/User";
import UserService from "../../../../services/UserService";
import { AppThunk } from "../../../../store";
import { LoginPageActions, SET_ISLOGGED, SET_USER } from "./types";

const internalSetUser = (user?: User): LoginPageActions => ({
  type: SET_USER,
  payload: {
    user,
  },
});

export const setUser = (id?: string): AppThunk => async (dispatch) => {
  let user;

  try {
    user = (await UserService.getUser(id)).data.body;
  } catch (e) {
    console.log('erro so buscar usuario');
    //dispatch(showNotification(errorNotificationMessages.defaultError, notificationIcons.error));
  }
  dispatch(internalSetUser(user));
};


const internalSetLogged = (logged?: boolean): LoginPageActions => ({
  type: SET_ISLOGGED,
  payload: {
    isLogged: logged,
  },
});

export const setIsLogged = (logged?: boolean): AppThunk => async (dispatch) => {

  dispatch(internalSetLogged(logged));
};
