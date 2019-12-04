import React, { useContext } from "react";
import styled from '@emotion/styled';
import { NotifyContext } from "./notifyProvider";

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


export const ButtonNewNotify = props => {
  const [dispatch] = useContext(NotifyContext);

  const handleNewNotify = () => dispatch({ type: "NEW_NOTIFY" })

  return (
    <>
      <button onClick={handleNewNotify}> Nueva notificación </button>
    </>
  );
};

//<ButtonNotify onClick={handleNewNotify}> Nueva notificación </ButtonNotify>
