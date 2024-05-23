import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";
import Lottie from "lottie-react";
import acceptedd from "./accepted.json";

const SubmitReport = ({ accepted, showAccepted, setShowAccepted }) => {
  const handleClose = () => {
    setShowAccepted(false);
  };

  // Create a dark theme
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        paper: "#111827", // Set the background color of the Dialog
      },
      // You can customize other theme properties here
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Dialog open={showAccepted} onClose={handleClose}>
      
        <DialogContent>
          <DialogContentText>
            <Lottie animationData={acceptedd} loop={true} />
          </DialogContentText>
        </DialogContent>
        <DialogTitle>
          <h2 className="text-green-300 text-center">ACCEPTED</h2>
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          {/* Additional buttons or actions can be added here */}
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default SubmitReport;
