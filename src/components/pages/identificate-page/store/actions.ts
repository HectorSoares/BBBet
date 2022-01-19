import User from "../../../../domain/model/user/User";
import { AppThunk } from "../../../../store";
import { IdentificationPageActions, SET_USER } from "./types";

const internalSetUser = (user: User): IdentificationPageActions => ({
  type: SET_USER,
  payload: {
    user,
  },
});

export const setUser = (setLoadingUser: any, tenantId: string, institutionMecCode?: number, digitalSignature?: boolean): AppThunk => async (dispatch) => {
  let user: User = {name: "joao", id: "123"};
  // try {
  //   user = (await UserService.listUsers(tenantId, institutionMecCode, digitalSignature)).data;
  // } catch (e) {
  //   dispatch(showNotification(errorNotificationMessages.defaultError, notificationIcons.error));
  // }
  dispatch(internalSetUser(user));
  setLoadingUser(false);
};
