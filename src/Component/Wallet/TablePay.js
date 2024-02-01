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
import payuser from '../../assets/images/payuser.png'
import styles from '../../Styles/wallet.module.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const data = [
    {
        name: {
            firstName: 'mostafa omar',
            lastName: '12345',
        },
        address: '01/01/2023',
        city: '$5000',
        state: 'Washington',
    },
    {
        name: {
            firstName: 'mostafa omar',
            lastName: '12345',
        },
        address: '01/01/2023',
        city: '$5000',
        state: 'New York',
    },
    {
        name: {
            firstName: 'mostafa omar',
            lastName: '12345',
        },
        address: '01/01/2023',
        city: '$5000',
        state: 'Washington',
    },
    {
        name: {
            firstName: 'mostafa omar',
            lastName: '12345',
        },
        address: '01/01/2023',
        city: '$5000',
        state: 'New York',
    },
    {
        name: {
            firstName: 'mostafa omar',
            lastName: '12345',
        },
        address: '01/01/2023',
        city: '$5000',
        state: 'Washington',
    },
    {
        name: {
            firstName: 'mostafa omar',
            lastName: '12345',
        },
        address: '01/01/2023',
        city: '$5000',
        state: 'New York',
    },
    {
        name: {
            firstName: 'mostafa omar',
            lastName: '12345',
        },
        address: '01/01/2023',
        city: '$5000',
        state: 'Washington',
    },
    {
        name: {
            firstName: 'mostafa omar',
            lastName: '12345',
        },
        address: '01/01/2023',
        city: '$5000',
        state: 'New York',
    },
    {
        name: {
            firstName: 'mostafa omar',
            lastName: '12345',
        },
        address: '01/01/2023',
        city: '$5000',
        state: 'Washington',
    },
    {
        name: {
            firstName: 'mostafa omar',
            lastName: '12345',
        },
        address: '01/01/2023',
        city: '$5000',
        state: 'New York',
    },
    {
        name: {
            firstName: 'mostafa omar',
            lastName: '12345',
        },
        address: '01/01/2023',
        city: '$5000',
        state: 'Washington',
    },
    {
        name: {
            firstName: 'mostafa omar',
            lastName: '12345',
        },
        address: '01/01/2023',
        city: '$5000',
        state: 'New York',
    },
]

const TablePay = () => {
    const { t, i18n } = useTranslation();
    const columns = [
        {
            accessorFn: (row) => `${row.name.firstName}`,
            header: `Name`,
            Cell: ({ renderedCellValue, row, cell }) => (
                <>
                    <img alt='' src={payuser} />
                    <span> {row.original.name.firstName}</span>
                </>
            ),
        },
        {
            accessorKey: 'name.lastName',
            header: `${t("Invoice Number")}`,
        },
        {
            accessorKey: 'address',
            header: `${t("Date")}`,
        },
        {
            accessorKey: 'city',
            header: `${t("Amount")}`,
        },
        {
            accessorFn: (row) => `${row.state}`,
            header: `${t("Select For pay Invoice")}`,
            Cell: ({ renderedCellValue, row, cell }) => (
                <>
                    <button className={`${styles.select__btn}`}>{t("Select")}</button>
                </>
            ),
        },

    ];
    const table = useMaterialReactTable({
        columns,
        data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        //MRT display columns can still work, optionally override cell renders with `displayColumnDefOptions`
        enableRowSelection: true,
        initialState: {
            pagination: { pageSize: 7, pageIndex: 0 },
            showGlobalFilter: true,
        },
        //customize the MRT components
        muiPaginationProps: {
            rowsPerPageOptions: [5, 10, 15],
            variant: 'outlined',
        },
        paginationDisplayMode: 'pages',
    });
    return (
        <>
            <div className='pay__table'>
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
                        <MRT_GlobalFilterTextField table={table} />

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

            </div>
            <div className={`${styles.total__body}`}>
                <div></div>
                <div className={`${styles.amount__body}`}>
                    <h6>{t("Total amount:")}</h6>
                    <p>19,570.00</p>
                </div>
            </div>
            <div className={`${styles.total__body}`}>
                <div></div>
                <Link className={`${styles.invoice__btn}`} to='/payment'>{t("Pay Invoice")}</Link>
            </div>
        </>
    )
}

export default TablePay
