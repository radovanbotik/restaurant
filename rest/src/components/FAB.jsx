import React from "react";
import styled from "styled-components";

export const FAB = () => {
  return (
    <Wrapper>
      <div className="control">
        <div className="inner">
          {" "}
          <span className="material-symbols-outlined">expand_less</span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 33px;
  right: 33px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #e7c595ba;
  /* border: 0;
  box-shadow: 0px 0px 2px 2px #e7c595; */
  margin: 2px;

  cursor: pointer;
  .control {
    width: 100%;
    height: 100%;
    position: relative;
    .inner {
      position: absolute;
      inset: -1px;
      border-radius: 50%;
      border: 2px solid #e7c595ba;
      display: grid;
      place-content: center;
      span {
        color: #c9ab81;
      }
    }
  }
`;
