import { IncrementNotify } from "./action-types";
const INCREMENT: Partial<IncrementNotify> = { type: "INCREMENT_NOTIFY" };

export function incrementNotify(payload) {
  return { type: INCREMENT.type, payload };
}
