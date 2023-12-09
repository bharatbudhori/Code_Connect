import React from 'react'
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
  // console.log(problem);

  console.log(problem['testCases'][0]['inputs'][0]['value']);

  return (
    <div class="text-white w-full h-96 bg-black px-4 py-2">
       CASE 1:
       <p>
        {problem['testCases'][0]['inputs'][0]['value'].map((tc, index) => (
          
          <span key={index}>{tc}, </span>
        ))}
      </p>
      CASE 2:
      <p>
        {problem['testCases'][1]['inputs'][0]['value'].map((tc, index) => (
          
          <span key={index}>{tc}, </span>
        ))}
      </p>
    </div>
  )
}

export default Testcases