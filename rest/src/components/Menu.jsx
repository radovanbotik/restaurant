import React from "react";
import styled from "styled-components";
import { Headline } from "./Headline";
import { ButtonMedium } from "./ButtonMedium";
import { MenuList } from "./MenuList";
import { useGlobalMenuAndStaff } from "../context/MenuAndStaffContext";

export const Menu = () => {
  const { menuData } = useGlobalMenuAndStaff();

  return (
    <Wrapper>
      <div className="control">
        <Headline headline={"from our menu"} tag={"Desserts selection"} />
        <MenuList data={menuData.desserts} />
        <ButtonMedium text={"view all"} path={"/menu"} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #0f1d22;
  padding: 0px 40px;
  .control {
    padding: 80px 0;
    margin: 0 auto;
    padding: 80px 0;
    display: grid;
    justify-items: center;
  }
`;
