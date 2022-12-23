import React from "react";
import { formatPrice } from "../utility/formatPrice";
import styled from "styled-components";

export const MenuItem = ({ name, price, description }) => {
  const desc = description.toLowerCase();
  const capital = `${desc.charAt(0).toUpperCase()}${desc.slice(1)}`;

  return (
    <Wrapper>
      <h6 className="item-name">{name}</h6>
      <h6 className="item-price">{formatPrice(price / 100)}</h6>
      <div className="line"></div>
      <p className="item-ingredients">{capital}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  align-items: baseline;
  margin-bottom: 37px;
  display: flex;
  flex-direction: column;
  .item-name {
    grid-area: name;
  }
  .item-price {
    grid-area: price;
    justify-self: end;
    display: inline-block;
    margin: 2px 0 7px;
    white-space: normal;
    color: #c9ab81;
    word-wrap: break-word;
    line-height: 1.52em;
    letter-spacing: 0.03em;
  }
  .item-ingredients {
    grid-area: ingredients;

    margin: 4px 0 0;
  }
  .line {
    grid-area: line;
    display: none;
    width: 100%;
    height: 100%;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      height: 6px;
      width: 100%;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);

      border-top: 1px solid var(--gold-dark);
      border-bottom: 1px solid var(--gold-dark);
    }
  }
  @media (min-width: 700px) {
    display: grid;
    column-gap: var(--vspace-2);
    justify-content: space-between;
    grid-template-columns: 1fr max-content;
    grid-template-areas:
      "name ."
      "line price"
      "ingredients .";
    .line {
      display: block;
    }
    @media (min-width: 1200px) {
      display: grid;
      grid-template-columns: minmax(200px, 1fr) 1fr max-content;
      grid-template-areas:
        "name line price"
        "ingredients ingredients ingredients";
      .line {
        display: block;
      }
    }
  }
`;
