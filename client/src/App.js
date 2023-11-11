import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import CodeEnviornment from './components/CodeEnviornment';
import Navbar from './components/Navbar';
import Test from './components/Test';


import  CodeEditorProvider  from './context/CodeEditorProvider';

function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx = {{ backgroundColor: "#0f0f0f", color: "white" }}>
          <Navbar /> 
          
          <Test />

          <Routes>
            <Route path="/code_env" element={
              <CodeEditorProvider>
                <CodeEnviornment />
              </CodeEditorProvider>
           
            } />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
