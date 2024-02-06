import { useState } from "react";
import { useEffect } from "react";
export default function App() {
  const [isrunning, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const fomatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    if (seconds < 10) {
      return `${minutes}:0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  };
  const toggleTime = () => {
    setRunning((prevRunning) => !prevRunning);
  };

  const reset = () => {
    setRunning(false);
    setTime(0);
  };

  useEffect(() => {
    let interval;
    if (isrunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isrunning]);
  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time : {fomatTime(time)}</p>
      <button onClick={toggleTime}>{isrunning ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

