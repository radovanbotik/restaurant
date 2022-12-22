import React from "react";
import styled from "styled-components";
import { ContactForm } from "../pages/BookingPage/ContactForm";
import { useGlobalBooking } from "../context/BookingContext";
import { Headline } from "./Headline";

export const Modal = () => {
  const { userInput, closeModal } = useGlobalBooking();

  const date = new Date(userInput.date).toLocaleDateString("en-en", {
    year: "numeric",
    month: "long",
    weekday: "long",
    day: "2-digit",
  });

  const hosts = userInput.people;
  const hour = userInput.hours;

  console.log(date);
  return (
    <Wrapper>
      <div className="modal-body">
        <span className="material-symbols-outlined icon" onClick={closeModal}>
          close
        </span>
        <Headline tag={"your"} headline={"request"} />
        <div className="details">
          <p>There will be a table waiting for</p>
          <h6>
            {hosts} {hosts > 1 ? "people" : "person"} at {hour}
          </h6>
          <h6>on {date}</h6>
        </div>
        <ContactForm />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  inset: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #00000069;
  z-index: 200;
  display: grid;
  place-content: center;
  .modal-body {
    position: relative;
    width: 100%;
    max-width: 500px;
    background-color: var(--blue-main);
    border: 1px solid var(--gold-main);
    padding: 20px;
    .icon {
      position: absolute;
      top: 20px;
      right: 20px;
      color: var(--gold-main);
      z-index: 10;
      cursor: pointer;
      font-size: inherit;
    }
    .details {
      text-align: center;
      margin-bottom: var(--vspace-1);
      p {
        margin: 0 0 25px;
      }
    }
  }
`;
