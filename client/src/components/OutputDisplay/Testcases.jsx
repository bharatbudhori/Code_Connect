import React from "react";
import problems from "../../Data/problems";
import { useParams } from "react-router-dom";

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
    <div>
      {problem["RunInput"]}
    </div>
  );
};

export default Testcases;
