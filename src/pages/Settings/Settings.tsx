import React, { FC } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  height:80vh;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`

const Footer = styled.p`
  display:flex;
  align-self:center;
`

export const Settings: FC = () => {
  return (
    <Container>
      <h1>Hola, soy los ajustes <span role="img" aria-label="emoji">🔧</span> </h1>
      <Footer>Hecho con amor 💚 por <a href="https://github.com/RubenZagon">Rubén Zamora</a></Footer>
    </Container>
  )
};
