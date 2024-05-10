import React from 'react';

function TimeDisplay(props) {
  const h = () => {
     if(props.time.h === 0){
       return '';
     }else {
       return <span className="text-black text-2xl">{(props.time.h >= 10)? props.time.h : "0"+ props.time.h} : </span>;
     }
  }
  return (
    <div className="pl-3 pr-2">
       {h()}
       <span className="text-black text-3xl">{(props.time.m >= 10)? props.time.m : "0"+ props.time.m} : </span>
       <span className="text-black text-3xl">{(props.time.s >= 10)? props.time.s : "0"+ props.time.s}</span>
    </div>
  );
}

export default TimeDisplay;