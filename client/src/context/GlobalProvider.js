import React, { useState, useEffect } from "react";
import globalContext from "./GlobalContext";
import { useNavigate } from "react-router-dom";

const GlobalProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showCreateRoomModal, setShowCreateRoomModal] = useState(false);
  const [showLoginToContinueModal, setShowLoginToContinueModal] =
    useState(false);
  const [friendText, setFriendText] = useState({});
  const [roomAdmin, setRoomAdmin] = useState(null);
  const [membersList, setMembersList] = useState([]);
  const [memberIndex, setMemberIndex] = useState(1);
  const [friendLanguage, setFriendLanguage] = useState("cpp");
  const [socket, setSocket] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [roomCreated, setRoomCreated] = useState(false);
  const [problems, setProblems] = useState([]);
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const navigate = useNavigate();

  useEffect(() => {
    if (socket) {
      // Listen for incoming messages
      socket.on("message", (data) => {
        const { to, message } = data;
        // console.log(friendText)
        setFriendText((prev) => ({ ...prev, [to]: message }));
        // console.log(friendText)
        // console.log(data);
      });

      socket.on("language", (data) => {
        const { displayName: userName, language } = data;
        if (userName !== username) {
          setFriendLanguage(language);
        }
      });

      socket.on("userCount", (data) => {
        console.log(data);
        setMembersList(data);
      });

      socket.on("roomAdmin", (data) => {
        console.log("Room Admin", data);
        setRoomAdmin(data);
      });

      socket.on("questionSelected", (data) => {
        console.log("Selected question", data);
        navigate(`/room/${roomId}/problems/${data}`);
      });
    }
  }, [socket]);

  const value = {
    loggedIn,
    setLoggedIn,
    showCreateRoomModal,
    setShowCreateRoomModal,
    showLoginToContinueModal,
    setShowLoginToContinueModal,
    friendText,
    setFriendText,
    friendLanguage,
    setFriendLanguage,
    socket,
    setSocket,
    displayName,
    setDisplayName,
    roomId,
    setRoomId,
    roomCreated,
    setRoomCreated,
    problems,
    setProblems,
    membersList,
    setMembersList,
    username,
    setUsername,
    email,
    setEmail,
    memberIndex,
    setMemberIndex,
    roomAdmin,
    setRoomAdmin,
  };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
};
export default GlobalProvider;
