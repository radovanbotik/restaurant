import React from "react";
import { useState, useEffect, useContext } from "react";
import { getCurrentDay } from "../utility/getCurrentDate";

const BookingCTX = React.createContext();
const BookingContext = ({ children }) => {
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

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userInput);
  };

  return (
    <BookingCTX.Provider value={{ handleChange, handleSubmit, userInput }}>
      {children}
    </BookingCTX.Provider>
  );
};

const useGlobalBooking = () => {
  return useContext(BookingCTX);
};

export { BookingContext, useGlobalBooking };
