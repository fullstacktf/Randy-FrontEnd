import React, { FC } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
`;

export const Calendar: FC = () => {
  return (
    <Container>
      <h1>
        Hola, soy el calendario{" "}
        <span role="img" aria-label="emoji">
          📅
        </span>{" "}
      </h1>
      <img src="https://icalendario.net/media/imprimir/2019/mensual/diciembre/calendario-diciembre-2019.png" alt="calendario" width="50%" />
      {/* <CalendarMonth></CalendarMonth> */}
    </Container>
  );
};
