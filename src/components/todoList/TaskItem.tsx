import React, { FC } from "react";
import styled from "@emotion/styled";
import { Task } from "./TodoList";

interface TaskProps {
  task: Task;
  onCheckInput: (task: Task) => void;
}

export const TaskItem: FC<TaskProps> = ({ task, onCheckInput }) => {
  const handleOnSelect = () => {
    onCheckInput(task);
  };

  return (
    <Container>
      <Checkbox type="checkbox" onChange={handleOnSelect} checked={task.done} value={task.uuid} />
      {task.label}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: white;
  border-radius: 5px;
  margin: 3px 0px;
  padding: 7px 15px;
  &:hover {
    box-shadow: 0px 7px 10px 1px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }
`;

const Checkbox = styled.input``;
