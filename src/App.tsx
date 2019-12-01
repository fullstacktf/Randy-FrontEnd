import React from "react";
import "./css/App.css";
import styled from "@emotion/styled";
import Navigator from "./components/navigator/navigator";
import { HeaderTop } from "./components/header/header";
import { LoginForm } from "./components/login/login";

const Container = styled.div`
  display: grid;
  //grid-template-columns: 80px 90%;

  > Navigator {
    grid-area: menu;
  }
  > HeaderTop {
    grid-area: head;
    background: red;
  }
  > LoginForm {
    grid-area: main;
    background: blue;
  }
  grid-template-areas:
    "menu head head head head head head head head head head head"
    "menu main main main main main main main main main main main"
    "menu main main main main main main main main main main main";
`;

const App: React.FC = () => {
  return (
    <Container>
      <Navigator></Navigator>
      <HeaderTop></HeaderTop>
      <LoginForm />
    </Container>
  );
};

export default App;
