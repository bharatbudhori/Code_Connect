import React, { useEffect, useState } from "react";
import DifficultyFilter from "./DifficultyFilter";
import StatusFilter from "./StatusFilter";
import ProblemContext from "../../context/ProblemContext";
import CancelIcon from "@mui/icons-material/Cancel";
import TagsFilter from "./TagsFilter";
import SearchFilter from "./SearchFilter";

function ProblemFilter() {
  const {
    selectedDifficulty,
    setSelectedDifficulty,
    setFilteredProblems,
    allProblems,
  } = React.useContext(ProblemContext);
  useEffect(() => {
    if (selectedDifficulty === "All") {
      setFilteredProblems(allProblems);
    } else {
      const newData = allProblems.filter(
        (problem) => problem.difficulty === selectedDifficulty
      );
      setFilteredProblems(newData);
    }
  }, [selectedDifficulty]);

  return (
    <>
      <div className="space-x-3">
        <DifficultyFilter />
        <StatusFilter />
        <TagsFilter />
        <SearchFilter />
      </div>
      <div className="space-x-3">
        {selectedDifficulty !== "All" ? (
          <button
            type="button"
            className=" px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700  focus:bg-gray-500"
            onClick={() => {
              window.location.reload();
            }}
          >
            Clear All Filters
          </button>
        ) : // </div>
        null}

        {selectedDifficulty !== "All" ? (
          <div
            className={` gap-x-12 inline px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm  bg-gray-800
            ${
              selectedDifficulty === "Easy"
                ? "text-green-500"
                : selectedDifficulty === "Medium"
                ? "text-yellow-500"
                : "text-red-500"
            }
            `}
          >
            <span className="mr-3">{selectedDifficulty}</span>
            <span className="">
              <CancelIcon
                fontSize="small"
                className=" text-gray-500 hover:text-gray-300 mb-1"
                onClick={() => {
                  setSelectedDifficulty("All");
                }}
              />
            </span>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default ProblemFilter;