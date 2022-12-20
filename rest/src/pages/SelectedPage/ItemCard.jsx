import React from "react";
import styled from "styled-components";

export const ItemCard = ({ id, dish, price, ingredients, image }) => {
  return (
    <Wrapper bg={image}>
      <div className="details"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 600px;
  width: 100%;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
`;
