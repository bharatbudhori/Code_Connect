import React, {useContext} from 'react';
import { useRef } from 'react';
import Editor from '@monaco-editor/react';

import CodeEditorContext from '../context/CodeEditorContext';

const CodeEditor = () => {
  const {theme,language} = useContext(CodeEditorContext);

  function handleEditorChange(value, event) {
    console.log('here is the current model value:', value);
  }

  
  const editorRef = useRef(null);
  
  function handleEditorDidMount(editor, monaco) {
      editorRef.current = editor;
    }
    
    function submitCode() {
        alert(editorRef.current.getValue());
      }
      
  return (
    <>
      <Editor
        height="90vh"
        defaultLanguage= {language}
        defaultValue="// write your code here"
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
        theme = {`vs-${theme}`}
        sx={{ borderBottomLeftRadius:'8px',borderBottomLeftRadius:'8px' }}
      />
      <div style={{border: "2px solid white", backgroundColor: "green", color: "white", width:"50px", padding: "8px", borderRadius:"5px"}} onClick={submitCode}>submit</div>
    </>
  
  );
};

export default CodeEditor;

