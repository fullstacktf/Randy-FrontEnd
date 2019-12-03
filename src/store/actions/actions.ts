import { GET_USER_NAME, UserActionsTypes} from "./types"
import { User } from "../types"

export function getUserAction(currentUser: User): UserActionsTypes{
  return {
    type: GET_USER_NAME,
    payload: currentUser
  }
}
