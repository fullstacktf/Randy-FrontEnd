import React, { FC } from "react";
//import styled from "@emotion/styled";
import CircleOfNotifys from "../../components/circleOfNotifys/circleOfNotifys";


export const Dashboard: FC = () => {
  return (
    <div>
      <h1>Hola, soy el Dashboard <span role="img" aria-label="Sparkles">✨</span> </h1>
      <CircleOfNotifys />
    </div>

  );
};
