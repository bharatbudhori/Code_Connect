import React, { useContext } from "react";
// import TerminalIcon from "@mui/icons-material/Terminal";
import Testcases from "./OutputDisplay/Testcases";
import TestResult from "./OutputDisplay/TestResult";
import CodeEditorContext from "../context/CodeEditorContext";

const Output = () => {
  const { activeComponent, setActiveComponent } = useContext(CodeEditorContext);

  const showComponent = (component) => {
    setActiveComponent(component);
  };

  return (
    <div>
      hello
      <div className="pr-4 pl-4 pt-1 pb-2 bg-black text-gray-200">
        <div className="flex justify-between items-center">
          <div className="md:hidden block absolute top-4 right-8 fixed">
            <button
              aria-label="navigation"
              type="button"
              className="md:hidden text-gray-200 transition duration-300 focus:outline-none focus:text-white hover:text-white"
            >
              <i className="fas fa-bars text-3xl" id="bars" />{" "}
            </button>
          </div>
          {/* NAVIGATION - LARGE SCREENS */}
          <div className="hidden md:flex ml-8">
            <ul className="hidden md:flex">
              <li className="text-lg pr-8">
                <button
                  onClick={() => showComponent("testcases")}
                  className={`transition duration-300 ${
                    activeComponent === "testcases"
                      ? "text-yellow-500 underline"
                      : ""
                  } focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500`}
                  style={{ textUnderlineOffset: "8px" }}
                >
                  Test Case
                </button>
              </li>
              <li className="text-lg pr-8">
                <button
                  onClick={() => showComponent("test result")}
                  className={`transition duration-300 ${
                    activeComponent === "test result"
                      ? "text-yellow-500 underline"
                      : ""
                  } focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500`}
                  style={{ textUnderlineOffset: "8px" }}
                >
                  Result
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* MOBILE MENU */}
        <div
          id="mobileMenu"
          className="hidden flex w-full mx-auto py-8 text-center"
        >
          <div className="flex flex-col justify-center items-center w-full">
            <a
              href="#"
              className="block text-gray-200 cursor-pointer py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
              style={{ textUnderlineOffset: "8px" }}
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
              style={{ textUnderlineOffset: "8px" }}
            >
              About
            </a>
            <a
              href="#"
              className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
              style={{ textUnderlineOffset: "8px" }}
            >
              Blog
            </a>
            <a
              href="#"
              className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
              style={{ textUnderlineOffset: "8px" }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      {activeComponent === "testcases" && <Testcases />}
      {activeComponent === "test result" && <TestResult />}
    </div>
  );
};

export default Output;
