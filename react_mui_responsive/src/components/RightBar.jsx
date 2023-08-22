import {
    Box,
    Typography,
    AvatarGroup,
    Avatar,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Divider,
} from "@mui/material";
import React from "react";

const RightBar = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed" width="300">
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
                    Online Friends
                </Typography>
                <AvatarGroup max={7}>
                    <Avatar
                        alt="online friend 1"
                        src="https://i.pravatar.cc/64?u=samplePerson1@xyz.com"
                    />
                    <Avatar
                        alt="online friend 2"
                        src="https://i.pravatar.cc/64?u=samplePerson2@xyz.com"
                    />
                    <Avatar
                        alt="online friend 3"
                        src="https://i.pravatar.cc/64?u=samplePerson3@xyz.com"
                    />
                    <Avatar
                        alt="online friend 4"
                        src="https://i.pravatar.cc/64?u=samplePerson4@xyz.com"
                    />
                    <Avatar
                        alt="online friend 5"
                        src="https://i.pravatar.cc/64?u=samplePerson5@xyz.com"
                    />
                    <Avatar
                        alt="online friend 6"
                        src="https://i.pravatar.cc/64?u=samplePerson6@xyz.com"
                    />
                    <Avatar
                        alt="online friend 7"
                        src="https://i.pravatar.cc/64?u=samplePerson7@xyz.com"
                    />
                </AvatarGroup>
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
                    Latest Photos
                </Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img
                            src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                            alt="latest photo 1"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format"
                            alt="latest photo 2"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format"
                            alt="latest photo 3"
                        />
                    </ImageListItem>
                </ImageList>
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
                    Latest Conversation
                </Typography>
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                    }}
                >
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://material-ui.com/static/images/avatar/3.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {
                                        " — I'll be in your neighborhood doing errands this…"
                                    }
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Travis Howard"
                                src="/static/images/avatar/2.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {
                                        " — Wish I could come, but I'm out of town this…"
                                    }
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Cindy Baker"
                                src="/static/images/avatar/3.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {
                                        " — Do you have Paris recommendations? Have you ever…"
                                    }
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default RightBar;
