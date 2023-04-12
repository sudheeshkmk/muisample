import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import { Feed } from "@mui/icons-material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import AddPost from "./components/AddPost";
import { useState } from "react";



function App() {
  const [mode, setMode] = useState("light");

  const myTheme = createTheme({
    palette: { mode: mode }
  });

  return (
    <ThemeProvider theme={myTheme}>

      <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
        <Navbar />
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
