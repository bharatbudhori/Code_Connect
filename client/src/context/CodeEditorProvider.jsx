import React, { useState, useRef } from "react";
import CodeEditorContext from "./CodeEditorContext";

const CodeEditorProvider = ({ children }) => {
  const editorRef = useRef(null);
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("cpp");
  const [theme, setTheme] = useState("dark");
  const [output, setOutput] = useState(null);
  const [submitOutput, setSubmitOutput] = useState(null);
  const [input, setInput] = useState(null);

  const [activeComponent, setActiveComponent] = useState("testcases");
  const [runResponse, setRunResponse] = useState(false);
  const [submitResponse, setSubmitResponse] = useState(false);

  const value = {
    editorRef,
    code,
    setCode,
    language,
    setLanguage,
    theme,
    setTheme,
    output,
    setOutput,
    submitOutput,
    setSubmitOutput,
    input,
    setInput,
    activeComponent,
    setActiveComponent,
    runResponse,
    setRunResponse,
    submitResponse,
    setSubmitResponse,
  };

  return (
    <CodeEditorContext.Provider value={value}>
      {children}
    </CodeEditorContext.Provider>
  );
};
export default CodeEditorProvider;
