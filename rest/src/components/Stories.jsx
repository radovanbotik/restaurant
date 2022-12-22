import React from "react";
import { Headline } from "./Headline";
import styled from "styled-components";
import interior1 from "../assets/images/interior1.jpg";
import interior2 from "../assets/images/interior2.jpg";

import { Ornament3 } from "../assets/decorative/Ornament3";
import { ParagraphDescription } from "./ParagraphDescription";

export const Stories = ({ setRef }) => {
  return (
    <Wrapper ref={setRef}>
      <div className="control">
        <div className="story-image">
          <img src={interior1} alt="" />
        </div>
        <div className="writeup">
          <Headline headline={"about us"} tag={"Our Story"} />
          <ParagraphDescription
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ullam quae dolorem doloremque quasi vitae enim eos qui consectetur laudantium."
            }
          />
        </div>
        <div className="story-image">
          <img src={interior2} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--black-main);
  padding: 0px 40px;
  width: 100%;
  .control {
    margin: 0 auto;
    padding: 80px 0;
    display: grid;
    gap: var(--vspace-1);
    align-items: center;
    .writeup {
      order: 3;
    }
    .story-image {
      height: 600px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  @media (min-width: 1000px) {
    .control {
      grid-template-columns: minmax(150px, 400px) minmax(200px, 400px) minmax(
          150px,
          400px
        );
      justify-content: space-evenly;
    }
  }
`;
