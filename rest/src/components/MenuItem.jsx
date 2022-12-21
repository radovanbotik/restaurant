import React from "react";
import { formatPrice } from "../utility/formatPrice";
import styled from "styled-components";

export const MenuItem = ({ id, dish, price, ingredients }) => {
  return (
    <Wrapper>
      <h6 className="item-name">{dish}</h6>
      <h6 className="item-price">{formatPrice(price / 100)}</h6>
      <p className="item-ingredients">{ingredients}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 37px;
  display: flex;
  flex-direction: column;
  .item-name {
  }
  .item-price {
    display: inline-block;
    margin: 2px 0 7px;
    white-space: normal;
    color: #c9ab81;
    word-wrap: break-word;
    line-height: 1.52em;
    letter-spacing: 0.03em;
  }
  .item-ingredients {
    margin: 4px 0 0;
  }
`;
