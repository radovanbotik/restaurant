import React, { useEffect } from "react";
import mixing from "../assets/images/mixing.jpg";
import pouring from "../assets/images/pouring.jpg";
import { ButtonMedium } from "./ButtonMedium";
import styled, { keyframes } from "styled-components";
import { useState } from "react";

const data = [
  {
    id: 1,
    img: mixing,
    title: "the best dishes",
    phrase:
      "We have proper passion for cooking. Love is the secret ingredient that makes all our meals taste better and magical.",
  },
  {
    id: 2,
    img: pouring,
    title: "the finest drinks",
    phrase:
      "From the delicious food to wonderful cocktails, Laurent's offer is guaranteed to satisfy all of your taste buds.",
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState(data);

  // const changeSlide = () => {
  //   if (currentSlide < slides.length - 1) {
  //     setCurrentSlide(prev => prev + 1);
  //   } else {
  //     setCurrentSlide(0);
  //   }
  // };

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     changeSlide();
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, [currentSlide]);
  return (
    <Wrapper>
      <Slide key={slides[currentSlide].id} bg={slides[currentSlide].img}>
        <div className="headline">
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].phrase}</p>
          <ButtonMedium text={"view more"} />
        </div>
      </Slide>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* height: 100vh; */
  min-height: 100vh;
  position: relative;
  display: grid;
  place-items: center;
`;
/*
// const AnimateX = keyframes`
//   0%{ background-position-x: 0px,}
//   50%{ background-position-x: -2px}
//   100%{ background-position-x: 0px}
// `;
*/
const AnimateOpacity = keyframes`
  
  0%{filter: grayscale(90%);}
  100%{filter: grayscale(10%)}
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0b1315;
  position: relative;
  display: grid;
  place-content: center;

  /* transition: all 500ms ease-in; */
  /* background-position-y: 20px; */
  animation: ${AnimateOpacity} 1500ms forwards ease-in-out;
  .headline {
    width: 100%;
    max-width: 300px;
    z-index: 10;
    display: grid;
    justify-items: center;
    align-content: center;
    text-align: center;
    transform: translateY(-72px);

    h2 {
      /* display: flex;
      flex-wrap: wrap; */
      /* width: 156px; */
      font-family: var(--bigshoulders);
      line-height: 50px;
      letter-spacing: 12px;
      font-weight: 300px;
      font-size: 42px;
      color: rgb(201, 171, 129);
      white-space: normal;
      margin-bottom: 16px;
    }
    p {
      font-family: var(--josefinsans);
      line-height: 33px;
      letter-spacing: 0px;
      font-weight: 300;
      font-size: 23px;
      margin-bottom: 32px;

      /* width: 301px; */
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
  }
  .button {
    justify-self: center;
  }
`;
