import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { Provider } from 'react-redux';
import "./navigator.css";
import { Icon } from "./icon";
import { useState } from "react";

interface NavigatorProps {
}

const NavIcon = ({ to, name }) => {
  const [isActive, setIsActive] = useState(false);
  return <NavLink to={to} isActive={(match, location) => {
    if (!match) {
      setIsActive(false);
      return false;
    }
    setIsActive(true);
    return true;
  }}>
    <Icon active={isActive} name={name} /></NavLink>;
};


class Navigator extends React.Component {
  render() {
    return (
      <div className="container">
        <NavIcon to="/dashboard" name="dashboard" />
        <NavIcon to="/calendar" name="calendar" />
        <NavIcon to="/tasklist" name="tasklist" />
        <NavIcon to="/bill" name="bill" />
        <NavIcon to="/settings" name="settings" />
      </div>
    );
  }
}

export default Navigator;
