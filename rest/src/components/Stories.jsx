import React from "react";
import { Headline } from "./Headline";
import styled from "styled-components";
import interior1 from "../assets/images/interior1.jpg";
import { Ornament3 } from "../assets/decorative/Ornament3";
import { ParagraphDescription } from "./ParagraphDescription";

export const Stories = () => {
  return (
    <Wrapper>
      <div className="control">
        <Headline headline={"about us"} tag={"Our Story"} />
        <ParagraphDescription
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ullam quae dolorem doloremque quasi vitae enim eos qui consectetur laudantium."
          }
        />
        <div className="story-image">
          <img src={interior1} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #0b1315;
  min-height: 100vh;
  width: 100%;
  .control {
    width: 420px;
    margin: 0 auto;
    /* padding-top: 150px; */
    padding: 80px 0;

    .story-image {
      height: 600px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
