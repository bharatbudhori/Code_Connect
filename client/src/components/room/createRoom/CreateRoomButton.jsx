import { Button } from "@mui/material";
import React, { useContext } from "react";
import GlobalContext from "../../../context/GlobalContext";
import LoginToContinue from "../LoginToContinue";

import useSocket from "../../hooks/useSocket";
import CreateRoomModal from "../../CreateRoomModal";

function CreateRoomButton({ className }) {
  const {
    loggedIn,
    setShowCreateRoomModal,
    setShowLoginToContinueModal,
    socket,
  } = useContext(GlobalContext);

  const connectToRoom = useSocket();

  const handleCreateRoom = () => {
    if (loggedIn) {
      setShowCreateRoomModal(true);
    } else {
      setShowLoginToContinueModal(true);
    }
  };
  return (
    <div className={className}>
      {/* <div>CreateRoomButton</div> */}
      {!socket && (
        <Button
          sx={{
            color: "white",
            background: "#1976d2",
            "&:hover": {
              background: "#225281",
            },
            borderRadius: "8px",
            p: 1,
            border: "1px solid #1e1e1e",
          }}
          onClick={() => handleCreateRoom()}
          variant="outlined"
        >
          Create Room
        </Button>
      )}

      <LoginToContinue />
      <CreateRoomModal onCreateRoom={connectToRoom} />
    </div>
  );
}

export default CreateRoomButton;
