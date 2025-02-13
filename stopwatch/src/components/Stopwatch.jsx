import React, { useEffect, useState } from "react";
import { Sun, Moon, Play, Pause } from "lucide-react";

const Stopwatch = ({ isDark, setIsDark }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      setTime((e) => e + 1);
    }, 10);
    isRunning ? interval : clearInterval(interval);
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="dark:bg-[#201f3e] shadow-[0_2px_14px_gray] dark:shadow-[0_2px_14px_black] p-5 pb-10 rounded-xl grid w-1/3 justify-items-center gap-10">
      <button onClick={() => setIsDark(!isDark)} className="justify-self-end">
        {isDark ? <Sun /> : <Moon />}
      </button>
      <div className="grid justify-items-center space-y-5">
        <p className="text-2xl">Stopwatch</p>
        <div className="flex gap-2 items-center">
          <p className="text-2xl">
            {time / 360000 < 10
              ? "0" + Math.floor(time / 360000)
              : Math.floor(time / 360000)}
          </p>
          <p>:</p>
          <p className="text-2xl">
            {("0" + (Math.floor(time / 6000) % 60)).slice(-2)}
          </p>
          <p>:</p>
          <p className="text-2xl">
            {("0" + (Math.floor(time / 100) % 60)).slice(-2)}
          </p>
          <p>:</p>
          <p className="text-sm">{("0" + (time % 100)).slice(-2)}</p>
        </div>
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? <Pause /> : <Play />}
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
