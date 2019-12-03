import { UserState } from "../types";
import { SET_USER_NAME, UserActionsTypes} from "../actions/types"


const initialState: UserState = { user: {
  name : 'Ruben'
} };

export function userReducer(state = initialState, action: UserActionsTypes): UserState{
    switch (action.type) {
      case SET_USER_NAME:
        return {
          user: { name: action.payload.name}
        }
      default:
        return state;
    }

};

export default userReducer;
