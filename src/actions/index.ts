import { IncrementNotify, UserLogin } from "./action-types";
const INCREMENT: Partial<IncrementNotify> = { type: "INCREMENT_NOTIFY" };
const LOGIN_USER: Partial<UserLogin> = { type: "LOGIN_USER" };

export function incrementNotify(payload) {
  return { type: INCREMENT.type, payload };
}

export function setUser(payload) {
  return { type: LOGIN_USER.type, payload };
}
