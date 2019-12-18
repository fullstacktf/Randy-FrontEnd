import React, { FC } from "react";
import styled from '@emotion/styled';
import { billCardList } from "./billCardsList";
import { BillCard } from "./billcard";

interface BillsCardsProps {

}

export const BillsCards: FC<BillsCardsProps> = (props) => {
  return (
    <>
      <h4>Soy una factura jaja</h4>
      {billCardList && billCardList.map(bill => <BillCard card={bill} />)}
    </>
  );
};
