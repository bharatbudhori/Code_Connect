import React, {useContext} from "react";
import OutputTop from "./OutputTop";
import Testcases from "./Testcases";
import TestResult from "./TestResult";
import SubmitResult from "./SubmitResult";
import CodeEditorContext from "../../context/CodeEditorContext";

const Output = () => {

  const { activeComponent, setActiveComponent } = useContext(CodeEditorContext);

  return (
    <div>
      <OutputTop/>
      <div className="text-white w-full px-4 py-2 whitespace-pre-line border  h-[32vh] overflow-y-scroll">
          {activeComponent === "testcases" && <Testcases />}
          {activeComponent === "test result" && <TestResult />}
          {activeComponent === "submit result" && <SubmitResult />}
      </div>
    </div>
  );
};

export default Output;
