import React from "react";
import styled from "styled-components";
import { AnchorMoving } from "./AnchorMoving";

export const PersonCard = ({ id, name, role, contact, image }) => {
  console.log(image);
  return (
    <Wrapper className="card">
      <div className="inner">
        <div className="picture">
          <img src={image} alt="" className="picture-direct" />
        </div>
        <div className="details">
          <h1 className="person">{name}</h1>
          <div className="contact">
            {Object.entries(contact).map((array, index) => {
              const [text, path] = array;
              return <AnchorMoving key={index} text={text} path={path} />;
            })}
          </div>
        </div>
      </div>
      <div className="details-wrap">
        <h5 className="footnote_ts">{name}</h5>
        <p>{role}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 200px;
  width: 100%;
  gap: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  .inner {
    height: 100%;
    width: 100%;
    position: relative;

    cursor: pointer;
    .picture {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      /* background-size: cover;
      background-position: top; */
      transition: 450ms ease-in-out;
      img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        object-position: 0% 15%;
      }
    }
    /* :before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-size: cover;
      background-position: top;
      transition: 450ms ease-in-out;
    } */
    &:hover {
      /* &:before {
        filter: blur(1px);
      } */
      .picture-direct {
        filter: blur(1px);
      }
      .details {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }
    }
    .details {
      height: 100%;
      width: 100%;
      padding: 10px;
      background-color: #0f1d227e;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
      transition: 450ms ease-in-out;
      font-size: 8px;
      gap: var(--vspace-3);
      .person {
        align-self: center;
        line-height: 1;
        font-size: 2.375em;
      }
      .contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 100%;
  }
`;
