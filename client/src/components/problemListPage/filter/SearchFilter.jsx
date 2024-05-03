import React from "react";
import { useContext, useEffect } from "react";
import ProblemContext from "../../../context/ProblemContext";

const SearchFilter = () => {
  const { searchFilter, setSearchFilter } = useContext(ProblemContext);
  const handleClick = () => {
    // console.log("searchFilter", searchFilter);
  };

  return (
    <>
      <div className="relative inline-block  ">
        <div className="flex flex-row">
          <input
            type="text"
            name="search"
            className=" w-60 sm:text-sm rounded-md bg-gray-800 focus:border-gray-800 outline-none pl-3 py-3"
            placeholder="Search"
            value={searchFilter}
            onChange={(e) => {
              setSearchFilter(e.target.value);
            }}
          />
        </div>
           
      </div>
    </>
  );
};

export default SearchFilter;
