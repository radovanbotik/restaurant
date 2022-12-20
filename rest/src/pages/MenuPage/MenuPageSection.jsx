import React from "react";
import styled from "styled-components";
import { MenuList, Headline } from "../../components";

export const MenuPageSection = ({ category, tag, headline }) => {
  return (
    <Wrapper className="section">
      <div className="control">
        <Headline tag={tag} headline={headline} />
        <MenuList data={category} />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #0f1d22;
  background-color: #0b1315;

  .control {
    width: 420px;
    margin: 0 auto;
    padding: 80px 0;
    /* padding-top: 130px; */
    display: grid;
    justify-items: center;
    gap: 1em;
  }
`;
