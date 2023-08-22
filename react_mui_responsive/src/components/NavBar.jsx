import { AppBar, Toolbar, styled, Typography, Box } from "@mui/material";
import { Pets } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "5px",
}));

const Icons = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
}));

const NavBar = () => {
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography
                    variant="h6"
                    sx={{
                        display: { xs: "none", sm: "block" },
                    }}
                >
                    {" "}
                    LAMA DEV
                </Typography>
                <Pets
                    sx={{
                        display: { xs: "block", sm: "none" },
                    }}
                />
                <Search> Search </Search>
                <Icons> Icons </Icons>
            </StyledToolbar>
        </AppBar>
    );
};

export default NavBar;
