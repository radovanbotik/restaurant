import React from "react";
import { useState, useEffect, useContext } from "react";
import { getCurrentDay } from "../utility/getCurrentDate";

const BookingCTX = React.createContext();
const BookingContext = ({ children }) => {
  const [modalState, setModalState] = useState(false);

  const [userInput, setUserInput] = useState({
    people: 1,
    hours: "12:00",
    date: getCurrentDay(),
  });
  const handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    setUserInput(prev => ({ ...prev, [name]: value }));
  };

  const closeModal = () => {
    setModalState(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setModalState(true);
  };

  return (
    <BookingCTX.Provider
      value={{ handleChange, handleSubmit, userInput, modalState, closeModal }}
    >
      {children}
    </BookingCTX.Provider>
  );
};

const useGlobalBooking = () => {
  return useContext(BookingCTX);
};

export { BookingContext, useGlobalBooking };
