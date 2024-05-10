import React,{useState} from "react";
import TimeDisplay from "./TimeDisplay";
import TimeButton from "./TimeButton";

const Timer = () => {
  const [time, setTime] = useState({ s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  // Not started = 0
  // started = 1
  // stopped = 2

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 1000));
  };

  var updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    updatedS++;
    return setTime({ s:updatedS, m:updatedM, h:updatedH});
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ s:0, m:0, h:0})
  };

  const resume = () => start();


  return (
    
          <div className="bg-white flex justify-between mt-1 mx-10 pt-1 pr-1 rounded-md">
               <TimeDisplay time={time}/>&nbsp; 
               <TimeButton status={status} resume={resume} reset={reset} stop={stop} start={start}/>
          </div>
     
  );
};

export default Timer;