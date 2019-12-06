import React, { FC } from "react";
import CircleOfNotifys from "../../components/circleOfNotifys/circleOfNotifys";
import { NotifyProvider } from "../../components/circleOfNotifys/notifyProvider";

export const Calendar: FC = () => {
  return (
    <>
      <h1>Hola, soy el calendario  <span role="img" aria-label="emoji">📅</span> </h1>
      <CircleOfNotifys />
    </>
  )
};
