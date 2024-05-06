import React, { useContext, useEffect } from "react";
import CodeEditorContext from "../../context/CodeEditorContext";
import axios from "axios";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useParams } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";
import { serverUrl } from "../../constants";
// import problems from "../../Data/problems";

const RunSubmit = ({ editorRef }) => {
  const { setRunResponse, setSubmitResponse, setSubmitOutput, setOutput } =
    useContext(CodeEditorContext);
  const { setActiveComponent } = useContext(CodeEditorContext);
  // const [showAccepted, setShowAccepted] = useState(false);
  // const [accepted, setAccepted] = useState(false);
  const { language } = useContext(CodeEditorContext);
  const { problems } = useContext(GlobalContext);

  const { problemId } = useParams();
  let problemIndex = 0;
  for (let i = 0; i < problems.length; i++) {
    if (problems[i].id === parseInt(problemId)) {
      problemIndex = i;
      break;
    }
  }
  const problem = problems[problemIndex];

  let api_input_run = problem?.runInput;
  let api_input_submit = problem?.submitInput;

  async function runCode() {
    setActiveComponent("test result");
    setRunResponse(true);
    await makePostRequest(
      editorRef.current.getValue(),
      api_input_run,
      language,
      "run"
    );
    setRunResponse(false);
  }

  async function submitCode() {
    setActiveComponent("submit result");
    setSubmitResponse(true);
    await makePostRequest(
      editorRef.current.getValue(),
      api_input_submit,
      language,
      "submit"
    );
    // alert("Submitted");
    setSubmitResponse(false);
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

  const makePostRequest = async (code, inp, language, reqType) => {
    // var lang = language;
    // if (language === "python") {
    //   lang = "python3";
    // }

    // const options = {
    //   method: "POST",
    //   url: "https://online-code-compiler.p.rapidapi.com/v1/",
    //   headers: {
    //     "content-type": "application/json",
    //     "X-RapidAPI-Key": process.env.REACT_APP_JUDGE0_API_KEY,
    //     "X-RapidAPI-Host": "online-code-compiler.p.rapidapi.com",
    //   },
    //   data: {
    //     language: lang,
    //     version: "latest",
    //     code: code,
    //     input: inp,
    //   },
    // };

    try {
      const response = await axios.post(serverUrl + "api/run-submit", {
        code: code,
        input: inp,
        language: language,
        reqType: reqType,
      });
      // Update the state with the response data
      if (inp === api_input_run) {
        setOutput(response.data);
      } else if (inp === api_input_submit) {
        // console.log("From API Response Data" + response.data);

        setSubmitOutput(response.data);
        // console.log("submit output:" + submitOutput.output);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="pt-1 flex justify-end">
        <div className="">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 rounded  mr-5 h-8"
            onClick={runCode}
          >
            Run
            <PlayArrowIcon />
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 mr-3 rounded  h-8"
            onClick={submitCode}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default RunSubmit;
