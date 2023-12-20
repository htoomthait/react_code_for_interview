const traderColumns = {
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

export default traderColumns;
