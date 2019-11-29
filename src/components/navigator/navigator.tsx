import * as React from "react";
import "./navigator.css";
import { DashboardSVG } from "./dashboardSVG";

interface NavigatorProps { }

class Navigator extends React.Component {
  render() {
    return (
      <div className="container">
        <DashboardSVG></DashboardSVG>
      </div>
    );
  }
}

export default Navigator;
