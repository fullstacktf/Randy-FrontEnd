import { combineReducers } from "redux";
import notifyCounter from "./notifys";

export interface NotifyState {
  value: number;
}

export interface AppState {
  notifys: NotifyState;
}

export default combineReducers({
  notifyCounter
});
