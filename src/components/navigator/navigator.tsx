import * as React from "react";
import "./navigator.css";
import dashboard from "../../assets/icon-dashboard.svg"
import calendar from "../../assets/icon-calendar.svg"
import tasklist from "../../assets/icon-tasklist.svg"
import bill from "../../assets/icon-bill.svg"
import settings from "../../assets/icon-settings.svg"
import Icon from "./icon";


interface NavigatorProps {

}

class Navigator extends React.Component {
  render() {
    return (
      <div className="container">
        <Icon name={dashboard}></Icon>
        <Icon name={calendar}></Icon>
        <Icon name={tasklist}></Icon>
        <Icon name={bill}></Icon>
        <Icon name={settings}></Icon>
      </div>
    )
  }
}

export default Navigator;
