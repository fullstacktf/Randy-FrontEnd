import React, { FC } from "react";
import styled from "@emotion/styled";
import { BillsCards } from "../../components/bills/BillsCards";


export const Bill: FC = () => {
  return (
    <Container>
      <h1>Hola, soy la faturasión  <span role="img" aria-label="emoji">💸</span> </h1>
      <BillsCards />
    </Container>
  )
};

const Container = styled.div`
display:flex;
flex-direction:column;
`
