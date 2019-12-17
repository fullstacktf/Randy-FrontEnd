import React, { FC } from "react";
import styled from "@emotion/styled";
import { TodoList } from "../../components/todoList/TodoList";

export const Tasklist: FC = () => {
  return (
    <Container>
      <h1>
        Hola, soy la lista de que haceres{" "}
        <span role="img" aria-label="emoji">
          📌
        </span>{" "}
      </h1>
      <TodoList initialTasks={[]} url="http://randy.tools/api/tasksList" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
