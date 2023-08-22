import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch,
} from "@mui/material";
import {
    Home,
    Settings,
    Person2,
    Receipt,
    People,
    Storefront,
    EmojiPeople,
    ModeNight,
} from "@mui/icons-material";

const SideBar = () => {
    return (
        <Box
            bgcolor=""
            flex={2}
            p={2}
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Homepage" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="#pages">
                        <ListItemIcon>
                            <Receipt />
                        </ListItemIcon>
                        <ListItemText primary="Pages" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="#groups">
                        <ListItemIcon>
                            <People />
                        </ListItemIcon>
                        <ListItemText primary="Groups" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="#groups">
                        <ListItemIcon>
                            <Storefront />
                        </ListItemIcon>
                        <ListItemText primary="Marketplaces" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="#friends">
                        <ListItemIcon>
                            <EmojiPeople />
                        </ListItemIcon>
                        <ListItemText primary="Friends" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="#settings">
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="#profile">
                        <ListItemIcon>
                            <Person2 />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ModeNight />
                        </ListItemIcon>
                        <Switch />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
};

export default SideBar;
