import { useContext, useEffect } from "react";
import GlobalContext from "../../context/GlobalContext";
import { io } from "socket.io-client";
import { toast } from "react-toastify";
import { serverUrl } from "../../constants";
// const { io } = require("socket.io-client");

function useSocket() {
  const {
    socket,
    setSocket,

    setFriendText,
    friendText,
    setFriendLanguage,
    setShowCreateRoomModal,
    setRoomCreated,
    roomId,
    setMembersList,
    username,
  } = useContext(GlobalContext);

  // useEffect(() => {
  //   if (socket) {
  //     // Listen for incoming messages
  //     socket.on("message", (data) => {
  //       const { to, message } = data;
  //       // console.log(friendText)
  //       setFriendText((prev) => ({ ...prev, [to]: message }));
  //       // console.log(friendText)
  //       // console.log(data);
  //     });

  //     socket.on("language", (data) => {
  //       const { displayName: userName, language } = data;
  //       if (userName !== username) {
  //         setFriendLanguage(language);
  //       }
  //     });

  //     socket.on("userCount", (data) => {
  //       console.log(data);
  //       setMembersList(data);
  //     });
  //   }
  // }, [socket]);

  const connectToRoom = (callback) => {
    console.log("hello from useScoket",roomId, username);
    if (username.trim() === "" || roomId.trim() === "") {
      toast.error("Please enter a display name and room ID");
      return;
    }
    try {
      const newSocket = io(serverUrl); // Replace with your server address
      setSocket(newSocket);

      // Emit 'joinRoom' event to the server with display name and room ID
      newSocket.emit("joinRoom", { username, roomId });
      // console.log("Connected to room", roomId);
      setShowCreateRoomModal(false);
      setRoomCreated(true);
      if (callback !== undefined && typeof callback === "function") {
        callback();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return connectToRoom;
}

export default useSocket;
