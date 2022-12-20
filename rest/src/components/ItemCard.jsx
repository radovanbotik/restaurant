import React from "react";
import styled from "styled-components";

export const ItemCard = ({ id, category, image, type }) => {
  console.log(id);
  return (
    <Wrapper bg={image}>
      <div className="details">
        <h2 className="category">{category}</h2>
        <div className="graphic-control">
          <div className="line"></div>
          <div className="line horizontal"></div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 600px;
  width: 100%;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  padding: 15px;
  cursor: pointer;
  &:hover {
    .details {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      .graphic-control {
        .line {
          height: 42px;
          width: 6px;
        }
        .line.horizontal {
          height: 31px;
        }
      }
    }
  }
  .details {
    height: 100%;
    width: 100%;
    background-color: #0f1d227e;
    display: grid;
    gap: 28px;
    place-content: center;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transition: 450ms ease-in-out;
    .category {
      font-size: 40px;
      line-height: 22px;
      letter-spacing: 0.22em;
      font-family: var(--metropolis);
      font-weight: 700;
      text-transform: uppercase;
      color: #c9ab81;
    }
    .graphic-control {
      position: relative;
      align-self: center;
      justify-self: center;
      .line {
        position: absolute;
        width: 0px;
        height: 0px;
        background-color: transparent;
        border-left: 1px solid #c9ab81;
        border-right: 1px solid #c9ab81;
        transition: 450ms ease-in-out 100ms;
      }
      .line.horizontal {
        height: 0px;
        top: 0px;
        transform: rotate(90deg);
        transition: 450ms ease-in-out 200ms;
      }
    }
  }
`;
