import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import CodeEditor from "./CodeEditor";
import CodeEditorTop from "./sub-components/CodeEditorTop";
import Header from "./sub-components/Header";
import Drawer from "./sub-components/Drawer";
import FriendCodeEditor from "./FriendCodeEditor";
import Output from "./Output";
import { Outlet } from "react-router-dom";
const { io } = require("socket.io-client");

// import { fetchFromAPI } from '../utlis/fetchFromAPI';

const CodeEnviornment = () => {
    const problemStatement = `
    Title: "Optimal Route Planning in a Delivery Network"

    Problem Statement:

    You are tasked with optimizing the route planning for a delivery network that connects various locations. Given a set of nodes representing delivery points and the distances between these nodes, devise an algorithm to find the most efficient route that visits all locations exactly once and returns to the starting point.

    Constraints:
    1. The delivery network is represented as a weighted graph, where each node represents a delivery location, and the edges between nodes represent the distances or travel times between locations.
    2. The algorithm must ensure that each location is visited exactly once and that the route forms a closed loop, returning to the starting point.
    3. The objective is to minimize the total distance traveled along the route.
    4. The number of nodes (delivery locations) can range from 3 to 20.
    5. The distances between locations are non-negative integers.

    Input:
    - The number of delivery locations (nodes).
    - An adjacency matrix or list representing the distances between each pair of locations.

    Output:
    - An ordered sequence of nodes representing the optimal route that minimizes the total distance traveled.
    - The total distance traveled along the optimized route.

    Example:

    Input:
    Number of locations: 5
    Adjacency matrix:
    [
        [0, 10, 15, 20, 25],
        [10, 0, 35, 25, 30],
        [15, 35, 0, 30, 45],
        [20, 25, 30, 0, 50],
        [25, 30, 45, 50, 0]
    ]

    Output:
    Optimal route: [1, 2, 4, 5, 3, 1]
    Total distance traveled: 135 units

    Design an algorithm that efficiently solves this problem, optimizing the route planning to minimize the total distance traveled while visiting all delivery locations exactly once and returning to the starting point. Analyze the time complexity and space complexity of your algorithm and provide a step-by-step explanation of how it works.
  `;
    const [isOpen, setIsOpen] = useState(false);
    const [displayName, setDisplayName] = useState("");
    const [roomId, setRoomId] = useState("");
    const [showModal, setShowModal] = useState(true);
    const [isCredentialsEntered, setIsCredentialsEntered] = useState(false);
    const [socket, setSocket] = useState(null);
    const [friendText, setFriendText] = useState("");

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
    };

    const handleModalClose = () => {
        if (displayName.trim() !== "" && roomId.trim() !== "") {
            setShowModal(false);
            setIsCredentialsEntered(true);

            connectToRoom();
        } else {
            alert("Please enter your name and room ID.");
        }
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
        <div className="bg-gray-900 text-white ">
            {showModal && (
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-10">
                    <div className="bg-gray-800 p-6 rounded-md">
                        <h2 className="text-2xl mb-4">Create or Join a Room</h2>
                        <input
                            type="text"
                            placeholder="Your Display Name (Unique)"
                            className="w-full bg-gray-700 text-white rounded-md px-3 py-2 mb-3"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Room ID"
                            className="w-full bg-gray-700 text-white rounded-md px-3 py-2 mb-3"
                            value={roomId}
                            onChange={(e) => setRoomId(e.target.value)}
                        />
                        <button
                            //center the button and give extra padding at top

                            onClick={handleModalClose}
                            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 my-2 block mx-auto "
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )}
            {isCredentialsEntered && (
                <div className="bg-gray-900 h-[600edpx]">
                    <Header isOpen={isOpen} setIsOpen={setIsOpen} />
                    <h3
                        style={{
                            borderTop: "2px solid green",
                            textAlign: "center",
                            color: "white",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                        }}
                    >
                        Coding Enviornment
                    </h3>
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
                            sx={{
                                // height: { sx: 'auto', md: '92vh' },
                                px: { sx: 0, md: 2 },
                                width: { sx: "auto", md: "40vw" },
                                backgroundColor: "#1e1e1e",
                                color: "white",
                                borderRadius: "8px",
                            }}
                        >
                            <h2 className="text-2xl font-bold mb-2">
                                Problem Statement
                            </h2>
                            <p>
                                {problemStatement}
                               </p>
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
                </div>
            )}
        </div>
    );
};

export default CodeEnviornment;
