import React, { useContext, useState, useEffect } from 'react';
import CodeEditorContext from "../context/CodeEditorContext";

const YourOutput = () => {
    const { output1, setOutput1 } = useContext(CodeEditorContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulating an API call delay for demonstration purposes
      const delay = setTimeout(() => {
        setLoading(false);
      }, 2000);
  
      return () => clearTimeout(delay); // Cleanup on component unmount
    }, []);

  return (
    <div className="text-white w-full h-96 bg-black px-4 py-2">
      {loading ? (
        // Shimmer loading effect
        <div className="shimmer">
          <div className="shimmer-line"></div>
          <div className="shimmer-line"></div>
          <div className="shimmer-line"></div>
        </div>
      ) : (
        // Actual content
        <div>
          CASE1:
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
        </div>

      )}
    </div>
  )
}

export default YourOutput