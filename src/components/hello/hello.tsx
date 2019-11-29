import React from "react";
import { css } from "emotion";
import "./hello.css";

const helloContainer = css(`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
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
  // background: blue;
  max-width: auto;
  max-height: 100px;
  margin-left: 20px;
  clip-path: circle(2em at center);
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
      <div className={avatarCSS}>{avatarPrint}</div>
    </div>
  );
};
