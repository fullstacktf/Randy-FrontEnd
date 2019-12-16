import React, { FC } from "react";

import styled from '@emotion/styled';
import { Link } from "react-router-dom";

const Button = styled.button`
  font-size: 1em;
  height: 40px;
  margin-right: 50px;
  background: #47ab43;
  color: white;
  border-radius: 10px;
  border: 1px solid #47ab43;
  outline:0;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

interface ButtonSummitProps {
  content: string,
  className?: string,
  functionOnClick?: () => void,
  path: string
}

export const ButtonSummit: FC<ButtonSummitProps> = ({ path, content, functionOnClick }) => {
  return (
    <>
      <Link to={path}>
        <Button onClick={functionOnClick}>{content}</Button>
      </Link>
    </>
  );
};
