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
      <h2 className="section-title">our menu</h2>
      <MenuPageSpacerImage image={rolling} />
      <MenuPageSection
        category={appetizers}
        tag={"Start slow"}
        headline={"appetizers"}
      />
      <MenuPageSpacerImage image={dough} />
      <MenuPageSection
        category={appetizers}
        tag={"Tickle your senses"}
        headline={"main courses"}
      />
      <MenuPageSpacerImage image={pasta} />
      <MenuPageSection
        category={appetizers}
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
  .section-title {
    position: absolute;
  }
`;
