import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedData] = useState([]);

  const saveData = dataToSave => {
    localStorage.setItem(key, JSON.stringify(dataToSave));
  };

  return [storedData, saveData];
};

export default useLocalStorage;
