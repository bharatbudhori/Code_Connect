import React, { useContext } from "react";
import Testcases from "./Testcases";
import TestResult from "./TestResult";
import CodeEditorContext from "../../context/CodeEditorContext";
// import TerminalIcon from "@mui/icons-material/Terminal";
import RunSubmit from "./RunSubmit";


const OutputTop = () => {
  const { activeComponent, setActiveComponent } = useContext(CodeEditorContext);

  const showComponent = (component) => {
    setActiveComponent(component);
  };

    
    return (
      <div>
        <div className="pl-4 pt-1 pb-2 bg-black text-gray-200">
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
            <div className="hidden md:flex ml-1">
              <ul className="hidden md:flex">
                <li className="text-lg pr-8">
                  <button
                    onClick={() => showComponent("testcases")}
                    className={`transition duration-300 ${
                      activeComponent === "testcases"
                        ? "text-yellow-500"
                        : ""
                    } focus:outline-none focus:text-yellow-500 hover:text-yellow-500`}
                  >
                    Test Case
                  </button>
                </li>
                <li className="text-lg pr-8">
                  <button
                    onClick={() => showComponent("test result")}
                    className={`transition duration-300 ${
                      activeComponent === "test result"
                        ? "text-yellow-500"
                        : ""
                    } focus:outline-none focus:text-yellow-500 hover:text-yellow-500`}
                  >
                   Test Result
                  </button>
                </li>
                <li className="text-lg pr-8">
                  <button
                    onClick={() => showComponent("submit result")}
                    className={`transition duration-300 ${
                      activeComponent === "submit result"
                        ? "text-yellow-500"
                        : ""
                    } focus:outline-none focus:text-yellow-500 hover:text-yellow-500`}
                  >Submit Result
                  </button>
                </li>
              </ul>
            </div>
            <RunSubmit  />
          </div>
        </div>
        
      </div>
    );
}

export default OutputTop