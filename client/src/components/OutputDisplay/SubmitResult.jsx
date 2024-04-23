import React, { useContext } from "react";
import CodeEditorContext from "../../context/CodeEditorContext";
// import problems from "../../Data/problems";
// import { useParams } from "react-router-dom";

const SubmitResut = () => {
  const { submitOutput, setSubmitOutput } = useContext(CodeEditorContext);
  // const checkResult = function (){
  //     const SubmitSplit = submitOutput.split("\n");
  //     console.log(SubmitSplit);

  // }
  // const SubmitSplit = submitOutput.split("\n");
  return (
    <>
      <div>
        <b>Test Case</b>
        <br />
        {
          // checkResult()
        }{" "}
        out of 5 are working
      </div>
    </>
  );
};

export default SubmitResut;
