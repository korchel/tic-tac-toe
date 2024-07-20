import { useEffect, useLayoutEffect, useState } from "react";

export const useNow = () => {
  const [now, setNow] = useState(Date.now());
  console.log(now)
  useLayoutEffect(() => {
    setNow(Date.now());
  
    const intervalId = setInterval(() => {
      setNow(Date.now());
    }, 1000);
  
    return () => {
      clearInterval(intervalId); // error: all timers work all the time
    };
  }, []);

  return now;
};