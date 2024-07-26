import { useEffect, useState } from "react";

export const useNow = (interval: number, isTimerOn: boolean) => {
  const [now, setNow] = useState<number | undefined>();

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

export const useInterval = (interval: number, isTimerOn: boolean, cb: (arg: number) => void) => {
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