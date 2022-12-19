import React from "react";
import styled from "styled-components";

export const Testimonial = ({ id, name, message, occupation }) => {
  return (
    <Wrapper>
      <p className="author-message">{message}</p>
      <h5 className="author">{name}</h5>
      <p className="author-occupation">{occupation}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: max(120px, 150px) min-content min-content;
  /* position: absolute; */
  width: 100%;
  .author-message {
    font-family: var(--miniver);
    letter-spacing: 0.04em;
    color: #afb8b8;
    font-size: 22px;
    line-height: 39px;
    margin: 36px 0 0;
  }
  .author {
    font-size: 16px;
    line-height: 25px;
    font-family: var(--quicksand);
    font-weight: 700;
    letter-spacing: 0.23em;
    text-transform: uppercase;
    word-wrap: break-word;
    margin: 31px 0 0;
    color: #c9ab81;
  }
  .author-occupation {
    margin: 5px 0;
  }
`;
