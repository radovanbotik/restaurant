import React from "react";
import styled from "styled-components";
import { Quotemark1 } from "../../assets/decorative/Quotemark1";
import takingorders from "../../assets/images/takingorders.jpg";
import { useState, useEffect, useRef } from "react";
import { Testimonial } from "./Testimonial";
import { IndexButton } from "./IndexButton";

const data = [
  {
    id: 1,
    name: "Maximilián Suchý",
    message:
      "I am a foodie and I'm always on the lookout for the best restaurants and food around town. This place is a must visit!",
    occupation: "customer",
  },
  {
    id: 2,
    name: "Király Alex",
    message:
      "It's really wonderful. I love Grourman Lounge. Your restaurant is truly upstanding and is behind its message 100%. Definitely worth the money.",
    occupation: "customer",
  },
  {
    id: 3,
    name: "Stanislava Ondrejová",
    message: "You won't regret it. We're loving it.",
    occupation: "customer",
  },
];

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const setIndex = id => {
    setCurrentIndex(id);
  };

  const setActive = el => {
    buttonsRef.current.forEach(button => button.classList.remove("active"));
    el.classList.add("active");
  };

  const buttonsRef = useRef([]);
  buttonsRef.current = [];

  const addToRefs = el => {
    if (el && !buttonsRef.current.includes(el)) buttonsRef.current.push(el);
  };
  useEffect(() => {
    buttonsRef.current[0].classList.add("active");
  }, []);
  return (
    <Wrapper>
      <div className="control">
        <div className="testimonial-control">
          <div className="vector-quotemark">
            <Quotemark1 fill={"#c9ab81"} />
          </div>
          <div className="slider">
            <Testimonial {...testimonials[currentIndex]} />
            <div className="navigation">
              {testimonials.map(entry => (
                <IndexButton
                  addToRefs={addToRefs}
                  key={entry.id}
                  {...entry}
                  setIndex={setIndex}
                  setActive={setActive}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="image-control">
          <img src={takingorders} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #0f1d22;
  padding: 0px 40px;
  .control {
    padding: 80px 0;
    margin: 0 auto;
    display: grid;
    justify-content: center;
    align-items: center;
    gap: var(--vspace-0);
    .testimonial-control {
      display: grid;
      place-content: center;
      padding: 20px;
      .vector-quotemark {
        justify-self: center;
        height: 33px;
        width: 35px;
      }
      .slider {
        text-align: center;
        overflow: hidden;
        position: relative;
        width: 100%;
      }
      .navigation {
        margin: 46px 0 0;
      }
    }
    .image-control {
      max-height: 600px;
      /* height: 600px; */
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }
  }
  @media (min-width: 1000px) {
    .control {
      grid-template-columns: 1fr 1fr;
      grid-template-columns: minmax(200px, 600px) minmax(150px, 600px);
      justify-content: space-evenly;
      padding: 40px;
    }
  }
`;
