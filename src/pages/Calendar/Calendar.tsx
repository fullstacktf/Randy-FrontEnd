import React, { FC } from "react";
import { CalendarMonth } from "../../components/calendar/month/calendarMonth";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
      <CalendarMonth></CalendarMonth>
    </Container>
  );
};
