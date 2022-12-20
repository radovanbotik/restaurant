import React from "react";
import styled from "styled-components";
import { MenuItem } from "./MenuItem";

export const MenuList = ({ data }) => {
  return (
    <Wrapper className="menu">
      {data.map(entry => (
        <MenuItem key={entry.id} {...entry} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;
