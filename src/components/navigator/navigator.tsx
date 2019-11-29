import * as React from "react";
import "./navigator.css";
import { DashboardSVG } from "./dashboardSVG";
import { Icon } from "./icon";

interface NavigatorProps { }

class Navigator extends React.Component {
  render() {
    return (
      <div className="container">
        <Icon name="calendar" />
        <DashboardSVG></DashboardSVG>
      </div>
    );
  }
}

export default Navigator;
