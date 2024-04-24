// Import necessary dependencies
import React, { useContext, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import "tailwindcss/tailwind.css";
import GlobalContext from "../context/GlobalContext";

// Create the CreateRoomDialog component
const CreateRoomModal = ({ onCreateRoom }) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const {
    showCreateRoomModal,
    setShowCreateRoomModal,
    displayName,
    setDisplayName,
    roomId,
    setRoomId,
  } = useContext(GlobalContext);

  return (
    <ThemeProvider theme={darkTheme}>
      <Dialog
        open={showCreateRoomModal}
        onClose={() => {
          setShowCreateRoomModal(false);
        }}
      >
        <DialogTitle>Create Room</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your username and the room code to create a new room.
          </DialogContentText>
          <TextField
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Room Code"
            type="text"
            fullWidth
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowCreateRoomModal(false)}>Cancel</Button>
          <Button onClick={onCreateRoom}>Create Room</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default CreateRoomModal;
