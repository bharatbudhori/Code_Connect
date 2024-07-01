import React from "react";
import { useContext } from "react";
import CodeEditorContext from "../../context/CodeEditorContext";
import {
  Box,
  Stack,
  Switch,
  Select,
  MenuItem,
  InputLabel,
  colors,
} from "@mui/material";
import GlobalContext from "../../context/GlobalContext";

export default function CodeEditorTop({ roomId }) {
  const { theme, setTheme } = useContext(CodeEditorContext);
  const { language, setLanguage } = useContext(CodeEditorContext);
  const { username, socket } = useContext(GlobalContext);

  function handleMode() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  const handleLanguage = (event) => {
    console.log(event.target.value);
    setLanguage(event.target.value);
    socket?.emit("changeLanguage", {
      room: roomId,
      language: event.target.value,
      username,
    });
  };

  return (
    <>
      <Stack
        direction="row"
        sx={{
          backgroundColor: "#2b2b2b",
          borderTopRightRadius: "8px",
          borderTopLeftRadius: "8px",
        }}
      >
        <Box px={"12px"} sx={{ paddingBottom: "5px" }}>
          <Select
            value={language}
            onChange={handleLanguage}
            sx={{
              backgroundColor: "white",
              height: "30px",
              maxWidth: "280px",
              marginTop: "6px",
            }}
          >
            <MenuItem value="python">Python</MenuItem>
            <MenuItem value="cpp">C++</MenuItem>
            <MenuItem value="c">C</MenuItem>
          </Select>
          {/* <span>Selected Language: {language} </span> */}
        </Box>

        <Box
          sx={{ marginLeft: "auto", paddingRight: "16px", paddingTop: "2px" }}
        >
          Dark Mode:
          <Switch
            onChange={handleMode}
            inputProps={{ "aria-label": "controlled" }}
            defaultChecked
          />
        </Box>
      </Stack>
    </>
  );
}
