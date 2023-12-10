import React from 'react'
import problems from "../Data/problems";
import { useParams } from 'react-router-dom';

const Testcases = () => {

  const { problemId } = useParams();
  let problemIndex = 0;
  for (let i = 0; i < problems.length; i++) {
      if (problems[i].id === parseInt(problemId)) {
          problemIndex = i;
          break;
      }
  }
  const problem = problems[problemIndex];
  const op1 = problem['testCases'][0]['expectedOutput'];
  const op2 = problem['testCases'][1]['expectedOutput'];



  const DisplayData = ({ op1 }) => {
    const renderValue = (value) => <span>{value}</span>;
  
    const renderArray = (array) => (
      <div>
        {array.map((item, index) => (
          <span key={index}>{item} </span>
        ))}
      </div>
    );
  
    const renderMatrix = (matrix) => (
      <div>
        {matrix.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((item, colIndex) => (
              <span key={`${rowIndex}-${colIndex}`}>{item} </span>
            ))}
          </div>
        ))}
      </div>
    );
  
    const type = typeof op1;
  
    switch (type) {
      case 'string':
        return renderValue(op1);
      case 'number':
        return renderValue(op1.toString());
      case 'object':
        if (Array.isArray(op1[0])) {
          return renderMatrix(op1);
        } else  {
          return renderArray(op1);
        }
        break;
      case 'boolean':
        return renderValue(op1.toString());
        break;
      default:
        // Handle other data types
        return <p>Unsupported data type</p>;
    }
  };

  return (
    <div class="text-white w-full h-96 bg-black px-4 py-2">
       CASE 1:
       <p>
        <DisplayData op1={op1} />
      </p>
      CASE 2:
      <p>
        <DisplayData op1={op2} />
      </p>
    </div>
  )
}

export default Testcases