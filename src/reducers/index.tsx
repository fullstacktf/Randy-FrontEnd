import { combineReducers } from "redux";
import notifyCounter from "./notifys";
import userLogin from "./users";

export interface NotifyState {
  value: number;
}
export interface UserState {
  name: string;
}
export interface AppState {
  notifys: NotifyState;
  user: UserState;
}

export default combineReducers({
  notifyCounter,
  userLogin
});
