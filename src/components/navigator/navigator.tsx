import * as React from "react";
import "./navigator.css";
import { Icon } from "./icon";

interface NavigatorProps {}

class Navigator extends React.Component {
  render() {
    return (
      <div className="container">
        <Icon name="dashboard"></Icon>
        <Icon name="calendar"></Icon>
        <Icon name="tasklist"></Icon>
        <Icon name="bill"></Icon>
        <Icon name="settings"></Icon>
      </div>
    );
  }
}

export default Navigator;
