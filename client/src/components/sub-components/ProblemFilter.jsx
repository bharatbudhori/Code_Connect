import React, { useEffect, useState } from "react";
import DifficultyFilter from "./DifficultyFilter";
import StatusFilter from "./StatusFilter";
import ProblemContext from "../../context/ProblemContext";
import CancelIcon from "@mui/icons-material/Cancel";
import TagsFilter from "./TagsFilter";
import SearchFilter from "./SearchFilter";
import {statusList} from "../../Data/problems";

function ProblemFilter() {
  const {
    filteredProblems,
    selectedDifficulty,
    setSelectedDifficulty,
    setFilteredProblems,
    allProblems,
    searchFilter,
    setSearchFilter,
    tagsFilter,
    setTagsFilter,
    statusFilter,
    setStatusFilter,
  } = React.useContext(ProblemContext);
  useEffect(() => {
    setFilteredProblems(allProblems);
    let newData = allProblems;
    if (selectedDifficulty !== "All") {
      newData = allProblems.filter(
        (problem) => problem.difficulty === selectedDifficulty
      );
    }
    if (searchFilter !== "") {
      newData = newData.filter((problem) =>
        problem.title.toLowerCase().includes(searchFilter.toLowerCase())
      );
    }
    if (tagsFilter.length > 0 && tagsFilter.includes("All") === false) {
      tagsFilter.forEach((tag) => {
        newData = newData.filter((problem) => problem.tags.includes(tag));
      });
    }
    if (statusFilter !== "All") {
      // newData = newData.filter((problem) => problem.status === statusFilter);
      if(statusFilter==="Solved"){
        newData = newData.filter((problem) => statusList.includes(problem.id));
      }
      else if(statusFilter==="Unsolved"){
        newData = newData.filter((problem) => !statusList.includes(problem.id));
      }
      
    }
    setFilteredProblems(newData);
  }, [selectedDifficulty, searchFilter, tagsFilter,statusFilter]);

  return (
    <>
      <div className="space-x-3">
        <DifficultyFilter />
        <StatusFilter />
        <TagsFilter />
        <SearchFilter />
      </div>
      {/* {console.log(allFilters)} */}
      <div className="space-x-3">
        {selectedDifficulty !== "All" ||
        searchFilter !== "" ||
        statusFilter !== "All" ||
        tagsFilter.length > 0 ? (
          // ||
          // allFilters.status !== "All" ||
          // allFilters.tags.length > 0
          // <div className="flex flex-row ">
          <button
            type="button"
            className=" px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700  focus:bg-gray-500"
            onClick={() => {
              setSelectedDifficulty("All");
              setSearchFilter("");
              setTagsFilter([]);
              setStatusFilter("All");
              setStatusFilter("All");
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
        {console.log(statusFilter)}
        {statusFilter !== "All" ? (
          <div
            className={` gap-x-12 inline px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm  bg-gray-800
            ${
              statusFilter === "Solved"
                ? "text-green-500"
                : statusFilter === "Unsolved"
                ? "text-yellow-500"
                : "text-red-500"
            }
              `}
          >
            <span className="mr-3">{statusFilter}</span>
            <span className="">
              <CancelIcon
                fontSize="small"
                className=" text-gray-500 hover:text-gray-300 mb-1"
                onClick={() => {
                  setStatusFilter("All");
                }}
              />
            </span>
          </div>
        ) : null}

        {searchFilter !== "" ? (
          <div
            className={` gap-x-12 inline px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm  bg-gray-800
            `}
          >
            <span className="mr-3">{searchFilter}</span>
            <span className="">
              <CancelIcon
                fontSize="small"
                className=" text-gray-500 hover:text-gray-300 mb-1"
                onClick={() => {
                  setSearchFilter("");
                }}
              />
            </span>
          </div>
        ) : null}
        {console.log(tagsFilter)}
        {tagsFilter.length > 0 && tagsFilter.includes("All") === false
          ? tagsFilter.map((tag) => (
              <div
                key={tag}
                className={` gap-x-12 inline px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm  bg-gray-800
            `}
              >
                <span className="mr-3">{tag}</span>
                <span className="">
                  <CancelIcon
                    fontSize="small"
                    className=" text-gray-500 hover:text-gray-300 mb-1"
                    onClick={() => {
                      setTagsFilter(tagsFilter.filter((t) => t !== tag));
                    }}
                  />
                </span>
              </div>
            ))
          : null}
      </div>
    </>
  );
}

export default ProblemFilter;