import {
    AppBar,
    Toolbar,
    styled,
    Typography,
    Box,
    InputBase,
    Badge,
    Avatar,
} from "@mui/material";
import { Pets, Mail, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
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
                <Search>
                    <InputBase placeholder="search"> Search </InputBase>
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail color="white" />
                    </Badge>
                    <Badge badgeContent={3} color="error">
                        <Notifications color="white" />
                    </Badge>
                    <Avatar
                        sx={{
                            width: 30,
                            height: 30,
                        }}
                        src="https://i.pravatar.cc/64"
                    />
                </Icons>
                <UserBox>
                    <Avatar
                        sx={{
                            width: 30,
                            height: 30,
                        }}
                        src="https://i.pravatar.cc/64"
                    />
                    <Typography>John Doe</Typography>
                </UserBox>
            </StyledToolbar>
        </AppBar>
    );
};

export default NavBar;
