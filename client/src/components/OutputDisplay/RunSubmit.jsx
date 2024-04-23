import React, { useContext, useEffect, useState } from "react";
import CodeEditorContext from "../../context/CodeEditorContext";
import axios from "axios";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useParams } from "react-router-dom";
import problems from "../../Data/problems";

const RunSubmit = ({ editorRef }) => {
  const { output, setOutput } = useContext(CodeEditorContext);
  const { submitOutput, setSubmitOutput } = useContext(CodeEditorContext);
  const { input, setInput, runResponse, setRunResponse } =
    useContext(CodeEditorContext);
  const { setActiveComponent } = useContext(CodeEditorContext);
  const [showAccepted, setShowAccepted] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const { language } = useContext(CodeEditorContext);

  const { problemId } = useParams();
  let problemIndex = 0;
  for (let i = 0; i < problems.length; i++) {
    if (problems[i].id === parseInt(problemId)) {
      problemIndex = i;
      break;
    }
  }
  const problem = problems[problemIndex];

  let api_input_run = problem["RunInput"];
  let api_input_submit = problem["SubmitInput"];
  async function runCode() {
    setActiveComponent("test result");
    setRunResponse(true);
    await makePostRequest(editorRef.current.getValue(), api_input_run);
    setRunResponse(false);
  }

  async function submitCode() {
    setActiveComponent("test result");
    setSubmitOutput(true);
    // let expected_output = problem['SubmitOutput'];
    await makePostRequest(editorRef.current.getValue(), api_input_submit);
    alert("Submitted");
  }

  useEffect(() => {
    if (!editorRef.current) return;
    if (language === "python") {
      editorRef.current.setValue(`# write your code here in ${language}`);
    } else {
      editorRef.current.setValue(`// write your code here in ${language}`);
    }

    if (!editorRef.current.getModel()) {
      return;
    }
    editorRef.current.getModel().setLanguage(language);
  }, [language]);

  const makePostRequest = async (code, inp) => {
    var lang = language;
    if (language == "python") {
      lang = "python3";
    }

    const options = {
      method: "POST",
      url: "https://online-code-compiler.p.rapidapi.com/v1/",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.REACT_APP_JUDGE0_API_KEY,
        "X-RapidAPI-Host": "online-code-compiler.p.rapidapi.com",
      },
      data: {
        language: lang,
        version: "latest",
        code: code,
        input: inp,
      },
    };

    try {
      const response = await axios.request(options);
      // Update the state with the response data
      if (inp == api_input_run) {
        setOutput(response.data);
      } else if (inp == api_input_submit) {
        // console.log("Total"+response.data);
        console.log("From API Response Data" + response.data.output);

        setSubmitOutput(response.data.output.split("\n"));
        console.log("submit output:" + submitOutput.output);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 rounded mt-1 mr-5 ml-3 float-left h-8"
        onClick={runCode}
      >
        Run
        <PlayArrowIcon />
      </button>
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 rounded mt-1 float-left h-8"
        onClick={submitCode}
      >
        Submit
      </button>
    </>
  );
};

export default RunSubmit;
