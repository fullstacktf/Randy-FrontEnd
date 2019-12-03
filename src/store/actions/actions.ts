import { SET_USER_NAME, UserActionsTypes} from "./types"
import { User } from "../types"

export function getUserAction(currentUser: User): UserActionsTypes{
  return {
    type: SET_USER_NAME,
    payload: currentUser
  }
}
