import React, { FC, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { TodoList } from "../../components/todoList/TodoList";

let tareasPrevias = [
  { uuid: "123123421", label: "Tirar la basura", done: false },
  { uuid: "646456", label: "Fregar la loza", done: false },
  { uuid: "74879898", label: "Ir a recoger el pan a la panadería", done: false },
  { uuid: "099808", label: "Pagar alquiler", done: false }
];

export const Tasklist: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [taskList, setTaskList] = useState();

  useEffect(() => {}, []);

  return (
    <Container>
      <h1>
        Hola, soy la lista de que haceres{" "}
        <span role="img" aria-label="emoji">
          📌
        </span>{" "}
      </h1>
      <TodoList initialTasks={tareasPrevias} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
