export const newNotify = (number: number) => ({ type: 'NEW_NOTIFY', number });
export const empyNotifys = (number: number) => ({ type: 'EMPY_NOTIFYS', number });

type ActionType =
  | NewNotify
  | EmpyNotifys

export default ActionType;

export interface Action {
  readonly type: string;
}

export interface NewNotify extends Action {
  alpha: number;
}

export interface EmpyNotifys extends Action {
  alpha: number;
}
