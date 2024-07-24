import { useEffect, useState } from "react";

export const useNow = (interval, isTimerOn) => {
  const [now, setNow] = useState();

  useEffect(() => {
    if (!isTimerOn) {
      setNow(undefined);
      return;
    }
  
    const intervalId  = setInterval(() => {
      setNow(Date.now());
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [interval, isTimerOn]);

  return now;
};

export const useInterval = (interval, isTimerOn, cb) => {
  useEffect(() => {
    if (!isTimerOn) {
      return;
    }
  
    const intervalId  = setInterval(() => {
      cb(Date.now());
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [interval, isTimerOn]);
};