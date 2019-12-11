import React from "react";
import { NotifyProvider } from "../components/circleOfNotifys/notifyProvider";

export const AppProvider = ({ children }) => {
  return <NotifyProvider>
    {children}
  </NotifyProvider>;
};
