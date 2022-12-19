import React, { useEffect } from "react";
import interior1 from "../assets/images/interior1.jpg";
import interior2 from "../assets/images/interior2.jpg";
import { Button } from "./Button";
import styled, { keyframes } from "styled-components";
import { useState } from "react";

const data = [
  {
    id: 1,
    img: interior1,
    title: "the best dishes",
    phrase:
      "we have proper passion for cooking.love is the secret ingredient that makes all our meals taste better and magical.",
  },
  {
    id: 2,
    img: interior2,
    title: "the finest drinks",
    phrase:
      "from the delicious food to wonderful cocktails, Laurent's offer is guaranteed to satisfy all of your taste buds.",
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
      {/* {data.map(entry => {
        return (
          <Slide key={entry.id} bg={entry.img}>
            <h2>{entry.title}</h2>
            <h4>{entry.phrase}</h4> <Button text={"view more"} />
          </Slide>
        );
      })} */}
      <Slide key={slides[currentSlide].id} bg={slides[currentSlide].img}>
        <h2>{slides[currentSlide].title}</h2>
        <h4>{slides[currentSlide].phrase}</h4> <Button text={"view more"} />
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
  background-image: url(${props => props.bg});
  /* background-color: black; */
  background-position: center;
  background-size: cover;
  display: grid;
  place-content: center;
  background-repeat: no-repeat;
  /* transition: all 500ms ease-in; */
  /* background-position-y: 20px; */
  animation: ${AnimateOpacity} 1500ms forwards ease-in-out;
  .button {
    justify-self: center;
  }

  h2 {
  }
  h4 {
  }
`;
