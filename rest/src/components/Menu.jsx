import React from "react";
import styled from "styled-components";
import { Headline } from "./Headline";
import { ButtonMedium } from "./ButtonMedium";
import { MenuList } from "./MenuList";
import { data } from "../utility/MenuDummy";

export const Menu = () => {
  return (
    <Wrapper>
      <div className="control">
        <Headline headline={"from our menu"} tag={"Special selection"} />
        <MenuList data={data} />
        <ButtonMedium text={"view all"} path={"/menu"} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #0f1d22;
  .control {
    margin: 0 auto;
    padding: 80px 0;
    display: grid;
    justify-items: center;
  }
`;
