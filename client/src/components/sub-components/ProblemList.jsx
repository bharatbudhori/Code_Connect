import React, { useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ProblemContext from "../../context/ProblemContext";
import {statusList  } from "../../Data/problems";

function ProblemList() {
  const { problems, filteredProblems } = useContext(ProblemContext);
  return (
    <>
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray border-b">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4 text-left"
                >
                Status
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4 text-left"
              >
                Title
              </th>
             
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4 text-left"
                >
                Solution
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4 text-left"
                >
                Difficulty
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4 text-left"
              >
                Tags
              </th>
            </tr>
          </thead>
               
          <tbody>
            {filteredProblems.map((problem, index) => (
              <tr
                key={uuidv4()}
                className={`border-b hover:text-green hover:bg-gray-800 ${
                  index % 2 === 0 ? "bg-gray" : "bg-neutral-800"
                }  `}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  {/* {problem.status} */}
                  <CheckCircleOutlineIcon
                    style={{
                      color: statusList.includes(index) ? "green" : "inherit",
                    }}
                  />
                </td>
                <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                  {problem.id + ". " + problem.title}
                </td>

                <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                  <a href={problem.video} target="_blank" rel="noreferrer">
                    {" "}
                    {/* {problem.solution} */}
                    <YouTubeIcon className="hover:text-red-500" />
                  </a>
                </td>
                <td
                  className={`text-sm font-light px-6 py-4 whitespace-nowrap ${
                    problem.difficulty === "Easy"
                      ? "text-green-500"
                      : problem.difficulty === "Medium"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {problem.difficulty}
                </td>
                <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                  {problem.tags.map((tag) => (
                    <span
                      key={uuidv4()}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-white mr-2"
                    >
                      {tag}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
      
    </>
  );
}

export default ProblemList;
