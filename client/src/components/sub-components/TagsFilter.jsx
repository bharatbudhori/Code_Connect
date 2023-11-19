import { useState, useContext } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Chip from "@mui/material/Chip";
import ProblemContext from "../../context/ProblemContext";
import { v4 as uuid4 } from "uuid";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TagsFilter() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { allProblems } = useContext(ProblemContext);

  function getUniqueTags(problems) {
    const uniqueTagsSet = new Set();

    // Iterate over each problem and add its tags to the set
    problems.forEach((problem) => {
      const tags = problem.tags || [];

      tags.forEach((tag) => {
        uniqueTagsSet.add(tag);
      });
    });

    // Convert the set to an array to get the unique tags
    const uniqueTagsArray = Array.from(uniqueTagsSet);

    return uniqueTagsArray;
  }

  const uniqueTags = getUniqueTags(allProblems);
  // console.log(uniqueTags);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <Menu as="div" className="relative inline-block text-left mt-12">
      <div>
        <Menu.Button
          onClick={toggleMenu}
          className="inline-flex w-35 justify-left gap-x-12 rounded-md bg-gray-800 px-4 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-gray-700 active:bg-gray-800 hover:bg-gray-700 "
        >
          Tags
          <span
            style={{
              transition: "transform 0.3s ease-out", // Adjust the duration and easing as needed
              transform: `rotate(${menuOpen ? "180deg" : "0deg"})`,
              display: "inline-block",
              transformOrigin: "center",
            }}
          >
            <ChevronDownIcon
              className="mr-0 h-5 w-5 ml-auto text-gray-400 "
              aria-hidden="true"
            />
          </span>
        </Menu.Button>
      </div>
      <Transition
        show={menuOpen}
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          style={{ width: "500px" }}
          className="absolute left-0 z-10 mt-2 origin-top-right p-5 rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          onClick={toggleMenu}
        >
          <div className="py-1">
            <div className="flex flex-wrap gap-2">
              {uniqueTags.map((tag) => (
                <Menu.Item key={uuid4()}>
                  <Chip
                    key={tag}
                    label={tag}
                    variant="outlined"
                    sx={{
                        color: "white",
                      }}
                  />
                </Menu.Item>
              ))}
            </div>
          </div>
        </Menu.Items>
      </Transition>
         
    </Menu>
  );
}
