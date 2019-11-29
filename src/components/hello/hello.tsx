import React from "react";
import { css } from 'emotion';


const helloContainer = css(`
  background-color:hotpink;
`)

export const Hello = ({ name, srcAvatar }) => {
  return (
    <div className={helloContainer}>
      <h1>Hola {name}</h1>
      <img src={srcAvatar} alt="Avatar" />
    </div>
  )

}
