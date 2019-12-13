import React, { FC } from "react";
import styled from "@emotion/styled";
import checkedsvg from "./nochecked.svg";
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
    <Container onClick={handleOnSelect}>
      <input type="checkbox" onChange={handleOnSelect} checked={task.done} value={task.uuid} />
      <label htmlFor="clearTask">
        <span></span>
        {task.label}
      </label>
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
  cursor: pointer;
  &:hover {
    box-shadow: 0px 7px 10px 1px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }

  & input[type="checkbox"] {
    display: none;
  }

  & input[type="checkbox"] + label span {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 15px;
    vertical-align: center;
    border: 2px solid gray;
    border-radius: 5px;
    cursor: pointer;
  }

  & input[type="checkbox"]:checked + label span {
    background: #47ab43;
    background-size: cover;
  }
`;
