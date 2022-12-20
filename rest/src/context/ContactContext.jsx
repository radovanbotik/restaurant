import React from "react";
import { useContext, useState, useEffect } from "react";

const contactCTX = React.createContext();
const ContactContext = ({ children }) => {
  const [userInput, setUserInput] = useState({
    name: "Name",
    email: "E-mail",
    message: "Message",
  });

  const handleChange = ({ target, value }) => {
    setUserInput(prev => ({ ...prev, [target]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <contactCTX.Provider
      value={{ userInput, setUserInput, handleChange, handleSubmit }}
    >
      {children}
    </contactCTX.Provider>
  );
};

const useGlobalContact = () => {
  return useContext(contactCTX);
};

export { ContactContext, useGlobalContact };
