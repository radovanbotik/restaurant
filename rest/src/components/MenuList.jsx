import React from "react";
import styled from "styled-components";
import { MenuItem } from "./MenuItem";

export const MenuList = ({ data }) => {
  return (
    <Wrapper className="menu">
      <div className="control">
        {data &&
          data.map((entry, index) => <MenuItem key={index} {...entry} />)}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  /* place-content: center; */
  justify-content: center;
  .control {
    display: grid;
    max-width: 1600px;
    padding: 80px;
    justify-items: flex-start;
    column-gap: var(--vspace-0);

    width: 100%;
  }
  @media (min-width: 1000px) {
    .control {
      grid-template-rows: repeat(4, 1fr);
      grid-template-columns: 1fr 1fr;
      /* grid-template-columns: minmax(200px, 600px) minmax(200px, 600px); */
    }
  }
`;
