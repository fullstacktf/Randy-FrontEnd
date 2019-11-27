import * as React from "react";
import "../../css/navigator.css";
import dashboard from "../../assets/icon-dashboard.svg"
import calendar from "../../assets/icon-calendar.svg"
import tasklist from "../../assets/icon-tasklist.svg"
import bill from "../../assets/icon-bill.svg"
import settings from "../../assets/icon-settings.svg"


interface NavigatorProps {

}

class Navigator extends React.Component {
  render() {
    return <div className="container">
      <img src={dashboard} className="icon" alt="dashboard" />
      <img src={calendar} className="icon" alt="calendar" />
      <img src={tasklist} className="icon" alt="tasklist" />
      <img src={bill} className="icon" alt="bill" />
      <img src={settings} className="icon" alt="settings" />

    </div>
  }
}

export default Navigator;
