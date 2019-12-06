import React, { FC, useState, useContext } from 'react';
import { TaskItem } from "./TaskItem";
import { NotifyContext, NEW_NOTIFY } from '../circleOfNotifys/notifyProvider';

export interface Task {
  uuid: string;
  label: string;
  done: boolean;
}

interface TodoListProps {
  initialTasks: Task[];
}

export const TodoList: FC<TodoListProps> = ({ initialTasks = [] }) => {
  const [state, dispatch] = useContext(NotifyContext);

  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleOnCheckInput = (taskToUpdate: Task) => {
    const newTasks = tasks.map(task => {
      if (task.uuid === taskToUpdate.uuid) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const addNewTask = () => {
    const newTasks = [...tasks];
    newTasks.push({ uuid: '' + Math.random(), label: `Todo-${Math.random()}`, done: false })
    setTasks(newTasks);
    dispatch({ type: NEW_NOTIFY });

  };

  return <div>
    <h1>Todo list</h1>
    <button onClick={addNewTask}>add</button>
    {tasks.map(task => <TaskItem key={task.uuid}
      onCheckInput={handleOnCheckInput}
      task={task} />)}
  </div>
};
