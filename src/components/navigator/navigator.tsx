import * as React from "react";
import { Link } from "react-router-dom";
import "./navigator.css";
import { Icon } from "./icon";

interface NavigatorProps {}

class Navigator extends React.Component {
  render() {
    return (
      <div className="container">
        <Link to="/dashboard">
          <Icon name="dashboard" state="no-selected"></Icon>
        </Link>
        <Link to="/calendar">
          <Icon name="calendar" state="no-selected"></Icon>
        </Link>
        <Link to="/tasklist">
          <Icon name="tasklist" state="no-selected"></Icon>
        </Link>
        <Link to="/bill">
          <Icon name="bill" state="no-selected"></Icon>
        </Link>
        <Link to="/settings">
          <Icon name="settings" state="no-selected"></Icon>
        </Link>
      </div>
    );
  }
}

export default Navigator;
