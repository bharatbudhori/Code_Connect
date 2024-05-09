import React, { useContext, useEffect } from "react";
import { useRef } from "react";
import Editor from "@monaco-editor/react";
import CodeEditorContext from "../../context/CodeEditorContext";
import GlobalContext from "../../context/GlobalContext";
const FriendCodeEditor = ({language}) => {
    const { theme } = useContext(CodeEditorContext);

    const {
        friendText, 
        memberCount,
        memberIndex
    } = useContext(GlobalContext);

    const editorRef = useRef(null);

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
    }

    useEffect(() => {
        if (editorRef.current && friendText[memberCount[memberIndex]]) editorRef.current.setValue(friendText[memberCount[memberIndex]] ?? "");
        // console.log(memberIndex)
        console.log(memberCount[memberIndex])
    }, [friendText, memberIndex]);

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
