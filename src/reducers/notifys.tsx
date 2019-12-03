import { NotifyState } from "./index";
import { ActionTypes } from "../actions/action-types";

const initialState: NotifyState = { value: 0 };

const notifyCounter = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case "NEW_NOTIFY":
      state.value = action.payload;
    default:
      return state;
  }
};

export default notifyCounter;
