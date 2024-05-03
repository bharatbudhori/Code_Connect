import { useContext, useEffect } from 'react'
import GlobalContext from '../../context/GlobalContext';
import { io } from 'socket.io-client';
// const { io } = require("socket.io-client");


function useSocket() {
    const{socket,setSocket,displayName,setFriendText,setFriendLanguage,setShowCreateRoomModal,setRoomCreated,roomId} = useContext(GlobalContext);

    useEffect(() => {
        if (socket) {
          // Listen for incoming messages
          socket.on("message", (data) => {
            const { displayName: userName, message } = data;
            if (userName !== displayName) {
              setFriendText(message);
            }
          });
    
          socket.on("language", (data) => {
            const { displayName: userName, language } = data;
            if (userName !== displayName) {
              setFriendLanguage(language);
            }
          });
        }
      }, [socket]);

      const connectToRoom = () => {
        if (displayName.trim() === "" || roomId.trim() === "") {
          alert("Please enter a display name and room ID");
          return;
        }
    
        const newSocket = io("http://localhost:5000"); // Replace with your server address
        setSocket(newSocket);
    
        // Emit 'joinRoom' event to the server with display name and room ID
        newSocket.emit("joinRoom", { displayName, roomId });
        // console.log("Connected to room", roomId);
        setShowCreateRoomModal(false);
        setRoomCreated(true);
      };

        return connectToRoom
  
}

export default useSocket