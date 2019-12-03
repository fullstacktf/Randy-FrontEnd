import React from "react";
import { css } from "emotion";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import rootReducer, { AppState } from "../../reducers";
import { CircleOfNotifys } from "../circleOfNotifys/circleOfNotifys";

const helloContainer = css(`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`);

const avatarCSS = css`
  max-width: auto;
  max-height: 100px;
  margin-left: 20px;
  &:hover {
    max-width: 50;
  }
`;

const imageCSS = css`
  max-width: auto;
  max-height: 100px;
  margin-left: 20px;
  clip-path: circle(2em at center);
`;

const ButtonNotify = styled.button`
  font-size: 1em;
  height: 40px;
  margin-right: 50px;
  background: #47ab43;
  color: white;
  border-radius: 10px;
  border: 1px solid #47ab43;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const CircleNotifys = styled.div`
  background: red;
  color: white;
  border-radius: 50%;
  border: 5px solid white;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  z-index: 5;
  transform: translate(55px, 20px);
`;

export const Hello = ({ name, srcAvatar }) => {
  const photo: boolean = false;
  let avatarPrint = (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="30" fill="#EAEAEA" />
      <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="60">
        <circle cx="30" cy="30" r="30" fill="#EAEAEA" />
      </mask>
      <g mask="url(#mask0)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M37.3966 31.45C40.1992 29.2533 42 25.8369 42 22C42 15.3726 36.6274 10 30 10C23.3726 10 18 15.3726 18 22C18 26.007 19.964 29.5553 22.9818 31.7348C15.3794 35.3914 10 44.4296 10 55C10 68.8071 19.1782 80 30.5 80C41.8218 80 51 68.8071 51 55C51 44.1437 45.3257 34.9037 37.3966 31.45Z" fill="#484848" />
      </g>
    </svg>
  );

  if (photo) {
    avatarPrint = <img className={imageCSS} src={srcAvatar} alt="Avatar" />;
  }

  return (
    <div className={helloContainer}>
      <h3>Hola {name}</h3>
      <p>{}</p>
      <div>
        <div className={avatarCSS}>{avatarPrint}</div>
      </div>
    </div>
  );
};

{
  /* <ButtonNotify onClick={newNotify}>+1 notificación test</ButtonNotify>  */
}
{
  /* <CircleNotifys>1</CircleNotifys>  */
}
const mapStateToProps = (state: AppState) => {
  return { counter: state.notifys.value };
};

const mapDispatchToProps = dispatch => ({
  //newNotify: (value: number) => dispatch(newNotify(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
