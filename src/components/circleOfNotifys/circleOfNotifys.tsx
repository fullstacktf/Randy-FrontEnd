import * as React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";

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
interface NotifyProps {
  counter: ReturnType<() => number>;
}

class CircleOfNotifys extends React.Component<NotifyProps, {}> {
  constructor(props) {
    super(props);

    /*    this.incrementCounter = this.incrementCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this); */
  }

  /*   incrementCounter() {
    if (this.props.newNotify) this.props.newNotify(1);
  }
  resetCounter() {
    if (this.props.empyNotifys) this.props.empyNotifys(0);
  } */

  render() {
    return (
      <div>
        <CircleNotifys>{this.props.counter}</CircleNotifys>
      </div>
    );
  }
}

