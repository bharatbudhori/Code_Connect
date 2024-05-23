import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useSocket from "../hooks/useSocket";
import GlobalContext from "../../context/GlobalContext";


const GroupStudyModeCard = () => {
    const { setRoomId } = useContext(GlobalContext);
    const navigate = useNavigate();
    const connectToRoom = useSocket();


    const shareableLink = useRef("");


    const handleCreateRoom = () => {
        const newGroupStudyModeId = Math.random().toString(36).substring(2, 10); // Generate new room ID
        console.log(newGroupStudyModeId);
        setRoomId(newGroupStudyModeId); // Set the room ID in the global context
        shareableLink.current = `${window.location.origin}/room/${newGroupStudyModeId}?mode=GSMode`;
        // connectToRoom(() => {
        copyLinkToClipboard();
        navigate(`/room/${newGroupStudyModeId}?mode=GSMode`);
        // });
    };


    const copyLinkToClipboard = () => {
        navigator.clipboard
            .writeText(shareableLink.current)
            .then(() => {
                toast.success("Link copied to clipboard!", {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "dark",
                });
            })
            .catch((error) => {
                toast.error("Unable to copy to clipboard", {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "dark",
                });
            });
    };


    return (
        <div className="rounded bg-gray-800 w-1/3 flex flex-col justify-center items-center p-4 ml-4">
            <h1 className="text-4xl">Group Study Mode</h1>
            <img
                src="/student.png"
                alt="student"
                className="mt-2"
                onClick={copyLinkToClipboard}
                style={{ cursor: "pointer", width: "300px", height: "200px" }}
            />
            <div className="my-4 text-white text-justify">
                In Group Study Mode, students can create a room for their
                collaborative study sessions. Within these sessions, students
                have the ability to view the codes of their peers. This enriches
                their learning experiences to new heights. This exchange of
                perspectives and approaches not only promotes deeper
                understanding but also cultivates a supportive learning
                community. Students are unable to edit the code of other
                students in the room.
            </div>
            <div className="flex">
                <button
                    onClick={handleCreateRoom}
                    className="rounded text-white bg-blue-500 hover:bg-blue-600 mr-2 px-4 py-2"
                >
                    <div className="text-2xl">
                        <b>Create Room</b>
                    </div>
                </button>
            </div>
        </div>
    );
};


export default GroupStudyModeCard;