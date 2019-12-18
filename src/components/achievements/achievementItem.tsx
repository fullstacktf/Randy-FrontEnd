import React, { FC } from "react";
import styled from "@emotion/styled";
import { AchievementInterface } from "./achievementList";

export interface achievmentItemProps {
  achievement: AchievementInterface;
  className?: string;
}

export const AchievmentItem: FC<achievmentItemProps> = ({ achievement, className }) => {
  return (
    <>
      <ImgContainer>
        <img className={className} src={achievement.image} alt={achievement.name} title={achievement.description} width="100%" height="100%" />
      </ImgContainer>
    </>
  );
};

const ImgContainer = styled.div`
  display: flex;
  width: 5em;
  height: 5em;
`;
