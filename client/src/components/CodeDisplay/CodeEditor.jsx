import React, { useContext, useEffect } from "react";
import { useRef } from "react";
import Editor from "@monaco-editor/react";
import CodeEditorContext from "../../context/CodeEditorContext";
import CodeEditorTop from "./CodeEditorTop";
import GlobalContext from "../../context/GlobalContext";
import { CPP_DEFAUTL_CODE } from "../../constants";
// import SubmitReport from "./sub-components/SubmitReport";

const CodeEditor = ({ socket, displayName, roomId, friendText }) => {
    const { theme, language } = useContext(CodeEditorContext);
    const { editorRef } = useContext(CodeEditorContext);
    const { username } = useContext(GlobalContext);

    // const editorRef = useRef(null);

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
    }

    useEffect(() => {
        if (socket == null) return;

        socket.emit("sendMessageToRoom", {
            room: roomId,
            message: CPP_DEFAUTL_CODE,
            from: username,
            to: username,
        });
    }, []);

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
                    defaultValue={CPP_DEFAUTL_CODE}
                    options={{
                        wordWrap: "on",
                    }}
                    // onMount={() => {
                    //   handleEditorDidMount();
                    //   if (socket == null) return;

                    //   socket.emit("sendMessageToRoom", {
                    //     room: roomId,
                    //     message: DEFAUTL_CODE,
                    //     from: username,
                    //     to: username,
                    //   });
                    // }}
                    onMount={handleEditorDidMount}
                    onChange={(value, event) => {
                        if (socket == null) return;

                        socket.emit("sendMessageToRoom", {   
                            room: roomId,
                            message: value,
                            from: username,
                            to: username,
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
