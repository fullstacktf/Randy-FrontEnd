import { UserState } from "../types";
import { GET_USER_NAME, UserActionsTypes} from "../actions/types"


const initialState: UserState = { user: {
  name : 'Ruben'
} };

export function userReducer(state = initialState, action: UserActionsTypes): UserState{
    switch (action.type) {
      case GET_USER_NAME:
        return {
          user: { name: state.user.name}
        }
      default:
        return state;
    }

};

export default userReducer;
