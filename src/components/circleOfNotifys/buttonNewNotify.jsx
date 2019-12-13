import React, { useContext } from "react";
import styled from '@emotion/styled';
import { NotifyContext, NEW_NOTIFY } from "./notifyProvider";

const ButtonNotify = styled.button`
  font-size: 1em;
  height: 40px;
  margin-right: 50px;
  background: #47ab43;
  color: white;
  border-radius: 10px;
  border: 1px solid #47ab43;
  outline:none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;


export const ButtonNewNotify = props => {
  const [state, dispatch] = useContext(NotifyContext);

  const handleNewNotify = () => dispatch({ type: NEW_NOTIFY })

  return (
    <>
      <ButtonNotify onClick={handleNewNotify}> Nueva notificación </ButtonNotify>
    </>
  );
};

