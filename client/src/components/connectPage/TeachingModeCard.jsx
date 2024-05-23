import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useSocket from "../hooks/useSocket";
import GlobalContext from "../../context/GlobalContext";

const TeachingModeCard = () => {
  const { setRoomId } = useContext(GlobalContext);
  const navigate = useNavigate();
  const connectToRoom = useSocket();

  const shareableLink = useRef("");

  const handleCreateRoom = () => {
    const newTeachingModeId = Math.random().toString(36).substring(2, 10); // Generate new room ID
    console.log(newTeachingModeId);
    setRoomId(newTeachingModeId); // Set the room ID in the global context
    shareableLink.current = `${window.location.origin}/room/${newTeachingModeId}?mode=THMode`;
    // connectToRoom(() => {
    copyLinkToClipboard();
    navigate(`/room/${newTeachingModeId}?mode=THMode`);
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
      <h1 className="text-4xl">Teaching Mode</h1>
      <img
        src="/Teacher.png"
        alt="student"
        className="mt-2"
        onClick={copyLinkToClipboard}
        style={{ cursor: "pointer", width: "300px", height: "200px" }}
      />
      <div className="my-4 text-white text-justify">
        In Teaching Mode, instructors have the capability to establish a virtual
        classroom tailored for their students. Within this setup, teachers
        maintains unrestricted access to review, evaluate and correct the codes
        from the students. Students are unable to view the codes of their peers.
        This Unrestricted access empowers teachers to monitor progress
        effectively and offer personalized guidance, fostering student
        development.
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

export default TeachingModeCard;
