import React, { useState } from "react";
import globalContext from "./GlobalContext";

const GlobalProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showCreateRoomModal, setShowCreateRoomModal] = useState(false);
  const [showLoginToContinueModal, setShowLoginToContinueModal] =
    useState(false);
  const [friendText, setFriendText] = useState("");
  const [friendLanguage, setFriendLanguage] = useState("cpp");

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
  };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
};
export default GlobalProvider;
