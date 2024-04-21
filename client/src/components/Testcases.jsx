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
  
  return (
    <div className="text-white w-full h-full bg-orange-800 px-4 py-2 whitespace-pre-line overflow-y-scroll">
       {problem['RunInput']}
    </div>
  )
}

export default Testcases