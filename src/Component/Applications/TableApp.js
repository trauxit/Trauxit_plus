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
            firstName: '1',
            lastName: '1-2-2023',
        },
        address: '555 Cedar Street',
        city: 'Seattle',
        state: 'Washington',
    },
    {
        name: {
            firstName: '2',
            lastName: '10-5-2023',
        },
        address: '987 Walnut Court',
        city: 'New York',
        state: 'New York',
    },
    {
        name: {
            firstName: '3',
            lastName: '4-5-2024',
        },
        address: '654 Maple ',
        city: 'Los Angeles',
        state: 'California',
    },
    {
        name: {
            firstName: '4',
            lastName: '7-1-2024',
        },
        address: '261 Battle Ford',
        city: 'Columbus',
        state: 'Ohio',
    },
    {
        name: {
            firstName: '5',
            lastName: '9-4-2022',
        },
        address: '566 Brakus Inlet',
        city: 'Westerville',
        state: 'West Virginia',
    },
    {
        name: {
            firstName: '6',
            lastName: '4-8-2023',
        },
        address: '7777 Kuhic Knoll',
        city: 'South Linda',
        state: 'West Virginia',
    },
    {
        name: {
            firstName: '7',
            lastName: '1-7-2022',
        },
        address: '722 Emie Stream',
        city: 'Huntington',
        state: 'Washington',
    },
    {
        name: {
            firstName: '8',
            lastName: '6-5-2024',
        },
        address: '1 Kuhic Knoll',
        city: 'Ohiowa',
        state: 'Nebraska',
    },
    {
        name: {
            firstName: '9',
            lastName: '6-3-2023',
        },
        address: '123 Main Street',
        city: 'Springfield',
        state: 'Illinois',
    },
    {
        name: {
            firstName: '10',
            lastName: '10-7-2022',
        },
        address: '456 Elm Avenue',
        city: 'Portland',
        state: 'Oregon',
    },
    {
        name: {
            firstName: '11',
            lastName: '6-8-2023',
        },
        address: '789 Oak Lane',
        city: 'Austin',
        state: 'Texas',
    },
    {
        name: {
            firstName: '12',
            lastName: '7-9-2024',
        },
        address: '321 Pine Road',
        city: 'Denver',
        state: 'Colorado',
    },
    {
        name: {
            firstName: '13',
            lastName: '10-9-2023',
        },
        address: '555 Cedar Street',
        city: 'Seattle',
        state: 'Washington',
    },
    {
        name: {
            firstName: '14',
            lastName: '14-5-2022',
        },
        address: '987 Walnut Court',
        city: 'New York',
        state: 'New York',
    },
    {
        name: {
            firstName: '15',
            lastName: 'Garcia',
        },
        address: '654 Maple Avenue',
        city: 'Los Angeles',
        state: 'California',
    },
    {
        name: {
            firstName: '16',
            lastName: 'Davis',
        },
        address: '261 Battle Ford',
        city: 'Columbus',
        state: 'Ohio',
    },
    {
        name: {
            firstName: '17',
            lastName: 'Smith',
        },
        address: '566 Brakus Inlet',
        city: 'Westerville',
        state: 'West Virginia',
    },
    {
        name: {
            firstName: '18',
            lastName: 'Yan',
        },
        address: '7777 Kuhic Knoll',
        city: 'South Linda',
        state: 'West Virginia',
    },
    {
        name: {
            firstName: '19',
            lastName: 'Upton',
        },
        address: '722 Emie Stream',
        city: 'Huntington',
        state: 'Washington',
    },
    {
        name: {
            firstName: '20',
            lastName: 'Harris',
        },
        address: '1 Kuhic Knoll',
        city: 'Ohiowa',
        state: 'Nebraska',
    },
    {
        name: {
            firstName: '21',
            lastName: 'Smith',
        },
        address: '123 Main Street',
        city: 'Springfield',
        state: 'Illinois',
    },
    {
        name: {
            firstName: '22',
            lastName: 'Johnson',
        },
        address: '456 Elm Avenue',
        city: 'Portland',
        state: 'Oregon',
    },
    {
        name: {
            firstName: '23',
            lastName: 'Davis',
        },
        address: '789 Oak Lane',
        city: 'Austin',
        state: 'Texas',
    },
    {
        name: {
            firstName: '24',
            lastName: 'Wilson',
        },
        address: '321 Pine Road',
        city: 'Denver',
        state: 'Colorado',
    },
    {
        name: {
            firstName: '25',
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
        {
            accessorKey: 'state',
            header: `${t("Contact")}`,
        },
        {
            accessorKey: 'address',
            header: `${t("Status")}`,
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
