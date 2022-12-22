import React, { useState } from "react";
import styled from "styled-components";
import { personel } from "../../utility/personelDummy";
import { PersonCard, Headline } from "../../components";
import { Outlet } from "react-router-dom";
import { GridLines } from "../../components/GridLines";

export const KitchenPage = () => {
  const [chefs, setChefs] = useState(personel.chefs);
  const [waiting, setWaiting] = useState(personel.waiters);
  const [reception, setReception] = useState(personel.reception);

  return (
    <Wrapper>
      <GridLines />
      <div className="controls">
        <Headline tag={"get to know"} headline={"Our Collective"} />
        <div className="galleries">
          <div className="team">
            <h6>Reception:</h6>
            <div className="gallery">
              {reception.map(entry => (
                <PersonCard key={entry.id} {...entry} type={"product"} />
              ))}
            </div>
          </div>
          <div className="team">
            <h6>waiters:</h6>
            <div className="gallery">
              {waiting.map(entry => (
                <PersonCard key={entry.id} {...entry} type={"product"} />
              ))}
            </div>
          </div>
          <div className="team">
            <h6>chefs:</h6>
            <div className="gallery">
              {chefs.map(entry => (
                <PersonCard key={entry.id} {...entry} type={"product"} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100%;
  background-color: var(--black-main);
  position: relative;

  .controls {
    max-width: 1600px;
    margin: 0 auto;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    gap: var(--vspace-0);
    .headline {
      padding: 80px 0;
    }
    .galleries {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--vspace-0);
      .team {
        display: flex;
        flex-direction: column;
        /* align-items: start; */
        gap: var(--vspace-3);
        .gallery {
          display: grid;
          gap: var(--vspace-2);
        }
      }
    }
  }
  @media (min-width: 1000px) {
    .controls {
      .gallery {
        /* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
