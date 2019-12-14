import React, { FC } from "react";
import styled from "@emotion/styled";

export const Settings: FC = () => {
  return (
    <Container>
      <h1>
        Hola, soy los ajustes{" "}
        <span role="img" aria-label="emoji">
          🔧
        </span>{" "}
      </h1>
      <Footer>
        <a href="https://github.com/RubenZagon"> Hecho con amor 💚 por Rubén Zamora</a>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Footer = styled.p`
  display: flex;
  align-self: center;
  background: orange;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    box-shadow: 0px 7px 10px 1px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }
  & a:link {
    color: black;
    text-decoration: none;
  }
  & a:hover {
    color: darkviolet;
  }
`;
