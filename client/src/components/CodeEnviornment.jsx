import React, { useEffect, useContext, useState } from "react";
import { Box, Stack, Button } from "@mui/material";
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
const { io } = require("socket.io-client");

const CodeEnviornment = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [displayName, setDisplayName] = useState("");
    const [roomId, setRoomId] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [isCredentialsEntered, setIsCredentialsEntered] = useState(false);
    const [socket, setSocket] = useState(null);
    const [friendText, setFriendText] = useState("");

    const { roomCreated, setRoomCreated } = useContext(CodeEditorContext);

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

            <h3 className="text-3xl my-3 mx-10">Three Sum </h3>

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
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Pariatur commodi modi assumenda unde laboriosam
                        quos quae aut reiciendis harum iste, recusandae tenetur,
                        impedit eveniet mollitia repellat doloremque aspernatur
                        necessitatibus sequi? Quod sit voluptate iusto neque,
                        eos adipisci ullam distinctio tenetur id similique unde
                        hic culpa perferendis, ipsum, delectus eum. Nam quidem
                        cupiditate accusamus enim illum, minus ut dignissimos,
                        culpa tempora quod qui aut odio quasi ipsam, eius hic
                        iure. Cum nesciunt voluptas voluptates recusandae
                        consectetur aperiam molestias dicta, ex a repudiandae
                        velit quis deserunt adipisci ad vel dignissimos libero
                        rerum beatae. Odit magnam minus quae quibusdam pariatur
                        omnis dolore quia rerum sunt quo voluptate, vitae iusto
                        eum eaque voluptates! Laboriosam perspiciatis quibusdam
                        fugiat asperiores deserunt assumenda omnis quisquam ab
                        doloremque dolorum, libero nemo! Praesentium laboriosam
                        veritatis illo distinctio consequuntur temporibus nisi
                        dolore vero animi assumenda repellendus tempore fugiat
                        voluptatem eligendi consequatur, earum esse quis. Nemo
                        labore a aspernatur, quae amet, veniam qui non sed
                        voluptatum consectetur suscipit doloremque debitis,
                        similique sequi possimus placeat laborum modi excepturi
                        quo eaque natus! In exercitationem enim similique culpas
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
        </>
    );
};

export default CodeEnviornment;
