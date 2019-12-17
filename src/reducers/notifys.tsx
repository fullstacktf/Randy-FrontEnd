import ActionTypes from "../actions";
import { NotifyState } from "./index";

const NEW_NOTIFY = "NEW_NOTIFY";
const RESET_NOTIFYS = "RESET_NOTIFYS";

const initialState: NotifyState = { value: 0 };

const notifyCounter = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case NEW_NOTIFY:
      return { ...state, value: state.value + 1 };
    case RESET_NOTIFYS:
      return { ...state, value: 0 };
    default:
      return state;
  }
};

export default notifyCounter;
