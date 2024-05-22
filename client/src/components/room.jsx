// import { useEffect, useState } from "react";
// const { io } = require("socket.io-client");

// function ChatRoom() {
//   const [displayName, setDisplayName] = useState("");
//   const [roomId, setRoomId] = useState("");
//   const [socket, setSocket] = useState(null);
//   const [showModal, setShowModal] = useState(true);
//   const [isCredentialsEntered, setIsCredentialsEntered] = useState(false);
//   const [userText, setUserText] = useState("");
//   const [friendText, setFriendText] = useState("");

//   // useEffect(() => {
//   //     if (socket) {
//   //         // Listen for incoming messages
//   //         socket.on("message", (data) => {
//   //             const {displayName : userName, message} = data;
//   //             if(userName !== displayName){
//   //                 setFriendText(message);
//   //             }
//   //         });
//   //     }
//   // }, [socket]);

//   const connectToRoom = () => {
//     if (displayName.trim() === "" || roomId.trim() === "") {
//       alert("Please enter a display name and room ID");
//       return;
//     }

//     const newSocket = io("http://localhost:5000"); // Replace with your server address
//     setSocket(newSocket);

//     // Emit 'joinRoom' event to the server with display name and room ID
//     newSocket.emit("joinRoom", { displayName, roomId });
//     // console.log("Connected to room", roomId);
//   };

//   const handleModalClose = () => {
//     if (displayName.trim() !== "" && roomId.trim() !== "") {
//       setShowModal(false);
//       setIsCredentialsEntered(true);

//       connectToRoom();
//     } else {
//       alert("Please enter your name and room ID.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
//       {showModal && (
//         <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-10">
//           <div className="bg-gray-800 p-6 rounded-md">
//             <h2 className="text-2xl mb-4">Enter your credentials</h2>
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full bg-gray-700 text-white rounded-md px-3 py-2 mb-3"
//               value={displayName}
//               onChange={(e) => setDisplayName(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Room ID"
//               className="w-full bg-gray-700 text-white rounded-md px-3 py-2 mb-3"
//               value={roomId}
//               onChange={(e) => setRoomId(e.target.value)}
//             />
//             <button
//               onClick={handleModalClose}
//               className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
//             >
//               Continue
//             </button>
//           </div>
//         </div>
//       )}
//       {isCredentialsEntered && (
//         <div className="bg-gray-900 h-[600edpx]">
//           <h1 className="text-4xl">Code_Dual</h1>

//           <div className="flex w-100 flex-row items-end gap-6 m-10">
//             <div className="relative w-full min-w-[200px]">
//               <textarea
//                 className="peer h-full min-h-[300px] w-full resize-none rounded-[7px] border border-green-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-green-500 placeholder-shown:border-t-green-500 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
//                 placeholder=" "
//                 type="text"
//                 value={userText}
//                 onChange={(e) => {
//                   setUserText(e.target.value);
//                   socket.emit("sendMessageToRoom", {
//                     room: roomId,
//                     message: e.target.value,
//                     displayName,
//                   });
//                 }}
//               ></textarea>
//               <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-green-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-green-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-green-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
//                 Your Code (Editable)
//               </label>
//             </div>
//             <div className="relative w-full min-w-[200px]">
//               <textarea
//                 className="peer h-full min-h-[300px] w-full resize-none rounded-[7px] border border-red-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-red-500 placeholder-shown:border-t-red-500 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
//                 placeholder=" "
//                 // disabled
//                 //type text area
//                 type="text"
//                 value={friendText}
//                 onChange={(e) => setFriendText(e.target.value)}
//               ></textarea>
//               <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-red-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-red-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-red-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
//                 Friend's Code (Not Editable)
//               </label>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ChatRoom;
