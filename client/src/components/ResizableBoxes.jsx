import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Resizable } from "react-resizable";
import ResizableBox from "./ResizeableBox";
// import "./ResizableBoxes.css"; // Import the styles

const ResizableBoxes = () => {
  const handleResize = (index, { size }) => {
    // Handle resizing logic if needed
    console.log(`Box ${index} resized to ${size.width}x${size.height}`);
  };

  return (
    <>
    <p><h1>Resizable Boxes</h1></p>
    <Stack direction="row" spacing={0}>
        <Box p={2} bgcolor="primary.main" color="primary.contrastText">
          <Typography variant="h6">Box A</Typography>
          {/* Your component content for Box A */}
        </Box>

        <Box p={2} bgcolor="secondary.main" color="secondary.contrastText">
          <Typography variant="h6">Box B</Typography>
          {/* Your component content for Box B */}
        </Box>
    </Stack>
    </>
  );
};

export default ResizableBoxes;