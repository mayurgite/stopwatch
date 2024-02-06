import { useState } from "react";
import { useEffect } from "react";
export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const fomatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  };
  const toggleTime = () => {
    setIsRunning((prevRunning) => !prevRunning);
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  useEffect(() => {
    

    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);

    } else {
      clearInterval(intervalId);
    }
    return () => {clearInterval(intervalId);
    
    }
  }, [isRunning]);



  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {fomatTime(time)}</p>
      <button onClick={toggleTime}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

