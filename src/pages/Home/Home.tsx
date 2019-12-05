import React, { FC } from "react";
import { ButtonSummit } from "../../components/buttonSumit/buttonSumit";

const handleRoutes = () => {
  console.log('Me voy pa otro sítio');
}

export const Home: FC = () => {
  return (
    <div>
      <h1>Hola, soy el Home <span role="img" aria-label="emoji">🏠</span> </h1>
      <ButtonSummit path="/dashboard" content="Loguearse" functionOnClick={handleRoutes}></ButtonSummit>
    </div>
  )
};
