import React, { FC } from "react";
import styled from "@emotion/styled";
import { LogoApp } from "../../components/logoApp/logoApp";

const RandyText = styled.h1`
color:black;
font-size: 5em;
`

const ContainerLogo = styled.div`
z-index:-5;
transform: translate(60px, -10px) scale(1.3);
`

const Container = styled.div`
display:flex;
flex-directions:row;
transform:translateX(-60px);
`

export const Home: FC = () => {
  return (
    <div>
      <Container>
        <ContainerLogo>
          <LogoApp />
        </ContainerLogo>
        <RandyText>Randy</RandyText>
        <h1>PRUEBA DE DESPLIEGUE V2.0</h1>
      </Container>
    </div>
  )
};
