import React, { FC, useState, useContext } from "react";
import styled from "@emotion/styled";
import { TaskItem } from "./TaskItem";
import { NotifyContext, NEW_NOTIFY } from "../circleOfNotifys/notifyProvider";

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
    newTasks.push({ uuid: "" + Math.random(), label: `Todo-${Math.random()}`, done: false });
    setTasks(newTasks);
    dispatch({ type: NEW_NOTIFY });
  };

  return (
    <Container>
      <Button onClick={addNewTask}>+ Agregar nueva tarea</Button>
      {tasks.map(task => (
        <TaskItem key={task.uuid} onCheckInput={handleOnCheckInput} task={task} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-bottom: 20px;
  font-size: 1em;
  height: 40px;
  margin-right: 50px;
  background: #47ab43;
  color: white;
  border-radius: 10px;
  border: 1px solid #47ab43;
  outline: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
