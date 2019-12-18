import React, { FC } from "react";
import styled from '@emotion/styled';
import { BillCardInterface } from "./billCardsList";

interface BillCardProps {
  card: BillCardInterface
}

export const BillCard: FC<BillCardProps> = ({ card }) => {
  return (
    <Container color={card.color}>
      <img src={card.image} alt={card.title} />
      <ContainerInfo>
        <h3>{card.title} {card.cost}€/{card.frecuency}</h3>
      </ContainerInfo>
    </Container>
  );
};

const Container = styled.div`
  background: ${props => props.color};
  border-radius:20px;
  margin-bottom: 10px;
  padding: 10px;
  width: 400px;
  height: 100px;
  display:flex;
  flex-direction:row;
  align-items:center;

  & img {
    width: 60px;
    height: 60px;
    background: red;
    padding: 10px;
}
`

const ContainerInfo = styled.div`
  display:flex;
  flex-direction:column;
  background: blue;
  margin-left: 10px;
  height: 100%;
  width: 100%;
`
