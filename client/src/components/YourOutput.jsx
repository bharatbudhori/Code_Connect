import React, { useContext, useState, useEffect } from 'react';
import CodeEditorContext from "../context/CodeEditorContext";

const YourOutput = () => {
    const { output, setOutput } = useContext(CodeEditorContext);
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
        <>
          {output !== null && (
            <>
              <p>{output.output}</p>
              <br /><br />
              <div className="text-slate-400">
                <p>Memory: {output.memory}</p>
                <p>CPU Time: {output.cpuTime}</p>
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default YourOutput