import React, { useContext } from "react";
import StartIcon from "@mui/icons-material/Start";
import GlobalContext from "../../context/GlobalContext";

export default function ShowFriendCodeButton({ isOpen, setIsOpen }) {
  const { roomCreated, setRoomCreated } = useContext(GlobalContext);
  // console.log(roomCreated)
  return (
    <header>
      {roomCreated && !isOpen && (
        <button
          style={{
            position: "absolute",
            right: "0px",
            top: "400px",
            zIndex: "100",
            borderRadius: "50px 0px 0px 50px",
          }}
          className="bg-green-600 text-white px-4 py-1 opacity-70 hover:opacity-100"
          onClick={() => setIsOpen(true)}
        >
          <div style={{ transform: "rotate(180deg)" }}>
            <StartIcon />
          </div>
        </button>
      )}
    </header>
  );
}
