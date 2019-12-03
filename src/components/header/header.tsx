import React from "react";
import { LogoApp } from "../logoApp/logoApp";
import { Hello } from "../hello/hello";
import { css } from "emotion";
import { AppState } from "../../reducers";
import { connect } from "react-redux";

const header = css(`
  max-height: 100px;
  padding-right: 50px;
  padding-left: 50px;
  margin-top:1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`);
const mapStateToProps = (state: AppState) => {
  return { name: state.user };
};
interface HeaderProps {
  name: string;
}

const HeaderTop = (props: HeaderProps) => {
  return (
    <div className={header}>
      <LogoApp></LogoApp>
      <Hello name={props.name} srcAvatar="https://cbsnews1.cbsistatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg"></Hello>
    </div>
  );
};
export default connect(mapStateToProps)(HeaderTop);
