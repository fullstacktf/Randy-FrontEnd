import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/App.css";
import styled from "@emotion/styled";
import Navigator from "./components/navigator/navigator";
import { HeaderTop } from "./components/header/header";
import { LoginForm } from "./components/login/login";
import { Home } from "./pages/Home/Home";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Calendar } from "./pages/Calendar/Calendar";
import { Tasklist } from "./pages/Tasklist/Tasklist";
import { Bill } from "./pages/Bill/Bill";
import { Settings } from "./pages/Settings/Settings";

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
    <Router>
      <Container>
        <div className="containerNagigator">
          <Navigator />
        </div>
        <div className="page">
          <HeaderTop />
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/tasklist" component={Tasklist} />
            <Route path="/bill" component={Bill} />
            <Route path="/settings" component={Settings} />
          </div>
        </div>
      </Container>
    </Router>
  );
};

export default App;

/*

      <Container>
        <div className="containerNagigator">
          <Navigator></Navigator>
        </div>
        <div className="page">
          <HeaderTop></HeaderTop>
          <div className="content">
            
          </div>
        </div>
      </Container>

*/
