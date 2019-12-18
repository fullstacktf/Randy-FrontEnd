import React, { FC } from "react";
import styled from "@emotion/styled";
import { achievementList } from "./achievementList";
import { AchievmentItem } from "./achievementItem";

interface AchievementsProps {}

export const Achievements: FC<AchievementsProps> = props => {
  return (
    <Container>
      <h1>Logros</h1>
      <ContainerAchievements>{achievementList && achievementList.map(item => <AchievmentItem key={item.id} achievement={item} className={item.unlock} />)}</ContainerAchievements>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContainerAchievements = styled.div`
  display: flex;
  flex-direction: wrap;

  & > div {
    margin-left: 10px;
    padding: 10px;
    border-radius: 15px;
  }

  & > div > img:not(.unlock) {
    filter: grayscale(1);
  }
`;
