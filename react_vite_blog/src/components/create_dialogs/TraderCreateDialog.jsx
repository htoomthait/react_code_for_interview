import { PropTypes } from "prop-types";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
    Button,
} from "@mui/material";

const TraderCreateDialog = ({
    createModalOpen,
    handleClose,
    handleFormChange,
    handleOnSubmit,
}) => {
    return (
        <Dialog open={createModalOpen} onClose={handleClose}>
            <form onSubmit={handleOnSubmit}>
                <DialogTitle>Create New Trader</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To create new trader record, please enter the proper
                        form data here.
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="desk"
                        label="Desk"
                        type="text"
                        placeholder="e.g. D-8329"
                        fullWidth
                        variant="standard"
                        onChange={handleFormChange}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="commodity"
                        label="Commodity"
                        type="text"
                        placeholder="e.g. Cocoa"
                        fullWidth
                        variant="standard"
                        onChange={handleFormChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="traderName"
                        label="Trader Name"
                        type="text"
                        placeholder="e.g. John Doe"
                        fullWidth
                        variant="standard"
                        onChange={handleFormChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="traderEmail"
                        label="Trader Email"
                        type="email"
                        placeholder="e.g. johndoe@xyz.com"
                        fullWidth
                        variant="standard"
                        onChange={handleFormChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="quantity"
                        label="Quantity"
                        type="number"
                        placeholder="e.g. 3210"
                        fullWidth
                        variant="standard"
                        onChange={handleFormChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} type="submit">
                        Create
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

TraderCreateDialog.propTypes = {
    createModalOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleFormChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
};

export default TraderCreateDialog;
