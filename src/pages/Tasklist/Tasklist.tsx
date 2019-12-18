import React, { FC } from "react";
import styled from "@emotion/styled";
import { TodoList } from "../../components/todoList/TodoList";
import { Achievements } from "../../components/achievements/achievements";

export const Tasklist: FC = () => {
  return (
    <Container>
      <h1>
        Hola, soy la lista de que haceres{" "}
        <span role="img" aria-label="emoji">
          📌
        </span>{" "}
      </h1>
      <ContainerBody>
        <TodoList initialTasks={[]} url="http://randy.tools/api/tasksList" />
        <Achievements />
      </ContainerBody>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const ContainerBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-around;
`
