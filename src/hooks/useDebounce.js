import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const tId = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => clearTimeout(tId);
  }, [value, delay]);

  return debounce;
};

export default useDebounce;
