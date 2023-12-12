import React,{useState} from "react";
import  CodeEditorContext  from "./CodeEditorContext";


const CodeEditorProvider = ({ children }) => {
    
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("cpp");
    const [theme, setTheme] = useState("dark");
    const [output1, setOutput1] = useState(null);
    const [output2, setOutput2] = useState(null);
    const [input1, setInput1] = useState(null);
    const [input2, setInput2] = useState(null);
    const [roomCreated, setRoomCreated] = useState(false);
    const [activeComponent, setActiveComponent] = useState('testcases');
    const [runResponse,setRunResponse] = useState(false);
    
    const value = {
        code,
        setCode,
        language,
        setLanguage,
        theme,
        setTheme,
        output1,
        setOutput1,
        output2,
        setOutput2,
        input1,
        setInput1,
        input2,
        setInput2,
        roomCreated,
        setRoomCreated,
        activeComponent,
        setActiveComponent,
        runResponse,
        setRunResponse
    };
    
    return (
        
            <CodeEditorContext.Provider value={value}>
                {children}
            </CodeEditorContext.Provider>
       
    );
}
export default CodeEditorProvider;
