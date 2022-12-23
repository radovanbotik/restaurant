import React, { useState } from "react";
import styled from "styled-components";
import { PersonCard, Headline } from "../../components";
import { Outlet } from "react-router-dom";
import { GridLines } from "../../components/GridLines";
import { useGlobalMenuAndStaff } from "../../context/MenuAndStaffContext";

export const KitchenPage = () => {
  const { staffData } = useGlobalMenuAndStaff();
  console.log(staffData);

  return (
    <Wrapper>
      <GridLines />
      <div className="controls">
        <Headline tag={"get to know"} headline={"Our Collective"} />
        <div className="galleries">
          <div className="team">
            <h6>Reception:</h6>
            <div className="gallery">
              {staffData.reception &&
                staffData.reception.map(entry => (
                  <PersonCard key={entry.id} {...entry} type={"product"} />
                ))}
            </div>
          </div>
          <div className="team">
            <h6>waiters:</h6>
            <div className="gallery">
              {staffData.waiting &&
                staffData.waiting.map(entry => (
                  <PersonCard key={entry.id} {...entry} type={"product"} />
                ))}
            </div>
          </div>
          <div className="team">
            <h6>chefs:</h6>
            <div className="gallery">
              {staffData.chefs &&
                staffData.chefs.map(entry => (
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
