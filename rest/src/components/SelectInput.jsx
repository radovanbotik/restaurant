import styled from "styled-components";
import React from "react";

export const SelectInput = ({ type }) => {
  return (
    <Wrapper>
      <select>
        <option value="">1 Person</option>
        <option value="">2 People</option>
      </select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 50px;
  padding: 13px 23px;
  line-height: 24px;
  background-color: transparent;
  border: 1px solid #715b3e;
  border-radius: 0;
  outline: 0;
  user-select: none;
  select {
    font-size: 17px;
    width: 100%;
    height: 100%;
    display: inline-block;
    background-color: transparent;
    /* color: #715b3e; */
    color: white;
    border: none;
    line-height: 24px;
    border-radius: none;
  }
  option {
    background-color: transparent;
  }
`;
