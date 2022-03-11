import {useEffect, useState} from 'react';

const useDebounce = (value: any, time: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (JSON.stringify(debouncedValue) !== JSON.stringify(value))
        setDebouncedValue(value);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [value]);
  return debouncedValue;
};

export default useDebounce;
