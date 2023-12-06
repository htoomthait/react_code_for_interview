import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { createFakeServer } from "@mui/x-data-grid-generator";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// const SERVER_OPTIONS = {
//   useCursorPagination: false,
// };

// const { useQuery, ...data } = createFakeServer({}, SERVER_OPTIONS);

const columns = {
    columns: [
        {
            field: "id",
            hide: true,
        },
        {
            field: "desk",
            headerName: "Desk",
            width: 110,
        },
        {
            field: "commodity",
            headerName: "Commodity",
            width: 180,
            editable: false,
        },
        {
            field: "traderName",
            headerName: "Trader Name",
            width: 120,
            editable: false,
        },
        {
            field: "traderEmail",
            headerName: "Trader Email",
            width: 150,
            editable: false,
        },
        {
            field: "quantity",
            headerName: "Quantity",
            type: "number",
            width: 140,
            editable: false,
        },
    ],
    columnsWithDefaultColDef: [
        {
            width: 100,
            minWidth: 50,
            maxWidth: null,
            hideable: true,
            sortable: true,
            resizable: true,
            filterable: true,
            groupable: true,
            pinnable: true,
            aggregable: true,
            editable: false,
            type: "string",
            align: "left",
            filterOperators: [
                {
                    value: "contains",
                },
                {
                    value: "equals",
                },
                {
                    value: "startsWith",
                },
                {
                    value: "endsWith",
                },
                {
                    value: "isEmpty",
                    requiresFilterValue: false,
                },
                {
                    value: "isNotEmpty",
                    requiresFilterValue: false,
                },
                {
                    value: "isAnyOf",
                },
            ],
            field: "id",
            hide: true,
        },
        {
            width: 110,
            minWidth: 50,
            maxWidth: null,
            hideable: true,
            sortable: true,
            resizable: true,
            filterable: true,
            groupable: true,
            pinnable: true,
            aggregable: true,
            editable: false,
            type: "string",
            align: "left",
            filterOperators: [
                {
                    value: "contains",
                },
                {
                    value: "equals",
                },
                {
                    value: "startsWith",
                },
                {
                    value: "endsWith",
                },
                {
                    value: "isEmpty",
                    requiresFilterValue: false,
                },
                {
                    value: "isNotEmpty",
                    requiresFilterValue: false,
                },
                {
                    value: "isAnyOf",
                },
            ],
            field: "desk",
            headerName: "Desk",
        },
        {
            width: 180,
            minWidth: 50,
            maxWidth: null,
            hideable: true,
            sortable: true,
            resizable: true,
            filterable: true,
            groupable: true,
            pinnable: true,
            aggregable: true,
            editable: false,
            type: "string",
            align: "left",
            filterOperators: [
                {
                    value: "contains",
                },
                {
                    value: "equals",
                },
                {
                    value: "startsWith",
                },
                {
                    value: "endsWith",
                },
                {
                    value: "isEmpty",
                    requiresFilterValue: false,
                },
                {
                    value: "isNotEmpty",
                    requiresFilterValue: false,
                },
                {
                    value: "isAnyOf",
                },
            ],
            field: "commodity",
            headerName: "Commodity",
        },
        {
            width: 120,
            minWidth: 50,
            maxWidth: null,
            hideable: true,
            sortable: true,
            resizable: true,
            filterable: true,
            groupable: true,
            pinnable: true,
            aggregable: true,
            editable: false,
            type: "string",
            align: "left",
            filterOperators: [
                {
                    value: "contains",
                },
                {
                    value: "equals",
                },
                {
                    value: "startsWith",
                },
                {
                    value: "endsWith",
                },
                {
                    value: "isEmpty",
                    requiresFilterValue: false,
                },
                {
                    value: "isNotEmpty",
                    requiresFilterValue: false,
                },
                {
                    value: "isAnyOf",
                },
            ],
            field: "traderName",
            headerName: "Trader Name",
        },
        {
            width: 150,
            minWidth: 50,
            maxWidth: null,
            hideable: true,
            sortable: true,
            resizable: true,
            filterable: true,
            groupable: true,
            pinnable: true,
            aggregable: true,
            editable: false,
            type: "string",
            align: "left",
            filterOperators: [
                {
                    value: "contains",
                },
                {
                    value: "equals",
                },
                {
                    value: "startsWith",
                },
                {
                    value: "endsWith",
                },
                {
                    value: "isEmpty",
                    requiresFilterValue: false,
                },
                {
                    value: "isNotEmpty",
                    requiresFilterValue: false,
                },
                {
                    value: "isAnyOf",
                },
            ],
            field: "traderEmail",
            headerName: "Trader Email",
        },
        {
            width: 140,
            minWidth: 50,
            maxWidth: null,
            hideable: true,
            sortable: true,
            resizable: true,
            filterable: true,
            groupable: true,
            pinnable: true,
            aggregable: true,
            editable: false,
            type: "number",
            align: "right",
            filterOperators: [
                {
                    value: "=",
                    InputComponentProps: {
                        type: "number",
                    },
                },
                {
                    value: "!=",
                    InputComponentProps: {
                        type: "number",
                    },
                },
                {
                    value: ">",
                    InputComponentProps: {
                        type: "number",
                    },
                },
                {
                    value: ">=",
                    InputComponentProps: {
                        type: "number",
                    },
                },
                {
                    value: "<",
                    InputComponentProps: {
                        type: "number",
                    },
                },
                {
                    value: "<=",
                    InputComponentProps: {
                        type: "number",
                    },
                },
                {
                    value: "isEmpty",
                    requiresFilterValue: false,
                },
                {
                    value: "isNotEmpty",
                    requiresFilterValue: false,
                },
                {
                    value: "isAnyOf",
                    InputComponentProps: {
                        type: "number",
                    },
                },
            ],
            headerAlign: "right",
            field: "quantity",
            headerName: "Quantity",
        },
    ],
    initialState: {
        columns: {
            columnVisibilityModel: {
                id: false,
            },
        },
    },
};

export default function ServerPaginationGrid() {
    const [paginationModel, setPaginationModel] = React.useState({
        page: 0,
        pageSize: 5,
    });

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

    const [createModalOpen, setCreateModalOpen] = React.useState(false);
    const [formData, setFormData] = React.useState(formDataInitialState);
    const [selectedRows, setSelectedRows] = React.useState([]);

    const [formError, setFormError] = React.useState(formErrorInitialState);
    const queryClient = useQueryClient();

    //   console.log(formData);

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const createApiCall = useMutation({
        mutationFn: async () => {
            const resp = await axios.post(`http://localhost:3000/traders`, {
                ...formData,
            });

            if (resp.status !== 201) {
                throw new Error("Error creating data");
            }

            return resp.data;
        },
        onSuccess: () => {
            setCreateModalOpen(false);
            queryClient.invalidateQueries(["server_pagination"]);
        },
        onError: (error) => {
            console.log(error);
            setCreateModalOpen(false);
        },
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        createApiCall.mutate();
    };

    const handleClickOpen = () => {
        setFormData(formDataInitialState);
        setCreateModalOpen(true);
    };

    const handleClose = () => {
        setCreateModalOpen(false);
    };

    const handleDeleteSelectedRows = () => {
        console.log(selectedRows);
        deleteApiCall.mutate();
    };

    const deleteApiCall = useMutation({
        mutationFn: async () => {
            selectedRows.forEach(async (row) => {
                const resp = await axios.delete(
                    `http://localhost:3000/traders/${row}`
                );

                if (resp.status !== 200) {
                    throw new Error("Error deleting data");
                }
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["server_pagination"]);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const { isLoading, error, data } = useQuery({
        queryKey: ["server_pagination"],
        queryFn: async () => {
            const resp = await axios.get(
                `http://localhost:3000/traders?_page=${paginationModel.page}&_limit=${paginationModel.pageSize}`
            );

            if (resp.status !== 200) {
                throw new Error("Error fetching data");
            }
            const data = {
                totalRowCount: resp.headers["x-total-count"],
                rows: resp.data,
            };

            return data;
        },
    });

    const rows = data?.rows || [];

    // Some API clients return undefined while loading
    // Following lines are here to prevent `rowCountState` from being undefined during the loading
    const [rowCountState, setRowCountState] = React.useState(
        data?.totalRowCount || 0
    );
    React.useEffect(() => {
        setRowCountState((prevRowCountState) =>
            data?.totalRowCount !== undefined
                ? data?.totalRowCount
                : prevRowCountState
        );
    }, [data?.totalRowCount, setRowCountState]);

    // const queryClient = useQueryClient();

    return (
        <div style={{ minHeight: 400, width: "100%" }}>
            <Button variant="outlined" onClick={handleClickOpen}>
                Create new record
            </Button>

            <Button variant="outlined" onClick={handleDeleteSelectedRows}>
                Delete selected record
            </Button>

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
            {error ? (
                <div> {error.message} </div>
            ) : (
                <DataGrid
                    onRowSelectionModelChange={(dataGridSelectedRows) => {
                        setSelectedRows(dataGridSelectedRows);
                    }}
                    rows={rows}
                    {...columns}
                    rowCount={parseInt(rowCountState)}
                    loading={isLoading}
                    pageSizeOptions={[5, 10, 25]}
                    paginationModel={paginationModel}
                    paginationMode="server"
                    checkboxSelection={true}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: paginationModel.pageSize,
                                page: paginationModel.page,
                            },
                        },
                    }}
                    pagination
                    onPaginationModelChange={(model) => {
                        setPaginationModel((prev) => {
                            return { ...prev, ...model };
                        });
                        queryClient.removeQueries({
                            queryKey: ["server_pagination"],
                        });
                    }}
                />
            )}
        </div>
        // <div> abc </div>
    );
}
