import React from "react";
import "./css/App.css";
import Navigator from "./components/navigator/navigator";
import { Header } from "./components/header/header";
import { css } from "emotion";

const appCSS = css(`
  display:grid;
  grid-template-columns: 80px 90%;
`);

const App: React.FC = () => {
  return (
    <div className={appCSS}>
      <Navigator></Navigator>
      <Header></Header>
    </div>
  );
};

export default App;
