import React from "react";
import styled from "styled-components";
import { Booking, Headline } from "../../components";
import { ContactForm } from "./ContactForm";
import { Location } from "./Location";
import { Address } from "./Address";
import { useGlobalBooking } from "../../context/BookingContext";
import { Modal } from "../../components";

const restraurants = [
  {
    id: 1,
    city: "Trnava",
    street: "Stefanikova 20",
    line1: 910932585,
    line2: 911832235,
    email: "trnava@gourmandlounge.com",
  },
  {
    id: 2,
    city: "Szeged",
    street: "Stefanikova 20",
    line1: 910932585,
    line2: 911832235,
    email: "szeged@gourmandlounge.com",
  },
  {
    id: 3,
    city: "Budapest",
    street: "Stefanikova 20",
    line1: 910932585,
    line2: 911832235,
    email: "budapest@gourmandlounge.com",
  },
  {
    id: 4,
    city: "Bratislava",
    street: "Stefanikova 20",
    line1: 910932585,
    line2: 911832235,
    email: "bratislava@gourmandlounge.com",
  },
];

export const BookingPage = () => {
  const { modalState } = useGlobalBooking();

  return (
    <Wrapper>
      <div className="control">
        <Location />
        <Booking />
        <div className="column">
          <div className="contact">
            <Headline tag={"Let us know"} headline={"we are listening"} />
            <ContactForm />
          </div>
          <div className="address">
            {restraurants.map(entry => (
              <Address key={entry.id} {...entry} />
            ))}
          </div>
        </div>
        {modalState && <Modal />}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: #0b1315;
  position: relative;
  padding: 20px;
  .control {
    margin: 0 auto;
    max-width: 1400px;
    /* display: flex;
    flex-direction: column; */

    .column {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
      align-items: center;
      gap: 28px;
    }
    .contact {
      display: flex;
      flex-direction: column;
    }
    .address {
      display: grid;
      /* grid-template-columns: 1fr 1fr; */
      /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
      grid-template-columns: 1fr;
      gap: 30px;
      justify-content: center;
      align-items: center;
    }
  }
  @media (min-width: 1200px) {
    .control {
      .column {
        grid-template-columns: 1fr 1fr;
      }
    }
  }
  @media (min-width: 600px) {
    .control {
      .address {
        grid-template-columns: 1fr 1fr;
      }
    }
  }
`;
