import React from "react";
import { LogoApp } from "../logoApp/logoApp";
import { Hello } from "../hello/hello";
import { css } from "emotion";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store/index"
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

const mapStateToProps = (state: RootState) => ({
  name: state.userReducer.user.name
})

const mapDispatchToActions = {
  getName: () => ({type:'GET_USER'})
}

const connector = connect(
  mapStateToProps,
  mapDispatchToActions
)

type Props4Redux = ConnectedProps<typeof connector>

type HeaderTopProps = Props4Redux

const HeaderTop = (props: HeaderTopProps) => {
  return (
    <div className={header}>
      <LogoApp></LogoApp>
      <Hello name={props.name} srcAvatar="https://cbsnews1.cbsistatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg"></Hello>
    </div>
  );
};
export default connector(HeaderTop)
