import React from "react";
import DifficultyFilter from "./DifficultyFilter";
import StatusFilter from "./StatusFilter";
import Tags from "./Tags";

function ProblemFilter() {
  return (
    <>
      <DifficultyFilter />
      <StatusFilter />
      <Tags />
    </>
  );
}

export default ProblemFilter;
