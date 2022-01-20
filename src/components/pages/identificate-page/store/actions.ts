import User from "../../../../domain/model/User";
import { AppThunk } from "../../../../store";
import { IdentificationPageActions, SET_USER } from "./types";

const internalSetUser = (user?: User): IdentificationPageActions => ({
  type: SET_USER,
  payload: {
    user,
  },
});

export const setUser = (user?: User): AppThunk => async (dispatch) => {
  
  // try {
  //   user = (await UserService.listUsers(tenantId, institutionMecCode, digitalSignature)).data;
  // } catch (e) {
  //   dispatch(showNotification(errorNotificationMessages.defaultError, notificationIcons.error));
  // }
  dispatch(internalSetUser(user));
};
