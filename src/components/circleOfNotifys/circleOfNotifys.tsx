import React, { FC, useReducer, useContext } from "react";
import styled from "@emotion/styled";
import { NotifyContext } from "./notifyProvider";


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
`;
export interface NotifysProps { }

const CircleOfNotifys: FC<NotifysProps> = props => {
  const [state] = useContext(NotifyContext);

  return (
    <div>
      {state.counter > 0 && <CircleNotifys>{state.counter}</CircleNotifys>}
    </div>
  );
};

export default CircleOfNotifys;

