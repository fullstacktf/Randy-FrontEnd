import React from "react";
import "./css/App.css";
import styled from "@emotion/styled";
import Navigator from "./components/navigator/navigator";
import { HeaderTop } from "./components/header/header";
import { LoginForm } from "./components/login/login";

const Container = styled.div`
background: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
// display: grid;
// //grid-template-columns: 80px 90%;

// > Navigator {
//   grid-area: menu;
// }
// > HeaderTop {
//   grid-area: head;
//   background: red;
// }
// > LoginForm {
//   grid-area: main;
//   background: blue;
// }
// grid-template-areas:
//   "menu head head head head head head head head head head head"
//   "menu main main main main main main main main main main main"
//   "menu main main main main main main main main main main main";

const App: React.FC = () => {
  return (
    <Container>
      <div className="containerNagigator">
        <Navigator></Navigator>
      </div>
      <div className="page">
        <HeaderTop></HeaderTop>
        <div className="content">
          <LoginForm />
        </div>
      </div>
    </Container>
  );
};

export default App;
