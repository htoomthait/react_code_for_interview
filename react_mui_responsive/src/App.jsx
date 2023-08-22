/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import { Box, Stack } from "@mui/material";
import NavBar from "./components/NavBar";
import Add from "./components/Add";

function App() {
    return (
        <Box>
            <NavBar />
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <SideBar />
                <Feed />
                <RightBar />
            </Stack>
            <Add />
        </Box>
    );
}

export default App;
