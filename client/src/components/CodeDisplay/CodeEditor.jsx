import React, { useContext, useEffect } from "react";
import { useRef } from "react";
import Editor from "@monaco-editor/react";
import CodeEditorContext from "../../context/CodeEditorContext";
import CodeEditorTop from "./CodeEditorTop";
// import SubmitReport from "./sub-components/SubmitReport";

const CodeEditor = ({ socket, displayName, roomId, friendText }) => {
  const { theme, language } = useContext(CodeEditorContext);
  const { editorRef} = useContext(CodeEditorContext);

  // const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

//   useEffect(() => {
//     console.log(friendText);
// }, [friendText]);

  return (
    <div className="bg-gray-900 text-white">
      <CodeEditorTop
        socket={socket}
        roomId={roomId}
        displayName={displayName}
      />
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
              from : displayName,
              to : displayName,
            });
          }}
          theme={`vs-${theme}`}
          sx={{
            borderBottomLeftRadius: "8px",
          }}
        />
        {/* <RunSubmit editorRef={editorRef} /> */}
      </div>
    </div>
  );
};

export default CodeEditor;
