import { Button } from "@mui/material";
import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import LoginToContinue from "../sub-components/LoginToContinue";
import { useNavigate } from "react-router-dom";

function CreateRoomButton() {
  const {
    loggedIn,
    showCreateRoomModal,
    setShowCreateRoomModal,
    showLoginToContinueModal,
    setShowLoginToContinueModal,
  } = useContext(GlobalContext);

  const navigate = useNavigate();
  const handleCreateRoom = () => {
    if (loggedIn) {
      setShowCreateRoomModal(true);
    } else {
      setShowLoginToContinueModal(true);
    }
  };
  return (
    <>
      {/*  {!socket && ( */}
      <Button
      className="h-10"
        //white text, blue background, rounded corners, padding 2px, border 1px solid blue
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

      {/* )} */}

      <LoginToContinue
        isOpen={showLoginToContinueModal}
        onClose={() => setShowLoginToContinueModal(false)}
        onLogin={() => {
          navigate("/login", { replace: true });
          // setShowCreateRoomModal(true);

          // {showLoginForm && <LoginForm />}
        }}
      />
    </>
  );
}

export default CreateRoomButton;
