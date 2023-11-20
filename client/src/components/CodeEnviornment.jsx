import React, { useEffect, useContext, useState } from "react";
import { Box, Stack, Button, Chip } from "@mui/material";
import CodeEditor from "./CodeEditor";
import CodeEditorTop from "./sub-components/CodeEditorTop";
import Header from "./sub-components/Header";
import Card from "./sub-components/Card";
import Drawer from "./sub-components/Drawer";
import FriendCodeEditor from "./FriendCodeEditor";
import Output from "./Output";
import { Outlet } from "react-router-dom";
import CreateRoom from "./CreateRoom";
import CodeEditorContext from "../context/CodeEditorContext";
import { useParams } from "react-router-dom";
import problems from "../Data/problems";
const { io } = require("socket.io-client");

const CodeEnviornment = () => {
    const { problemId } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const [displayName, setDisplayName] = useState("");
    const [roomId, setRoomId] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [isCredentialsEntered, setIsCredentialsEntered] = useState(false);
    const [socket, setSocket] = useState(null);
    const [friendText, setFriendText] = useState("");
    const { roomCreated, setRoomCreated } = useContext(CodeEditorContext);

    let problemIndex = 0;
    for (let i = 0; i < problems.length; i++) {
        if (problems[i].id === parseInt(problemId)) {
            problemIndex = i;
            break;
        }
    }
    const problem = problems[problemIndex];

    const connectToRoom = () => {
        if (displayName.trim() === "" || roomId.trim() === "") {
            alert("Please enter a display name and room ID");
            return;
        }

        const newSocket = io("http://localhost:3001"); // Replace with your server address
        setSocket(newSocket);

        // Emit 'joinRoom' event to the server with display name and room ID
        newSocket.emit("joinRoom", { displayName, roomId });
        console.log("Connected to room", roomId);
        setShowModal(false);
        setRoomCreated(true);
    };

    useEffect(() => {
        if (socket) {
            // Listen for incoming messages
            socket.on("message", (data) => {
                const { displayName: userName, message } = data;
                if (userName !== displayName) {
                    setFriendText(message);
                }
            });
        }
    }, [socket]);


    return (
        <>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="absolute right-0 p-4">
                {" "}
                {/* Use Tailwind CSS classes to style the container */}
                {!socket && (
                    <Button
                        onClick={() => setShowModal(true)}
                        variant="outlined"
                    >
                        Create Room
                    </Button>
                )}
                <CreateRoom
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    onCreateRoom={connectToRoom}
                    displayName={displayName}
                    setDisplayName={setDisplayName}
                    roomId={roomId}
                    setRoomId={setRoomId}
                />
            </div>

            <h3 className="text-3xl my-3 mx-10"> {problem['title']} </h3>

            <Stack
                direction={{
                    direction: "row",
                    xs: "column",
                    sm: "column",
                    md: "row",
                }}
                spacing={{ xs: 1, sm: 2, md: 2 }}
                padding={{ xs: 1, sm: 2, md: 2 }}
            >
                <Box
                    // style={{marginTop: "-60px"}}
                    sx={{
                        // height: { sx: 'auto', md: '92vh' },
                        px: { md: 2 },
                        width: { sx: "auto", md: "40vw" },
                        backgroundColor: "#1e1e1e",
                        color: "white",
                        borderRadius: "8px",
                    }}
                >
                    <div>
                        <p className={`text-sm font-bold px-6 py-4 whitespace-nowrap ${
                            problem.difficulty === "Easy"
                            ? "text-green-500"
                            : problem.difficulty === "Medium"
                            ? "text-yellow-500"
                            : "text-red-500"
                        }`}>
                            {problem['difficulty']}
                            </p>
                        <p className="">
                        {problem['tags'].map((tag, index) => (
                            <Chip
                            key={index}
                            className="text-white bg-gray m-1"
                            variant="outlined"
                            label={tag}
                            />          
                        ))}
                        </p>
                        <br />
                        <p>{problem['description']}</p> 
                        <br />
                        <p className="text-slate-400">
  {problem['example'].split(' ').map((word, index) => (
    <span key={index}>
    {['input:', 'output:', 'explanation:'].includes(word.toLowerCase()) && <strong className="block text-white">{word}</strong>}
    {['input:', 'output:', 'explanation:'].includes(word.toLowerCase()) ? null : ' ' + word}
  </span>
  ))}
</p>

                    </div>
                </Box>
                <Box
                    sx={{
                        width: "100%",
                    }}
                >
                    <CodeEditorTop />
                    <CodeEditor
                        socket={socket}
                        roomId={roomId}
                        displayName={displayName}
                    />
                    <Output />
                    <Outlet />
                </Box>
            </Stack>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <FriendCodeEditor friendText={friendText} />
            </Drawer>
        </>
    );
};

export default CodeEnviornment;
