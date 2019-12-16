import { Task } from "./models";

export const toTaskModelList = (taskResponse): Task[] => {
  return taskResponse.map(rawTask => ({
    uuid: rawTask._id,
    label: rawTask.contain,
    done: rawTask.checked
  }));
};
