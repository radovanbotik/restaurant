import styled from "styled-components";
import React from "react";

export const DateInput = () => {
  return (
    <Wrapper>
      <input type="date" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 50px;
  /* padding: 13px 23px; */
  line-height: 24px;
  background-color: transparent;
  border: 1px solid #715b3e;
  border-radius: 0;
  outline: 0;
  user-select: none;
`;
