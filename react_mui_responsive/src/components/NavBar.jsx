import {
    AppBar,
    Toolbar,
    styled,
    Typography,
    Box,
    InputBase,
    Badge,
    Avatar,
    Menu,
    MenuItem,
} from "@mui/material";
import { Pets, Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";

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
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
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
                        onClick={handleMenuClick}
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
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                sx={{
                    marginTop: 2,
                }}
            >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
};

export default NavBar;
