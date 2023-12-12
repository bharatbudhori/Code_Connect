import React, { useContext, useState, useEffect } from 'react';
import CodeEditorContext from "../context/CodeEditorContext";

const YourOutput = () => {
    const { output1, setOutput1 } = useContext(CodeEditorContext);
    const { output2, setOutput2,runResponse, setRunResponse } = useContext(CodeEditorContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulating an API call delay for demonstration purposes
      const delay = setTimeout(() => {
        setLoading(false);
      }, 0);  //2000);
  
      return () => clearTimeout(delay); // Cleanup on component unmount
    }, []);

  return (
    <div className="text-white w-full h-96 bg-black px-4 py-2">
      {runResponse ? (
        // Shimmer loading effect
        <div className="shimmer">
          Loading...
        </div>
      ) : (
        // Actual content
        <div>
          CASE1 :
          {output1 !== null && (
            <>
              <p>{output1.output}</p>
              <div className="text-slate-400">
                <p>Memory: {output1.memory}</p>
                <p>CPU Time: {output1.cpuTime}</p>
              </div>
            </>
          )}
          <br />
          CASE2:
          {output2 !== null && (
            <>
              <p>{output2.output}</p>
              <div className="text-slate-400">
                <p>Memory: {output2.memory}</p>
                <p>CPU Time: {output2.cpuTime}</p>
              </div>
            </>
          )}
          <br />
        </div>

      )}
    </div>
  )
}

export default YourOutput