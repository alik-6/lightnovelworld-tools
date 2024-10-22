import { useState, useEffect } from "react";

type UseStorageReturnType = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
];

const useStorage = (
  key: string,
  initialValue: boolean,
): UseStorageReturnType => {
  const [value, setValue] = useState<boolean>(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useStorage;
