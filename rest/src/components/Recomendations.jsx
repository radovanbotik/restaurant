import React from "react";
import { Headline } from "./Headline";
import styled from "styled-components";
import decorating from "../assets/images/decorating.jpg";
import { ButtonMedium } from "./ButtonMedium";
import { ParagraphDescription } from "./ParagraphDescription";

export const Recomendations = () => {
  return (
    <Wrapper>
      <div className="control">
        <div className="story-image">
          <img src={decorating} alt="" />
        </div>
        <div className="writeup">
          <Headline headline={"our best specialties"} tag={"Recommendations"} />
          <ParagraphDescription
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ullam quae dolorem doloremque quasi vitae enim eos qui consectetur laudantium."
            }
          />
          <ButtonMedium text={"view all"} path={"/selected"} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #0b1315;
  width: 100%;
  padding: 80px 0;
  .control {
    margin: 0 auto;
    display: grid;
    gap: var(--vspace-0);
    text-align: center;
    .story-image {
      max-height: 500px;
      /* max-width: 600px; */
      width: 100%;
      /* height: 100%; */
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }
    .writeup {
      /* max-width: 600px; */
      display: grid;
      place-content: center;
      .button {
        align-self: center;
        justify-self: center;
      }
    }
  }
  @media (min-width: 1000px) {
    .control {
      display: grid;
      grid-template-columns: minmax(200px, 600px) minmax(200px, 600px);
      justify-content: space-evenly;

      padding: 80px;
    }
    .story-image {
    }
    .writeup {
    }
  }
`;
