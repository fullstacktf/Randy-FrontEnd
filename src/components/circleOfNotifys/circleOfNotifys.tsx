import React, { FC, useReducer } from "react";
import { connect } from 'react-redux'
import { AppState } from '../../reducers'
import styled from "@emotion/styled";
import { newNotify, empyNotifys } from '../../actions'

const CircleNotifys = styled.div`
background: red;
color: white;
border-radius:50%;
border: 5px solid white;
width: 25px;
height: 25px;
display: flex;
justify-content:center;
align-items:center;
font-weight:bold;
z-index:5;
transform: translate(55px, 20px);
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



export interface NotifysProps {
  counter?: number;
  newNotify?: (value: number) => {};
  empyNotifys?: (value: number) => {};
}

const CircleOfNotifys: FC<NotifysProps> = props => {

  const initialState = { counter: 0 }

  const notifysReducer = (state, action) => {
    switch (action.type) {
      case 'NEW_NOTIFY':
        return { count: state.counter + 1 }
      case 'RESET_NOTIFYS':
        return { count: state.counter = 0 }
      default:
        return state.counter;
    }
  }


  const [state, dispatch] = useReducer(notifysReducer, initialState);

  const incrementCounter = () => dispatch({ type: 'NEW_NOTIFY' })

  const resetCounter = () => dispatch({ type: 'RESET_NOTIFYS' })


  return (
    <div>
      <CircleNotifys>{state.counter}</CircleNotifys>
      <ButtonNotify onClick={incrementCounter}>+1 notificación</ButtonNotify>
      <ButtonNotify onClick={resetCounter}>Todo leido</ButtonNotify>
    </div>
  )

}

export default CircleOfNotifys;
