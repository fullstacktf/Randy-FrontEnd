import React, { useReducer } from "react";

// const [tasks, setTasks] = useState();
// const [taskList, setTaskList] = useState();

function getTasks() {
  // return Tasks.getAll()
  //   .then(tasks => setTaskList(tasks))
  //   .catch(err => console.log("HE PETAO", err));
}

const initialState = getTasks();

export const NEW_TASK = "NEW_TASK";
export const TASK_DONE = "TASK_DONE";

export const taskListReducer = (state, action) => {
  switch (action.type) {
    case NEW_TASK:
      return handleNewTask(state);
    case TASK_DONE:
      return handleTaskDone(state);
    default:
      return state;
  }
};

const handleNewTask = state => {
  return { task: "Ahora valgo uno más" };
};

const handleTaskDone = state => {
  return { task: "Acabo de cumplirme" };
};

export const TasksListContext = React.createContext();

export const TaskListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskListReducer, initialState);
  return <TasksListContext.Provider value={[state, dispatch]}>{children}</TasksListContext.Provider>;
};
