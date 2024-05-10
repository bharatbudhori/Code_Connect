import React from 'react';

function TimeButton(props) {
  return (
    <div>
      {(props.status === 0)? 
        <button className="bg-white rounded-full relative overflow-hidden hover:scale-110 transition-transform duration-300"
        onClick={props.start}><img src="/start.png" alt="Start" className="w-10 px-1"/></button> : ""
      }

      {(props.status === 1)? 
        <div>
          <button className="bg-white rounded-full relative overflow-hidden hover:scale-110 transition-transform duration-300"
                  onClick={props.stop}><img src="/stop.png" alt="Stop" className="w-10 px-1"/></button>
          <button className="bg-white rounded-full relative overflow-hidden hover:scale-110 transition-transform duration-300"
                  onClick={props.reset}><img src="/Reset.png" alt="Reset" className="w-10 px-1"/></button>
        </div> : ""
      }

     {(props.status === 2)? 
        <div>
          <button className="bg-white rounded-full relative overflow-hidden hover:scale-110 transition-transform duration-300"
                  onClick={props.resume}><img src="/start.png" alt="Start" className="w-10 px-1"/></button>
          <button className="bg-white rounded-full relative overflow-hidden hover:scale-110 transition-transform duration-300"
                  onClick={props.reset}><img src="/Reset.png" alt="Start" className="w-10 px-1"/></button>
        </div> : ""
      }
     
    </div>
  );
}

export default TimeButton;