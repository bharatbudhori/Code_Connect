import { useParams } from "react-router-dom";
// import problems from "../../Data/problems";
import { Chip } from "@mui/material";
import GlobalContext from "../../context/GlobalContext";
import { useContext } from "react";

const QuestionDataDisplay = () => {
  const { problemId } = useParams();
  const {problems} = useContext(GlobalContext);
  let problemIndex = 0;
  for (let i = 0; i < problems.length; i++) {
    if (problems[i].id === parseInt(problemId)) {
      problemIndex = i;
      break;
    }
  }
  const problem = problems[problemIndex];
  return (
    <>
      <div className="quest whitespace-pre-line text-justify h-[88vh] overflow-y-scroll">
        <div className="flex items-center ">
          <Chip
            className={`text-sm font-bold px-6 py-4 whitespace-nowrap`}
            color={
              problem?.difficulty === "Easy"
                ? "success"
                : problem?.difficulty === "Medium"
                ? "warning"
                : "error"
            }
            label={problem?.difficulty}
            variant="filled"
            sx={{ color: "white" }}
          />
          <div className=" ml-5">
            {problem?.tags.map((tag, index) => (
              <Chip
                key={index}
                className="bg-gray m-1"
                variant="outlined"
                label={tag}
                sx={{ color: "white" }}
              />
            ))}
          </div>
        </div>
        <br />
        <div className="pr-5">
          <p>{problem?.description}</p>
          <br />
          <h6 className="text-10xl">
            <b>Input</b>
          </h6>
          <p>{problem?.input}</p>
          <br />
          <h6>
            <b>Output</b>
          </h6>
          <p>{problem?.output}</p>
          <br />
          <div>
            <h6>
              <b>Example</b>
            </h6>
            <b>Input</b>
            <p>{problem?.runInput}</p>
            <br />
            <b>Output</b>
            <p>{problem?.runOutput}</p>
            <br />
          </div>
          <h6>
            <b>Explanation</b>
          </h6>
          <p>{problem?.explanation}</p>
        </div>
      </div>
    </>
  );
};

export default QuestionDataDisplay;
