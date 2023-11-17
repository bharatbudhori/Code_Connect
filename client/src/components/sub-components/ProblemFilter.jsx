import React from "react";
import DifficultyFilter from "./DifficultyFilter";
import StatusFilter from "./StatusFilter";
import Tags from "./Tags";

function ProblemFilter() {
  return (
    <div
      className="flex flex-row justify-start gap-5"
    >
      <DifficultyFilter />
      <StatusFilter />
      <Tags />
    </div>
  );
}

export default ProblemFilter;
