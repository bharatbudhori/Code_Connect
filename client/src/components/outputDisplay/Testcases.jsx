import React, { useContext } from "react";
// import problems from "../../Data/problems";
import { useParams } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";

const Testcases = () => {
  const { problemId } = useParams();
  const {problems} = useContext(GlobalContext);
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
      {problem?.runInput}
    </div>
  );
};

export default Testcases;
