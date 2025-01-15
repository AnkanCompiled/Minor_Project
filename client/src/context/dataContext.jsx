import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [userImage, setUserImage] = useState();

  const updateUserData = (data) => {
    setUserData(data);
  };

  const updateImage = (data) => {
    setUserImage(data);
  };

  return (
    <DataContext.Provider
      value={{ userData, updateUserData, userImage, updateImage }}
    >
      {children}
    </DataContext.Provider>
  );
};
