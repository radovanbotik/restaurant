import React from "react";
import styled from "styled-components";
import { Headline } from "./Headline";
import { ButtonMedium } from "./ButtonMedium";
import { MenuItem } from "./MenuItem";

const data = [
  {
    id: 1,
    dish: "BEEF BURGER MEAL",
    price: 3200,
    ingredients: "Classic greek salad, barrel aged feta cheese, bread",
  },
  {
    id: 2,
    dish: "ROASTED LAMB RUMP",
    price: 2500,
    ingredients: "Grilled lamb cutlets, pomegranate glaze, butternut squash",
  },
  {
    id: 3,
    dish: "PAN SEARED SEA BASS",
    price: 3800,
    ingredients: "affron and mussel’s broth, new potatoes, edamame beans",
  },
  {
    id: 4,
    dish: "KING PRAWNS AND LOBSTER",
    price: 3800,
    ingredients: "Creamy saffron, sauce Vierge",
  },
  {
    id: 5,
    dish: "CITRUS CURED SALMON",
    price: 4100,
    ingredients: "Horseradish creme fraiche, beetroot mousse, oil",
  },
  {
    id: 6,
    dish: "PAN SEARED SCALLOPS",
    price: 2900,
    ingredients: "Saffron, celeriac puree, black pudding, olive oil",
  },
  {
    id: 7,
    dish: "BAKED CAMEMBERT",
    price: 2500,
    ingredients: "Red onion marmelade, garlic Foccacia bread, grilled figs",
  },
  {
    id: 8,
    dish: "BRAISED OX CHEEK RAVIOLI",
    price: 2300,
    ingredients: "Mediterranean olives casserole, celeriac puree, mushrooms",
  },
];

export const Menu = () => {
  return (
    <Wrapper>
      <div className="control">
        <Headline headline={"from our menu"} tag={"Special selection"} />
        <div className="menu">
          {data.map(entry => (
            <MenuItem key={entry.id} {...entry} />
          ))}
        </div>
        <ButtonMedium text={"view all"} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #0f1d22;
  .control {
    width: 420px;
    margin: 0 auto;
    padding: 80px 0;

    /* padding-top: 130px; */

    display: grid;
    justify-items: center;
    gap: 1em;
  }
`;
