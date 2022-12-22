import React, { useEffect } from "react";
import styled from "styled-components";
import { NavigationMobile } from "./NavigationMobile";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size/throttled";
import { NavigationDesktop } from "./NavigationDesktop";

export const Navigation = () => {
  const [width, height] = useWindowSize();

  return (
    <Wrapper>
      {width > 999 ? <NavigationDesktop /> : <NavigationMobile />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  font-size: 19px;
  font-weight: 300;
  font-family: var(--josefinsans);
  line-height: 29px; */
`;
