import React, { useContext } from "react";
// import TerminalIcon from "@mui/icons-material/Terminal";
import Testcases from "./Testcases";
import TestResult from "./TestResult";
import CodeEditorContext from "../../context/CodeEditorContext";

const Output = () => {
  const { activeComponent, setActiveComponent } = useContext(CodeEditorContext);

  const showComponent = (component) => {
    setActiveComponent(component);
  };

  return (
    <div>
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
      </div>
      <div className="text-white w-full h-full  px-4 py-2 whitespace-pre-line border">
        {activeComponent === "testcases" && <Testcases />}
        {activeComponent === "test result" && <TestResult />}
      </div>
    </div>
  );
};

export default Output;
