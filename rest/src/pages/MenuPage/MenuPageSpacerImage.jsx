import React from "react";
import styled from "styled-components";

export const MenuPageSpacerImage = ({ image }) => {
  return (
    <Wrapper className="image">
      <div className="control">
        <div className="image-control">
          <img src={image} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-height: 600px;
  overflow: hidden;
  background-color: #0f1d22;
  background-color: #0b1315;
  .control {
    /* width: 420px; */
    margin: 0 auto;
    padding: 80px 0;
    /* padding-top: 130px; */
    display: grid;
    justify-items: center;
    gap: 1em;
    .image-control {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
