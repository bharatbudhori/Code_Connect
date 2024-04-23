import React, { useContext } from "react";
import { useRef } from "react";
import Editor from "@monaco-editor/react";
import RunSubmit from "./OutputDisplay/RunSubmit";
import CodeEditorContext from "../context/CodeEditorContext";
// import SubmitReport from "./sub-components/SubmitReport";

const CodeEditor = ({ socket, displayName, roomId }) => {
  const { theme, language } = useContext(CodeEditorContext);

  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  return (
    <div className="bg-gray-900 text-white">
      <div className="bg-gray-900 h-[600edpx]">
        {/* <SubmitReport
          accepted={accepted}
          showAccepted={showAccepted}
          setShowAccepted={setShowAccepted}
        /> */}
        <Editor
          height="44vh"
          defaultLanguage={language}
          defaultValue={`// write your code here in ${language}`}
          onMount={handleEditorDidMount}
          onChange={(value, event) => {
            if (socket == null) return;

            socket.emit("sendMessageToRoom", {
              room: roomId,
              message: value,
              displayName,
            });
          }}
          theme={`vs-${theme}`}
          sx={{
            borderBottomLeftRadius: "8px",
          }}
        />
        <RunSubmit editorRef={editorRef} />
      </div>
    </div>
  );
};

export default CodeEditor;
