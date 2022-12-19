import React from "react";
import styled from "styled-components";
import { Headline } from "./Headline";
import { ParagraphDescription } from "./ParagraphDescription";
import { ButtonMoving } from "./ButtonMoving";
import femaledecorating from "../assets/images/femaledecorating.jpg";
import femaledecorating2 from "../assets/images/femaledecorating2.jpg";

export const Tips = () => {
  return (
    <Wrapper>
      <div className="control">
        <div className="img-control">
          <img src={femaledecorating} alt="" />
        </div>
        <div className="img-control">
          <img src={femaledecorating2} alt="" />
        </div>
        <Headline tag={"Our Philosophy"} headline={"our tips"} />
        <ParagraphDescription
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quasipossimus laborum architecto soluta quos. Repudiandae reiciendis suscipit fugit voluptas praesentium perferendis magnam quibusdam quae?"
          }
        />
        <ButtonMoving text={"read more"} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: black;
  .control {
    padding: 80px 0;
    margin: 0 auto;
    width: 420px;
    display: grid;
    justify-items: center;
    /* gap: 50px; */
    .img-control {
      height: 600px;
      padding-bottom: 50px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
