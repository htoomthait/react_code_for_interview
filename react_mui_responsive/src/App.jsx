/* eslint-disable react/no-unescaped-entities */
import { Button, Typography, styled } from "@mui/material";
import "./App.css";
import { Add, Settings } from "@mui/icons-material";

function App() {
    const BlueButton = styled(Button)({
        backgroundColor: "skyblue",
        color: "#888",
        margin: 5,
        "&:hover": {
            backgroundColor: "lightblue",
        },
        "&:disabled": {
            backgroundColor: "gray",
            color: "white",
        },
    });

    return (
        <>
            <div>
                <Button variant="text">Text</Button>
                <Button
                    startIcon={<Settings />}
                    variant="contained"
                    color="primary"
                    size="small"
                >
                    Settings
                </Button>
                <Button
                    startIcon={<Add />}
                    variant="contained"
                    color="otherColor"
                    size="small"
                >
                    Add
                </Button>
                <Button variant="outlined" disabled>
                    Outlined
                </Button>
                <Typography variant="h1" component="h2">
                    It uses h1 style but it's a p tag
                </Typography>

                <BlueButton variant="contained">My Button</BlueButton>
                <BlueButton variant="contained" disabled>
                    Another Button
                </BlueButton>
            </div>
        </>
    );
}

export default App;
