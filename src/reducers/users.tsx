import { UserState } from "./index";
import { UserLogin } from "../actions/action-types";

const initialState: UserState = { name: "Ruben" };

const userLogin = (state = initialState, action: UserLogin) => {
  switch (action.type) {
    case "LOGIN_USER":
      state.name = action.payload;
    default:
      return state;
  }
};

export default userLogin;
