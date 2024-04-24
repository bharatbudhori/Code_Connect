import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack, Button, Chip } from "@mui/material";
import CodeEditor from "./CodeDisplay/CodeEditor";
// import CodeEditorTop from "./CodeDisplay/CodeEditorTop";


import Output from "./OutputDisplay/Output";
import CreateRoomModal from "./CreateRoomModal";
import CodeEditorContext from "../context/CodeEditorContext";
import problems from "../Data/problems";
import GlobalContext from "../context/GlobalContext";
import LoginToContinue from "./sub-components/LoginToContinue";
import LoginForm from "./LoginForm";
import QuestionDataDisplay from "./QuestionDisplay/QuestionDataDisplay";
import CreateRoomButton from "./create room/CreateRoomButton";
import FriendCodeDrawer from "./create room/FriendCodeDrawer";

const { io } = require("socket.io-client");

const CodeEnviornment = () => {
  const { problemId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [roomId, setRoomId] = useState("");
  const { showCreateRoomModal, setShowCreateRoomModal, setFriendText } =
    useContext(GlobalContext);
  const [isCredentialsEntered, setIsCredentialsEntered] = useState(false);
  const [socket, setSocket] = useState(null);

  const [friendLanguage, setFriendLanguage] = useState("cpp");
  const { roomCreated, setRoomCreated } = useContext(CodeEditorContext);

  // const [showLoginForm, setShowLoginForm] = useState(false);

  let problemIndex = 0;
  for (let i = 0; i < problems.length; i++) {
    if (problems[i].id === parseInt(problemId)) {
      problemIndex = i;
      break;
    }
  }
  const problem = problems[problemIndex];

  const connectToRoom = () => {
    if (displayName.trim() === "" || roomId.trim() === "") {
      alert("Please enter a display name and room ID");
      return;
    }

    const newSocket = io("http://localhost:5000"); // Replace with your server address
    setSocket(newSocket);

    // Emit 'joinRoom' event to the server with display name and room ID
    newSocket.emit("joinRoom", { displayName, roomId });
    console.log("Connected to room", roomId);
    setShowCreateRoomModal(false);
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

      socket.on("language", (data) => {
        const { displayName: userName, language } = data;
        if (userName !== displayName) {
          setFriendLanguage(language);
        }
      });
    }
  }, [socket]);

  useEffect(() => {
    (function () {
      // horizontal direction
      (function resizableX() {
        const resizer = document.querySelector(".resizer-x");
        resizer.addEventListener("mousedown", onmousedown);
        resizer.addEventListener("touchstart", ontouchstart);

        // for mobile
        function ontouchstart(e) {
          e.preventDefault();
          resizer.addEventListener("touchmove", ontouchmove);
          resizer.addEventListener("touchend", ontouchend);
        }
        function ontouchmove(e) {
          e.preventDefault();
          const clientX = e.touches[0].clientX;
          const deltaX = clientX - (resizer._clientX || clientX);
          resizer._clientX = clientX;
          const l = resizer.previousElementSibling;
          const r = resizer.nextElementSibling;
          // LEFT
          if (deltaX < 0) {
            const w = Math.round(parseInt(getComputedStyle(l).width) + deltaX);
            l.style.flex = `0 ${w < 10 ? 0 : w}px`;
            r.style.flex = "1 0";
          }
          // RIGHT
          if (deltaX > 0) {
            const w = Math.round(parseInt(getComputedStyle(r).width) - deltaX);
            r.style.flex = `0 ${w < 10 ? 0 : w}px`;
            l.style.flex = "1 0";
          }
        }
        function ontouchend(e) {
          e.preventDefault();
          resizer.removeEventListener("touchmove", ontouchmove);
          resizer.removeEventListener("touchend", ontouchend);
          delete e._clientX;
        }

        // for desktop
        function onmousedown(e) {
          e.preventDefault();
          document.addEventListener("mousemove", onmousemove);
          document.addEventListener("mouseup", onmouseup);
        }
        function onmousemove(e) {
          e.preventDefault();
          const clientX = e.clientX;
          const deltaX = clientX - (resizer._clientX || clientX);
          resizer._clientX = clientX;
          const l = resizer.previousElementSibling;
          const r = resizer.nextElementSibling;
          // LEFT
          if (deltaX < 0) {
            const w = Math.round(parseInt(getComputedStyle(l).width) + deltaX);
            l.style.flex = `0 ${w < 10 ? 0 : w}px`;
            r.style.flex = "1 0";
          }
          // RIGHT
          if (deltaX > 0) {
            const w = Math.round(parseInt(getComputedStyle(r).width) - deltaX);
            r.style.flex = `0 ${w < 10 ? 0 : w}px`;
            l.style.flex = "1 0";
          }
        }
        function onmouseup(e) {
          e.preventDefault();
          document.removeEventListener("mousemove", onmousemove);
          document.removeEventListener("mouseup", onmouseup);
          delete e._clientX;
        }
      })();

      // vertical direction
      (function resizableY() {
        const resizer = document.querySelector(".resizer-y");
        resizer.addEventListener("mousedown", onmousedown);
        resizer.addEventListener("touchstart", ontouchstart);

        // for mobile
        function ontouchstart(e) {
          e.preventDefault();
          resizer.addEventListener("touchmove", ontouchmove);
          resizer.addEventListener("touchend", ontouchend);
        }
        function ontouchmove(e) {
          e.preventDefault();
          const clientY = e.touches[0].clientY;
          const deltaY = clientY - (resizer._clientY || clientY);
          resizer._clientY = clientY;
          const t = resizer.previousElementSibling;
          const b = resizer.nextElementSibling;
          // UP
          if (deltaY < 0) {
            const h = Math.round(parseInt(getComputedStyle(t).height) + deltaY);
            t.style.flex = `0 ${h < 10 ? 0 : h}px`;
            b.style.flex = "1 0";
          }
          // DOWN
          if (deltaY > 0) {
            const h = Math.round(parseInt(getComputedStyle(b).height) - deltaY);
            b.style.flex = `0 ${h < 10 ? 0 : h}px`;
            t.style.flex = "1 0";
          }
        }
        function ontouchend(e) {
          e.preventDefault();
          resizer.removeEventListener("touchmove", ontouchmove);
          resizer.removeEventListener("touchend", ontouchend);
          delete e._clientY;
        }

        // for desktop
        function onmousedown(e) {
          e.preventDefault();
          document.addEventListener("mousemove", onmousemove);
          document.addEventListener("mouseup", onmouseup);
        }
        function onmousemove(e) {
          e.preventDefault();
          const clientY = e.clientY;
          const deltaY = clientY - (resizer._clientY || clientY);
          resizer._clientY = clientY;
          const t = resizer.previousElementSibling;
          const b = resizer.nextElementSibling;
          // UP
          if (deltaY < 0) {
            const h = Math.round(parseInt(getComputedStyle(t).height) + deltaY);
            t.style.flex = `0 ${h < 10 ? 0 : h}px`;
            b.style.flex = "1 0";
          }
          // DOWN
          if (deltaY > 0) {
            const h = Math.round(parseInt(getComputedStyle(b).height) - deltaY);
            b.style.flex = `0 ${h < 10 ? 0 : h}px`;
            t.style.flex = "1 0";
          }
        }
        function onmouseup(e) {
          e.preventDefault();
          document.removeEventListener("mousemove", onmousemove);
          document.removeEventListener("mouseup", onmouseup);
          delete e._clientY;
        }
      })();
    })();
  }, []);

  return (
    <div className="">
      {/* {showLoginForm && <LoginForm />} */}
      {/* <LoginForm isOpen={showLoginForm} /> */}
      <div className="absolute right-0 p-4">
        {" "}

        <CreateRoomButton />
        
        <CreateRoomModal
          isOpen={showCreateRoomModal}
          onClose={() => setShowCreateRoomModal(false)}
          onCreateRoom={connectToRoom}
          displayName={displayName}
          setDisplayName={setDisplayName}
          roomId={roomId}
          setRoomId={setRoomId}
        />
      </div>{" "}
      <h3 className="text-3xl mt-1 mx-10"> {problem["title"]} </h3>
      <Stack
        direction={{
          direction: "row",
          xs: "column",
          sm: "column",
          md: "row",
        }}
        spacing={{ xs: 1, sm: 2, md: 2 }}
        padding={{ xs: 1, sm: 2, md: 2 }}
        className="resizable-x"
      >
        <div id="app" classname="">
          <div className="resizable-x">
            <div style={{ flex: "40%" }}>
              <QuestionDataDisplay />
          
            </div>
            <div className="resizer-x" />
            <div className="resizable-x" style={{ flex: "60%" }}>
              <div style={{ flex: "100%" }}>
         
                
                <CodeEditor
                  socket={socket}
                  roomId={roomId}
                  displayName={displayName}
                />
                <Output/>
                <div className="resizer-y"></div>
                <div className="resizable-y" style={{ flex: "60%" }}>
               
                </div>

              </div>
            </div>
          </div>
        </div>
      </Stack>
      <FriendCodeDrawer />
    </div>
  );
};

export default CodeEnviornment;
