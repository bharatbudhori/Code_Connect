import React,{useEffect} from "react";
import ProblemList from "./sub-components/ProblemList";
import ProblemContext from "../context/ProblemContext";
import problemsD from "../Data/problems";

function ProblemSet() {
  const { problems, setProblems } = React.useContext(ProblemContext);
  useEffect(() => {
    setProblems(problemsD);
  }, []);

  const handleClick = () => {
    console.log("test handle click");
    const newData = problems.filter((problem) => problem.id === 22);
    console.log(newData);
    setProblems(newData);
    console.log("i was reached");
  };
  React.useEffect(() => {
    console.log("Updated Problems:", problems);
  }, [problems]);

  return (
    <>
      {/* <button
      onClick={handleClick}
      > test</button> */}
      <ProblemList />      {/* iske andar problemFilter hai */}
    </>
  );
}

export default ProblemSet;
