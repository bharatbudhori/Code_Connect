import React,{useState} from "react";
import  CodeEditorContext  from "./CodeEditorContext";


const CodeEditorProvider = ({ children }) => {
    
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("cpp");
    const [theme, setTheme] = useState("dark");
    const [output, setOutput] = useState(null);
    const [submitOutput, setSubmitOutput ] = useState(null);
    const [input, setInput] = useState(null);

    const [activeComponent, setActiveComponent] = useState('testcases');
    const [runResponse,setRunResponse] = useState(false);
    
    const value = {
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
        setRunResponse
    };
    
    return (
        
            <CodeEditorContext.Provider value={value}>
                {children}
            </CodeEditorContext.Provider>
       
    );
}
export default CodeEditorProvider;
