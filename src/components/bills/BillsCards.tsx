import React, { FC } from "react";
import styled from '@emotion/styled';
import { billCardList } from "./billCardsList";
import { BillCard } from "./billcard";

interface BillsCardsProps {

}

export const BillsCards: FC<BillsCardsProps> = (props) => {
  return (
    <>
      {billCardList && billCardList.map(bill => <BillCard card={bill} />)}
    </>
  );
};
