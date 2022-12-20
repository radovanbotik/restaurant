import React from "react";
import styled from "styled-components";
import { MenuPageSection } from "./MenuPageSection";
import { MenuPageSpacerImage } from "./MenuPageSpacerImage";
import rolling from "../../assets/images/rolling.jpg";
import dough from "../../assets/images/dough.jpg";
import pasta from "../../assets/images/pasta.jpg";

import { appetizers } from "../../utility/Appetizers";

export const MenuPage = () => {
  return (
    <Wrapper>
      <div className="hero">
        <h2 className="section-title">our menu</h2>
        <MenuPageSpacerImage image={rolling} />
      </div>
      <MenuPageSection
        data={appetizers}
        tag={"Start slow"}
        headline={"appetizers"}
      />
      <MenuPageSpacerImage image={dough} />
      <MenuPageSection
        data={appetizers}
        tag={"Tickle your senses"}
        headline={"main courses"}
      />
      <MenuPageSpacerImage image={pasta} />
      <MenuPageSection
        data={appetizers}
        tag={"Treat yourself"}
        headline={"desserts"}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: #0b1315;
  position: relative;
  display: grid;
  place-content: center;
  .hero {
    /* max-height: 600px;
    overflow: hidden; */
    width: 100%;
    position: relative;
    .section-title {
      color: #c9ab81;
      letter-spacing: 0.22em;
      font-family: var(--metropolis);

      position: absolute;
      font-size: 41px;
      line-height: 41px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      /* padding: 0 0.37em 0 0.52em; */
    }
  }
`;
