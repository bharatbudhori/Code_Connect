import React from 'react'
import {useContext} from 'react'
import CodeEditorContext from '../../context/CodeEditorContext';
import { Box, Stack, Switch, Select, MenuItem, InputLabel, colors } from '@mui/material';


export default function CodeEditorTop() {
  const {theme, setTheme} = useContext(CodeEditorContext);
  const {language, setLanguage} = useContext(CodeEditorContext);

  function handleMode() {
    theme == 'light'? setTheme('dark'):setTheme("light")
  }


  const handleLanguage = (event) => {
    console.log(event.target.value);
    setLanguage(event.target.value);
  };


  return (
    <>
    <Stack direction="row" sx={{ backgroundColor: "#2b2b2b", borderTopRightRadius:'8px' ,borderTopLeftRadius:'8px' }}>
      <Box px={"12px"} sx={{paddingBottom: "5px"}}>
        <Select
          value={language}
          onChange={handleLanguage}
          sx={{ backgroundColor: "white", height: "30px", maxWidth: "280px", marginTop: "8px" }}
        >
          <MenuItem value="python">Python</MenuItem>
          <MenuItem value="cpp">C++</MenuItem>
          <MenuItem value="rust">Rust</MenuItem>
        </Select>
        {/* <span>Selected Language: {language} </span> */}
      </Box>

      <Box sx={{ marginLeft: 'auto', paddingRight: '16px', paddingTop: '5px' }}>
        Dark Mode:
        <Switch
          onChange={handleMode}
          inputProps={{ 'aria-label': 'controlled' }}
          defaultChecked
          />
        </Box>
      </Stack>

    </>
  )
}
