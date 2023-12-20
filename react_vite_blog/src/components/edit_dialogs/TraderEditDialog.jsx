import { useState, useEffect } from "react";
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

const formDataInitialState = {
    desk: "",
    commodity: "",
    traderName: "",
    traderEmail: "",
    quantity: "",
};
const formErrorInitialState = {
    desk: false,
    commodity: false,
    traderName: false,
    traderEmail: false,
    quantity: false,
};

const TraderEditDialog = ({
    editModalOpen,
    handleEditClose,
    handleOnSubmitUpdate,
    fetchedRow,
}) => {
    const [editFormData, setEditFormData] = useState(formDataInitialState);
    const [formError, setFormError] = useState(formErrorInitialState);

    useEffect(() => {
        setEditFormData(fetchedRow);
    }, [fetchedRow, setEditFormData]);

    const handleFormChange = (e) => {
        setEditFormData({
            ...editFormData,
            [e.target.id]: e.target.value,
        });

        setFormErrorStatus(e);
    };

    const setFormErrorStatus = (e) => {
        setFormError({
            ...formError,
            [e.target.id]: e.target.value === "",
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        handleOnSubmitUpdate(editFormData);
    };

    return (
        <Dialog open={editModalOpen} onClose={handleEditClose}>
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
                        value={editFormData.desk || ""}
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
                        value={editFormData.commodity || ""}
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
                        value={editFormData.traderName || ""}
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
                        value={editFormData.traderEmail || ""}
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
                        value={editFormData.quantity || ""}
                        onChange={handleFormChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEditClose}>Cancel</Button>
                    <Button onClick={handleEditClose} type="submit">
                        Update
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

TraderEditDialog.propTypes = {
    editModalOpen: PropTypes.bool.isRequired,
    handleEditClose: PropTypes.func.isRequired,
    handleOnSubmitUpdate: PropTypes.func.isRequired,
    fetchedRow: PropTypes.object.isRequired,
};

export default TraderEditDialog;
