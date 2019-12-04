import * as React from "react";
import * as Redux from 'redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./css/App.css";
import styled from "@emotion/styled";
import rootReducer, { AppState } from './reducers'
import Navigator from "./components/navigator/navigator";
import { HeaderTop } from "./components/header/header";
import { Home } from "./pages/Home/Home";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Calendar } from "./pages/Calendar/Calendar";
import { Tasklist } from "./pages/Tasklist/Tasklist";
import { Bill } from "./pages/Bill/Bill";
import { Settings } from "./pages/Settings/Settings";

const store: Redux.Store<AppState> = Redux.createStore(rootReducer);

const Container = styled.div`
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;


const App: React.FC = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;

