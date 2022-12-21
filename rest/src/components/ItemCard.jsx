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
  max-width: 420px;
  min-width: 320px;
  width: 100%;
  padding: 15px;
  position: relative;
  cursor: pointer;
  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    background-image: url(${props => props.bg});
    transition: 450ms ease-in-out;
  }
  &:hover {
    &:before {
      filter: blur(1px);
    }
  }
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
      font-family: var(--metropolis);
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
