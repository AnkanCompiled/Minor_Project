import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  const updateUserData = (data) => {
    setUserData(data);
  };

  return (
    <DataContext.Provider value={{ userData, updateUserData }}>
      {children}
    </DataContext.Provider>
  );
};
