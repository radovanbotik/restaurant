import React from "react";
import styled from "styled-components";

export const GridLines = () => {
  return (
    <Wrapper className="grid">
      <div className="gridline"></div>
      <div className="gridline"></div>
      <div className="gridline"></div>
      <div className="gridline"></div>
      <div className="gridline"></div>
      <div className="gridline"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  .gridline {
    border-left: 1px solid #c9ab811f;
  }
  @media (min-width: 1064px) {
    display: grid;
  }
`;
