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
        <h1 className="section-title">our menu</h1>
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
      position: absolute;
      width: 80%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
