import { BASE_URL, toJson } from "../base";
import { Task } from "./models";
import { toTaskModelList } from "./parsers";

export const Tasks = {
  getAll: (): Promise<Task[]> => fetch(`${BASE_URL}tasksList`).then(toJson).then(toTaskModelList)
};
