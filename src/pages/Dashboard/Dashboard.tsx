import React, { FC } from "react";
import { ButtonNewNotify } from "../../components/circleOfNotifys/buttonNewNotify";


export const Dashboard: FC = () => {
  return (
    <div>
      <h1>Hola, soy el Dashboard <span role="img" aria-label="Sparkles">✨</span> </h1>
      <ButtonNewNotify />
    </div>
  );
};
