import React from "react";
import styled from "styled-components";
import { AnchorMoving } from "./AnchorMoving";

export const PersonCard = ({ id, name, occupation, contact, image }) => {
  return (
    <Wrapper>
      <h2>{occupation}</h2>
      <Inner bg={image}>
        <div className="details">
          <h2 className="person">{name}</h2>{" "}
          <div className="contact">
            {Object.entries(contact).map((array, index) => {
              const [text, path] = array;
              return <AnchorMoving key={index} text={text} path={path} />;
            })}
          </div>
        </div>
      </Inner>
      {/* <h2>{name}</h2>
      <h2>{occupation}</h2> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 15px;
  height: 600px;
  width: 100%;
`;

const Inner = styled.div`
  height: 100%;
  position: relative;
  /* background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center; */
  cursor: pointer;
  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    background-image: url(${props => props.bg});
    transition: 450ms ease-in-out;
  }
  &:hover {
    &:before {
      filter: blur(1px);
    }
    .details {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }
  .details {
    height: 100%;
    width: 100%;
    background-color: #0f1d227e;
    display: grid;
    gap: 28px;
    display: flex;
    flex-direction: column;
    /* align-content: center; */
    /* place-content: center; */
    justify-content: center;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transition: 450ms ease-in-out;
    .person {
      font-size: 40px;
      line-height: 1;
      letter-spacing: 0.22em;
      font-family: var(--metropolis);
      font-weight: 700;
      text-transform: uppercase;
      color: #c9ab81;
      text-align: center;
    }
    .contact {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
