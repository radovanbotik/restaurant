import React from "react";
import { useContext, useState, useEffect } from "react";

const contactCTX = React.createContext();
const ContactContext = ({ children }) => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = e => {
    // setUserInput(prev => ({ ...prev, [target]: value }));
    const name = e.target.name;
    const value = e.target.value;
    setUserInput(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userInput);
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
