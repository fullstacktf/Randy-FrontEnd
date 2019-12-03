import {userReducer} from './reducers/userReducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  userReducer
})

export type RootState = ReturnType<typeof rootReducer>
