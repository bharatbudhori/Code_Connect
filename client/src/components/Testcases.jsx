import React, { useEffect } from 'react'
import problems from "../Data/problems";
import { useParams } from 'react-router-dom';

const Testcases = () => {

  const { problemId } = useParams();
  let problemIndex = 0;
  for (let i = 0; i < problems.length; i++) {
      if (problems[i].id === parseInt(problemId)) {
          problemIndex = i;
          break;
      }
  }
  const problem = problems[problemIndex];
  
  const tc1 = problem['testCases'][0]['inputs'][0]['value'];
  const tc2 = problem['testCases'][1]['inputs'][0]['value'];  

  const DisplayObjectAsIs = ({ myObject }) => (
    <pre>{JSON.stringify(myObject)}</pre>
  );

  return (
    <div class="text-white w-full h-96 bg-black px-4 py-2">
       CASE 1:
       <p>
        {/* {problem['testCases'][0]['inputs'][0]['value'].map((tc, index) => (
          
          <span key={index}>{tc}, </span>
        ))} */}
        <DisplayObjectAsIs myObject={tc1} />
      </p>
      CASE 2:
      <p>
        <DisplayObjectAsIs myObject={tc1} />
      </p>
    </div>
  )
}

export default Testcases