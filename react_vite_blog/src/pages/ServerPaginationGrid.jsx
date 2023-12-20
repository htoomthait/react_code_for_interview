import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import traderColumns from "../components/data_grid_columns/traderColumns";
import TraderCreateDialog from "../components/create_dialogs/TraderCreateDialog";
import TraderEditDialog from "../components/edit_dialogs/TraderEditDialog";

const columns = traderColumns;

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
    const [editModalOpen, setEditModalOpen] = React.useState(false);
    const [formData, setFormData] = React.useState(formDataInitialState);
    const [editFormData, setEditFormData] =
        React.useState(formDataInitialState);
    const [selectedRows, setSelectedRows] = React.useState([]);

    const [formError, setFormError] = React.useState(formErrorInitialState);
    const [fetchedRow, setFetchedRow] = React.useState({});
    const queryClient = useQueryClient();

    //   console.log(formData);

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
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
            queryClient.removeQueries({ key: ["server_pagination"] });

            // queryClient.invalidateQueries(["server_pagination"]);
        },
        onError: (error) => {
            console.log(error);
            setCreateModalOpen(false);
        },
    });

    const updateApiCall = useMutation({
        mutationFn: async () => {
            const resp = await axios.put(
                `http://localhost:3000/traders/${selectedRows[0]}`,
                {
                    ...editFormData,
                }
            );

            if (resp.status !== 200) {
                throw new Error("Error updating data");
            }

            return resp.data;
        },
        onSuccess: () => {
            setEditModalOpen(false);
            queryClient.removeQueries({ key: ["server_pagination"] });

            // queryClient.invalidateQueries(["server_pagination"]);
        },
        onError: (error) => {
            console.log(error);
            setEditModalOpen(false);
        },
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        createApiCall.mutate();
    };

    const handleOnSubmitUpdate = (formDataFromEditDialog) => {
        setEditFormData(formDataFromEditDialog);

        updateApiCall.mutate();
    };

    const handleClickOpen = () => {
        setFormData(formDataInitialState);
        setCreateModalOpen(true);
    };

    const handleClose = () => {
        setCreateModalOpen(false);
    };

    const handleEditClose = () => {
        setEditModalOpen(false);
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
            queryClient.removeQueries({ key: ["server_pagination"] });
            // queryClient.invalidateQueries(["server_pagination"]);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const { isLoading, error, data } = useQuery({
        queryKey: ["server_pagination"],
        queryFn: async () => {
            const resp = await axios.get(
                `http://localhost:3000/traders?_page=${
                    paginationModel.page + 1
                }&_limit=${paginationModel.pageSize}`
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

    const fetchRow = useMutation({
        mutationFn: async () => {
            const resp = await axios.get(
                `http://localhost:3000/traders/${selectedRows[0]}`
            );

            if (resp.status !== 200) {
                throw new Error("Error fetching data");
            }
            const data = resp.data;
            // console.log(data);
            setFetchedRow(data);

            // return data;
        },
    });

    const [rows, setRows] = useState(data?.rows || []);

    // Some API clients return undefined while loading
    // Following lines are here to prevent `rowCountState` from being undefined during the loading
    const [rowCountState, setRowCountState] = React.useState(
        data?.totalRowCount || 0
    );

    useEffect(() => {
        if (!error) {
            setRows(data?.rows || []);
            console.log(data?.rows);
        }
    }, [data?.rows, setRows, error]);

    React.useEffect(() => {
        if (!error) {
            setRowCountState((prevRowCountState) =>
                data?.totalRowCount !== undefined
                    ? data?.totalRowCount
                    : prevRowCountState
            );
        }
    }, [data?.totalRowCount, setRowCountState, error]);

    // const queryClient = useQueryClient();

    const handleEditSelectedRow = () => {
        console.log(selectedRows[0]);
        fetchRow.mutate();
        setEditModalOpen(true);
        // console.log(fetchedRow);
    };

    useEffect(() => {
        console.log(fetchedRow);
    }, [fetchedRow]);

    return (
        <Box
            sx={{
                minHeight: 400,
                width: "100%",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Button variant="outlined" onClick={handleClickOpen}>
                    Create new record
                </Button>

                <Button variant="outlined" onClick={handleDeleteSelectedRows}>
                    Delete selected record
                </Button>

                <Button variant="outlined" onClick={handleEditSelectedRow}>
                    Edit selected record
                </Button>
            </Box>

            <TraderCreateDialog
                createModalOpen={createModalOpen}
                handleClose={handleClose}
                handleFormChange={handleFormChange}
                handleOnSubmit={handleOnSubmit}
            />

            <TraderEditDialog
                editModalOpen={editModalOpen}
                handleEditClose={handleEditClose}
                handleOnSubmitUpdate={handleOnSubmitUpdate}
                fetchedRow={fetchedRow}
            />

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
                        // queryClient.invalidateQueries(["server_pagination"]);
                    }}
                />
            )}
        </Box>
        // <div> abc </div>
    );
}
