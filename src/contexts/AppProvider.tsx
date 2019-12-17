import React from "react";
import { NotifyProvider } from "../components/circleOfNotifys/notifyProvider";
import { TaskListProvider } from "../components/todoList/TaskListContext";

export const AppProvider = ({ children }) => {
  return (
    <NotifyProvider>
      <TaskListProvider>{children}</TaskListProvider>
    </NotifyProvider>
  );
};
