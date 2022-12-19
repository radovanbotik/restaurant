import React from "react";
import styled from "styled-components";

export const IndexButton = ({ id, setIndex, setActive, addToRefs }) => {
  return (
    <Wrapper
      ref={addToRefs}
      onClick={e => {
        setIndex(id - 1);
        setActive(e.currentTarget);
      }}
    >
      <span>{id}</span>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  margin: 0 19px;
  background: none;
  border: none;
  outline: none;
  overflow: hidden;
  font-size: 12px;
  font-family: var(--quicksand);
  color: #c9ab81;
  cursor: pointer;
  &.active {
    transform: translateY(-10px);
    transition: 250ms ease;
    span {
      &:after {
        height: 1px;
        border-bottom: 1px solid #c9ab81;
        border-top: 1px solid #c9ab81;
      }
    }
  }
  span {
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2px;
    &:after {
      content: "";
      box-sizing: content-box;
      display: block;
      height: 0px;
      width: 10px;
      /* background-color: #c9ab81; */
    }
  }
`;
