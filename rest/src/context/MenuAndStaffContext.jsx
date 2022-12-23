import React from "react";
import { useState, useEffect, useContext } from "react";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { database } from "../firebase/firebase-config";

const menuCTX = React.createContext();

const MenuAndStaffContext = ({ children }) => {
  const [menuData, setMenuData] = useState({});
  const menuCollectionRef = collection(database, "menu");

  const [staffData, setStaffData] = useState({});
  const staffCollectionRef = collection(database, "staff");

  useEffect(() => {
    const getMenu = async () => {
      const data = await getDocs(menuCollectionRef);
      setMenuData(data.docs.map(doc => doc.data())[0].menu);
    };
    getMenu();
  }, []);

  useEffect(() => {
    const getStaff = async () => {
      const data = await getDocs(staffCollectionRef);
      setStaffData(data.docs.map(doc => doc.data())[0].staff);
    };
    getStaff();
  }, []);

  return (
    <menuCTX.Provider value={{ menuData, staffData }}>
      {children}
    </menuCTX.Provider>
  );
};

const useGlobalMenuAndStaff = () => {
  return useContext(menuCTX);
};

export { MenuAndStaffContext, useGlobalMenuAndStaff };
