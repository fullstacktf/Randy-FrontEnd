import React, { FC } from "react";
import { TodoList } from "../../components/todoList/TodoList";


export const Tasklist: FC = () => {
  return (
    <>
      <h1>Hola, soy la lista de que haceres <span role="img" aria-label="emoji">📌</span>  </h1>
      <TodoList initialTasks={[]} />
    </>
  )
};
