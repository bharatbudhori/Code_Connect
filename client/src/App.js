import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import CodeEnviornment from "./components/CodeEnviornment";
import Navbar from "./components/Navbar";

import CodeEditorProvider from "./context/CodeEditorProvider";
import { useState } from "react";
import Room from "./components/room";

function App() {
    return (
        <BrowserRouter>
            <Box sx={{ backgroundColor: "#0f0f0f", color: "white" }}>
                <Navbar />

                <Routes>
                    <Route
                        path="/code_env"
                        element={
                            <CodeEditorProvider>
                                <CodeEnviornment />
                            </CodeEditorProvider>
                        }
                    />
                    <Route path="/room" element={<Room />} />
                </Routes>
            </Box>
        </BrowserRouter>
    );
}

export default App;
