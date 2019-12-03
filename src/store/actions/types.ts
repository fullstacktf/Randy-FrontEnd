import { User } from "../types"

export const SET_USER_NAME = 'SET_USER_NAME'
export const DELETE_USER = 'DELETE_USER'

interface GetUserAction{
  type: typeof SET_USER_NAME,
  payload: User
}

interface DeleteUserAction{
  type: typeof DELETE_USER,
  payload: User
}
export type UserActionsTypes = GetUserAction | DeleteUserAction
