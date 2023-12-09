import React, { useContext, useEffect } from "react";
import { useRef } from "react";
import axios from "axios";
import Editor from "@monaco-editor/react";
import CodeEditorContext from "../context/CodeEditorContext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { tempCode } from "../constants";

const CodeEditor = ({ socket, displayName, roomId }) => {
    const { theme, language } = useContext(CodeEditorContext);
    const { output1, setOutput1 } = useContext(CodeEditorContext);
    const { input1, setInput1 } = useContext(CodeEditorContext);
    const { input2, setInput2 } = useContext(CodeEditorContext);
    const { setActiveComponent } = useContext(CodeEditorContext);

    let api_input1 = input1?.length.toString() + " ";
    for (let i = 0; i < input1?.length; i++) {
        api_input1 += input1[i].toString() + " ";
    }
    
    let api_input2 = input2?.length.toString() + " ";
    for (let i = 0; i < input2?.length; i++) {
        api_input2 += input2[i].toString() + " ";
    }


    const editorRef = useRef(null);

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
    }

    function runCode() {
        setActiveComponent('your output');
        makePostRequest(editorRef.current.getValue(), api_input1);
        // alert(editorRef.current.getValue());
    }

    useEffect(() => {
        if (!editorRef.current) return;
        // console.log("language changed to", language);
        if (language === "python") {
            editorRef.current.setValue(`# write your code here in ${language}`);
        } else {
            editorRef.current.setValue(
                `// write your code here in ${language}`
            );
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

        // console.log("code is", code);
        // console.log("language is", lang);

        const options = {
            method: "POST",
            url: "https://online-code-compiler.p.rapidapi.com/v1/",
            headers: {
                "content-type": "application/json",
                "X-RapidAPI-Key":
                    '66a9b6e7efmsh8aa6861c18afda4p100301jsn9a62dc2544a0',
                "X-RapidAPI-Host": "online-code-compiler.p.rapidapi.com",
            },
            data: {
                language: lang,
                version: "latest",
                code: code,
                input: api_input1,
            },
        };

        try {
            const response = await axios.request(options);
            // Update the state with the response data
            setOutput1(response.data);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="bg-gray-900 text-white ">
            <div className="bg-gray-900 h-[600edpx]">
                <Editor
                    height="90vh"
                    defaultLanguage={language}
                    // defaultValue={`// write your code here in ${language}`}
                    defaultValue= {tempCode}
                    onMount={handleEditorDidMount}
                    onChange={(value, event) => {
                        socket.emit("sendMessageToRoom", {
                            room: roomId,
                            message: value,
                            displayName,
                        });
                    }}
                    theme={`vs-${theme}`}
                    sx={{
                        borderBottomLeftRadius: "8px",
                        borderBottomLeftRadius: "8px",
                    }}
                />
                <button
                    class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-10"
                    onClick={runCode}
                >
                    Run Code
                    <PlayArrowIcon />
                </button>
                <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default CodeEditor;
