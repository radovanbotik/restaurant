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
        <Headline headline={"our best specialties"} tag={"Recommendations"} />
        <ParagraphDescription
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ullam quae dolorem doloremque quasi vitae enim eos qui consectetur laudantium."
          }
        />
        <ButtonMedium text={"view all"} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #0b1315;
  min-height: 100vh;
  width: 100%;

  .control {
    padding: 80px 0;
    width: 420px;
    margin: 0 auto;
    display: grid;
    text-align: center;
    .story-image {
      height: 600px;
      margin-bottom: 80px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .button {
      align-self: center;
      justify-self: center;
    }
  }
`;
