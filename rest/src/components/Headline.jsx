import React from "react";
import styled from "styled-components";
import { Ornament3 } from "../assets/decorative/Ornament3";

export const Headline = ({ headline, tag }) => {
  return (
    <Wrapper className="headline">
      <header className="story-header">
        <span className="tag">{tag}</span>
        <div className="title-holder">
          <div className="vector vector-left">
            <Ornament3 fill={"#c9ab81"} />
          </div>
          <h2>{headline}</h2>
          <div className="vector vector-right">
            <Ornament3 fill={"#c9ab81"} />
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 80px;
  display: grid;
  text-align: center;
  .story-header {
    margin-bottom: 39px;

    .tag {
      display: inline-block;
      margin-bottom: 13px;

      color: #c9ab81;
      font-family: var(--miniver);
      letter-spacing: 0.04em;
      line-height: 28px;
    }
    .title-holder {
      width: 350px;
      margin: 0 auto;
      margin-bottom: 19px;
      display: grid;
      place-content: center;
      column-gap: 32px;
      grid-template-columns: min-content 1fr min-content;
      .vector {
        height: 30px;
        width: 40px;
        transform: translateY(8px);
        /* display: grid;
        place-items: center; */
      }
      .vector-left {
      }
      .vector-right {
      }
      h2 {
        align-self: center;
        font-size: 31px;
        line-height: 41px;
        font-family: var(--quicksand);
        font-weight: 700;
        color: #c9ab81;
        text-transform: uppercase;
        word-wrap: break-word;
        letter-spacing: 0.22em;
      }
    }
  }
`;
