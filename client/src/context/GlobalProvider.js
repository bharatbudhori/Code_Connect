import React, { useState } from "react";
import globalContext from "./GlobalContext";

const GlobalProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showCreateRoomModal, setShowCreateRoomModal] = useState(false);
  const [showLoginToContinueModal, setShowLoginToContinueModal] =
    useState(false);
  const [friendText, setFriendText] = useState({});
  const [memberCount, setMemberCount] = useState([]);
  const [friendLanguage, setFriendLanguage] = useState("cpp");
  const [socket, setSocket] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [roomCreated, setRoomCreated] = useState(false);
  const [problems, setProblems] = useState([]);
  const[username,setUsername] = useState(localStorage.getItem('username')||"");
  const[email,setEmail] = useState(localStorage.getItem('email')||"");

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
    memberCount,
    setMemberCount,
    username,
    setUsername,
    email,
    setEmail
  };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
};
export default GlobalProvider;
