import { User } from "../types"

export const GET_USER_NAME = 'GET_USER_NAME'
export const DELETE_USER = 'DELETE_USER'

interface GetUserAction{
  type: typeof GET_USER_NAME,
  payload: User
}

interface DeleteUserAction{
  type: typeof DELETE_USER,
  payload: User
}
export type UserActionsTypes = GetUserAction | DeleteUserAction
