interface Action {
  readonly type: string;
}

export interface IncrementNotify extends Action {
  type: string;
  payload: ReturnType<() => number>;
}

interface EmptyNotify extends Action {
  type: string;
  payload: ReturnType<() => number>;
}
export type ActionTypes = IncrementNotify | EmptyNotify;
