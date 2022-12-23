import React from "react";
import styled from "styled-components";
import { Headline } from "./Headline";
import { ParagraphDescription } from "./ParagraphDescription";
import { ButtonMoving } from "./ButtonMoving";
import femaledecorating from "../assets/images/femaledecorating.jpg";
import femaledecorating2 from "../assets/images/femaledecorating2.jpg";
import { GridLines } from "./GridLines";

export const Tips = () => {
  return (
    <Wrapper>
      {/* <GridLines /> */}
      <div className="control">
        <div className="img-control">
          <img src={femaledecorating} alt="" />
        </div>
        <div className="img-control">
          <img src={femaledecorating2} alt="" />
        </div>
        <div className="writeup">
          <Headline tag={"Our Philosophy"} headline={"our tips"} />
          <ParagraphDescription
            description={
              "Immerse yourself in an experience that transcends the ordinary and restores your faith in the power of food."
            }
          />
          <ButtonMoving text={"read more"} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: black;
  /* padding: 0px 40px; */
  .control {
    padding: 80px 40px;
    margin: 0 auto;
    display: grid;
    justify-items: center;
    .img-control {
      height: 600px;
      padding-bottom: 50px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .writeup {
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
      grid-template-columns: minmax(150px, 350px) minmax(150px, 350px) minmax(
          200px,
          400px
        );
      justify-content: space-evenly;
      padding: 80px 40px;
    }
    .story-image {
    }
    .writeup {
    }
  }
`;
