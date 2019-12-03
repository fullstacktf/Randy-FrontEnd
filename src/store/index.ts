import * as Redux from "redux";
import rootReducer, { AppState } from "../reducers";

const store: Redux.Store<AppState> = Redux.createStore(rootReducer);
export default store;
