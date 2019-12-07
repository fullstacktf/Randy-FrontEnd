import React, { FC, useState } from "react";
import styled from '@emotion/styled';
import { TaskItem } from "./TaskItem";



export interface Task {
  uuid: string;
  label: string;
  done: boolean;
}


interface TaskListProps {
  initialTasks: Task[];
}

export const TaskList: FC<TaskListProps> = ({ initialTasks = [] }) => {

  const [tasks, setTask] = useState<Task[]>(initialTasks);

  const handleOnCheckInput = () => {
    console.log('Manejo el check');

  }

  return (
    <>
      <h1>Lista de tareas</h1>
      {/* {tasks.map(task =>
        <TaskItem key={task.uuid}
          onCheckInput={handleOnCheckInput}
          task={task}
        />)} */}
    </>
  );
};
