import React, { useEffect } from "react";
import mixing from "../assets/images/mixing.jpg";
import pouring2 from "../assets/images/pouring2.jpg";
import { ButtonMedium } from "./ButtonMedium";
import styled, { keyframes } from "styled-components";
import { useState } from "react";

const data = [
  {
    id: 1,
    img: mixing,
    title: "the best dishes",
    phrase:
      "A unique, theatrical experience where each table is its own foodie experience.",
  },
  {
    id: 2,
    img: pouring2,
    title: "the finest drinks",
    phrase:
      "The good life is waiting for you. Come for a drink, stay for a meal.",
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState(data);

  const changeSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide();
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide]);
  return (
    <Wrapper>
      <Slide key={slides[currentSlide].id} bg={slides[currentSlide].img}>
        <div className="headline">
          <h4 className="tag">experience</h4>
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].phrase}</p>
          <ButtonMedium text={"view more"} path={"/menu"} />
        </div>
      </Slide>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  position: relative;
  display: grid;
  place-items: center;
`;

const AnimateOpacity = keyframes`
  
  0%{filter: grayscale(90%)}
  100%{filter: grayscale(10%)}
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0b1315;
  position: relative;
  display: grid;
  place-content: center;

  .headline {
    width: 100%;
    /* max-width: 300px; */
    z-index: 10;
    display: grid;
    justify-items: center;
    align-content: center;
    text-align: center;
    gap: var(--vspace-2);
    .tag {
      display: none;
      font-size: 1.1875em;
      color: #c9ab81;
      font-family: var(--miniver);
      letter-spacing: 0.04em;
      line-height: 28px;
    }

    h1 {
      font-size: 2.375em;
      font-weight: 300;
      white-space: normal;
      margin-bottom: 16px;
      line-height: calc(2.375 / var(--space) * var(--vspace-1));
    }
    p {
      max-width: 680px;
    }
  }
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    background-image: url(${props => props.bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(2px);
    animation: ${AnimateOpacity} 1500ms forwards ease-in-out;
  }
  .button {
    justify-self: center;
  }

  @media (min-width: 768px) {
    .headline h1 {
      font-size: 3.9167em;
      line-height: calc(3.9167 / var(--space) * var(--vspace-1));
      font-weight: 300;
    }
  }
  @media (min-width: 1000px) {
    .headline {
      .tag {
        display: block;
      }
    }
  }
`;
