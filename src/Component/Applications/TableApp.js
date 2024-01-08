import React from 'react'
import {
    MRT_GlobalFilterTextField,
    MRT_TableBodyCellValue,
    MRT_TablePagination,
    MRT_ToolbarAlertBanner,
    flexRender,
    useMaterialReactTable,
} from 'material-react-table';
import {
    Box,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

export const data = [
    {
        name: {
            firstName: 'Christopher',
            lastName: 'Lee',
        },
        address: '555 Cedar Street',
        city: 'Seattle',
        state: 'Washington',
    },
    {
        name: {
            firstName: 'Rachel',
            lastName: 'Anderson',
        },
        address: '987 Walnut Court',
        city: 'New York',
        state: 'New York',
    },
    {
        name: {
            firstName: 'David',
            lastName: 'Garcia',
        },
        address: '654 Maple Avenue',
        city: 'Los Angeles',
        state: 'California',
    },
    {
        name: {
            firstName: 'Zachary',
            lastName: 'Davis',
        },
        address: '261 Battle Ford',
        city: 'Columbus',
        state: 'Ohio',
    },
    {
        name: {
            firstName: 'Robert',
            lastName: 'Smith',
        },
        address: '566 Brakus Inlet',
        city: 'Westerville',
        state: 'West Virginia',
    },
    {
        name: {
            firstName: 'Kevin',
            lastName: 'Yan',
        },
        address: '7777 Kuhic Knoll',
        city: 'South Linda',
        state: 'West Virginia',
    },
    {
        name: {
            firstName: 'John',
            lastName: 'Upton',
        },
        address: '722 Emie Stream',
        city: 'Huntington',
        state: 'Washington',
    },
    {
        name: {
            firstName: 'Nathan',
            lastName: 'Harris',
        },
        address: '1 Kuhic Knoll',
        city: 'Ohiowa',
        state: 'Nebraska',
    },
    {
        name: {
            firstName: 'Emily',
            lastName: 'Smith',
        },
        address: '123 Main Street',
        city: 'Springfield',
        state: 'Illinois',
    },
    {
        name: {
            firstName: 'Jessica',
            lastName: 'Johnson',
        },
        address: '456 Elm Avenue',
        city: 'Portland',
        state: 'Oregon',
    },
    {
        name: {
            firstName: 'Michael',
            lastName: 'Davis',
        },
        address: '789 Oak Lane',
        city: 'Austin',
        state: 'Texas',
    },
    {
        name: {
            firstName: 'Sarah',
            lastName: 'Wilson',
        },
        address: '321 Pine Road',
        city: 'Denver',
        state: 'Colorado',
    },
    {
        name: {
            firstName: 'Christopher',
            lastName: 'Lee',
        },
        address: '555 Cedar Street',
        city: 'Seattle',
        state: 'Washington',
    },
    {
        name: {
            firstName: 'Rachel',
            lastName: 'Anderson',
        },
        address: '987 Walnut Court',
        city: 'New York',
        state: 'New York',
    },
    {
        name: {
            firstName: 'David',
            lastName: 'Garcia',
        },
        address: '654 Maple Avenue',
        city: 'Los Angeles',
        state: 'California',
    },
    {
        name: {
            firstName: 'Zachary',
            lastName: 'Davis',
        },
        address: '261 Battle Ford',
        city: 'Columbus',
        state: 'Ohio',
    },
    {
        name: {
            firstName: 'Robert',
            lastName: 'Smith',
        },
        address: '566 Brakus Inlet',
        city: 'Westerville',
        state: 'West Virginia',
    },
    {
        name: {
            firstName: 'Kevin',
            lastName: 'Yan',
        },
        address: '7777 Kuhic Knoll',
        city: 'South Linda',
        state: 'West Virginia',
    },
    {
        name: {
            firstName: 'John',
            lastName: 'Upton',
        },
        address: '722 Emie Stream',
        city: 'Huntington',
        state: 'Washington',
    },
    {
        name: {
            firstName: 'Nathan',
            lastName: 'Harris',
        },
        address: '1 Kuhic Knoll',
        city: 'Ohiowa',
        state: 'Nebraska',
    },
    {
        name: {
            firstName: 'Emily',
            lastName: 'Smith',
        },
        address: '123 Main Street',
        city: 'Springfield',
        state: 'Illinois',
    },
    {
        name: {
            firstName: 'Jessica',
            lastName: 'Johnson',
        },
        address: '456 Elm Avenue',
        city: 'Portland',
        state: 'Oregon',
    },
    {
        name: {
            firstName: 'Michael',
            lastName: 'Davis',
        },
        address: '789 Oak Lane',
        city: 'Austin',
        state: 'Texas',
    },
    {
        name: {
            firstName: 'Sarah',
            lastName: 'Wilson',
        },
        address: '321 Pine Road',
        city: 'Denver',
        state: 'Colorado',
    },
    {
        name: {
            firstName: 'Sarah',
            lastName: 'Wilson',
        },
        address: '321 Pine Road',
        city: 'Denver',
        state: 'Colorado',
    },
];


const TableApp = () => {
    const { t, i18n } = useTranslation();

    const columns = [
        {
            accessorKey: 'name.firstName',
            header: `${t("ID")}`,
        },
        {
            accessorKey: 'name.lastName',
            header: `${t("Date Applied")}`,
        },
        {
            accessorKey: 'address',
            header: `${t("Applicant Name")}`,
        },
        {
            accessorKey: 'city',
            header: `${t("Company Name")}`,
        },
        {
            accessorKey: 'state',
            header: `${t("Position")}`,
        },
    ];
    const table = useMaterialReactTable({
        columns,
        data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        //MRT display columns can still work, optionally override cell renders with `displayColumnDefOptions`
/*         enableRowSelection: true,
 */        initialState: {
            pagination: { pageSize: 6, pageIndex: 0 },
            showGlobalFilter: true,
            showColumnFilters: true
        },
        //customize the MRT components
        muiPaginationProps: {
            rowsPerPageOptions: [5, 10, 15],
            variant: 'outlined',
        },
        paginationDisplayMode: 'pages',
    });

    return (
        <Stack sx={{ m: '2rem 0' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                {/**
         * Use MRT components along side your own markup.
         * They just need the `table` instance passed as a prop to work!
         */}
                {/* <MRT_GlobalFilterTextField table={table} /> */}
                <MRT_TablePagination table={table} />
            </Box>
            {/* Using Vanilla Material-UI Table components here */}
            <TableContainer>
                <Table>
                    {/* Use your own markup, customize however you want using the power of TanStack Table */}
                    <TableHead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableCell align="center" variant="head" key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.Header ??
                                                header.column.columnDef.header,
                                                header.getContext(),
                                            )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableHead>
                    <TableBody>
                        {table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id} selected={row.getIsSelected()}>
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell align="center" variant="body" key={cell.id}>
                                        {/* Use MRT's cell renderer that provides better logic than flexRender */}
                                        <MRT_TableBodyCellValue cell={cell} table={table} />
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <MRT_ToolbarAlertBanner stackAlertBanner table={table} />
        </Stack>
    );
}

export default TableApp
