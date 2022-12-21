import React from "react";
import styled from "styled-components";

export const Address = ({ id, city, street, line1, line2, email }) => {
  return (
    <Wrapper>
      <div className="control">
        <h5>{city}</h5>
        <p>{street}</p>
        <p>
          <a href={`tel:+${line1}`}>+421{line1}</a>,
          <a href={`tel:+${line2}`}>+421{line2}</a>
        </p>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .control {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 80px 0;
    display: grid;
    justify-items: center;
    text-align: center;
    h5 {
      font-family: var(--quicksand);
      font-weight: 700;
      text-transform: uppercase;
      color: #c9ab81;
      margin-bottom: 25px;
      -ms-word-wrap: break-word;
      word-wrap: break-word;
      font-size: 19px;
      line-height: 1.52em;
    }
    p {
      line-height: 36px;
      a {
        transition: 350ms ease-in-out;
        color: inherit;
        &:hover {
          color: #c9ab81;
        }
        &:visited,
        &:active {
          color: inherit;
        }
      }
    }
  }
`;
