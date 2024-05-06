import React, { useContext, useEffect } from "react";
import { useRef } from "react";
import Editor from "@monaco-editor/react";
import CodeEditorContext from "../../context/CodeEditorContext";
const FriendCodeEditor = ({ friendText, language, memberCount }) => {
    const { theme } = useContext(CodeEditorContext);

    const editorRef = useRef(null);

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
    }

    useEffect(() => {
        if (editorRef.current && friendText[memberCount[1]]) editorRef.current.setValue(friendText[memberCount[1]] ?? "");
    }, [friendText]);

    useEffect(() => {
        if (editorRef.current && language)
            editorRef.current.getModel().setLanguage(language);
    }, [language]);

    return (
        <>
            <Editor
                height="90vh"
                defaultLanguage={language}
                // defaultValue={`// write your code here in ${language}`}
                onMount={handleEditorDidMount}
                theme={`vs-${theme}`}
                sx={{
                    borderBottomLeftRadius: "8px",
                    borderBottomLeftRadius: "8px",
                }}
            />
        </>
    );
};

export default FriendCodeEditor;
