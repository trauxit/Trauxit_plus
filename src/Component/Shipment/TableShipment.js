import { useMemo, useState } from 'react';
import {
    MRT_GlobalFilterTextInput,
    MRT_ToggleFiltersButton,
    MantineReactTable,
    useMantineReactTable,
} from 'mantine-react-table';
import { Box, Button, Flex, Menu, Text, Title } from '@mantine/core';
import { IconUserCircle, IconSend } from '@tabler/icons-react';
import styles from '../../Styles/shipment.module.css'
export const data = [
    {
        id: '1',
        name: {
            firstName: 'Christopher',
            lastName: 'Lee',
        },
        address: '555 Cedar Street',
        city: 'Seattle',
        state: 'Washington',
    },
    {
        id: '2',
        name: {
            firstName: 'Rachel',
            lastName: 'Anderson',
        },
        address: '987 Walnut Court',
        city: 'New York',
        state: 'New York',
    },
    {
        id: '3',
        name: {
            firstName: 'David',
            lastName: 'Garcia',
        },
        address: '654 Maple Avenue',
        city: 'Los Angeles',
        state: 'California',
    },
    {
        id: '4',
        name: {
            firstName: 'Zachary',
            lastName: 'Davis',
        },
        address: '261 Battle Ford',
        city: 'Columbus',
        state: 'Ohio',
    },
    {
        id: '5',
        name: {
            firstName: 'Robert',
            lastName: 'Smith',
        },
        address: '566 Brakus Inlet',
        city: 'Westerville',
        state: 'West Virginia',
    },
    {
        id: '6',
        name: {
            firstName: 'Kevin',
            lastName: 'Yan',
        },
        address: '7777 Kuhic Knoll',
        city: 'South Linda',
        state: 'West Virginia',
    },
    {
        id: '7',
        name: {
            firstName: 'John',
            lastName: 'Upton',
        },
        address: '722 Emie Stream',
        city: 'Huntington',
        state: 'Washington',
    },
    {
        id: '8',
        name: {
            firstName: 'Nathan',
            lastName: 'Harris',
        },
        address: '1 Kuhic Knoll',
        city: 'Ohiowa',
        state: 'Nebraska',
    },

];

const TableShipment = () => {
    const [view, setView] = useState()
    const handleview = (item) => {
        setView(item)
        console.log(item, 'h')

    }
    console.log(view, 'kk')

    const columns = useMemo(
        () => [
            {
                id: 'employee', //id used to define `group` column
                columns: [
                    {
                        accessorKey: 'email', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
                        enableClickToCopy: true,
                        header: 'Email',
                        size: 300,
                    },
                    {
                        accessorKey: 'id',
                        header: `View`,
                        columnDefType: 'display',
                        enableColumnOrdering: 1,
                        Cell: ({ renderedCellValue, row, cell }) => (
                            <>
                                <div>
                                    <button onClick={() => handleview(row.original.id)}>
                                        <p className={`${view === row.original.id ? styles.view__active : styles.view__dis}`}>View</p>
                                    </button>
                                </div>
                            </>
                        ),
                    },
                ],
            },
        ],
        [],
    );

    const table = useMantineReactTable({
        columns,
        data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        enableColumnFilterModes: true,
        enableColumnOrdering: true,
        enableFacetedValues: true,
        enableGrouping: true,
        enablePinning: true,
        enableRowSelection: true,
        initialState: { showColumnFilters: false, showGlobalFilter: true },
        paginationDisplayMode: 'pages',
        positionToolbarAlertBanner: 'bottom',
        mantinePaginationProps: {
            radius: 'xl',
            size: 'lg',
        },
        mantineSearchTextInputProps: {
            placeholder: 'Search Employees',
        },
        renderDetailPanel: ({ row }) => (
            <>
                <p>jjkjk</p>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '16px',
                        padding: '16px',
                    }}
                >
                    <p>jj</p>j
                    <Box sx={{ textAlign: 'center' }}>
                        <Title>Signature Catch Phrase:</Title>
                        <Text>&quot;{row.original.signatureCatchPhrase}&quot;</Text>
                    </Box>
                </Box>
            </>
        ),
        /*  renderRowActionMenuItems: () => (
             <>
                 <Menu.Item icon={<IconUserCircle />}>View Profile</Menu.Item>
                 <Menu.Item icon={<IconSend />}>Send Email</Menu.Item>
             </>
         ), */
        /* renderTopToolbar: ({ table }) => {
            const handleDeactivate = () => {
                table.getSelectedRowModel().flatRows.map((row) => {
                    alert('deactivating ' + row.getValue('name'));
                });
            };

            const handleActivate = () => {
                table.getSelectedRowModel().flatRows.map((row) => {
                    alert('activating ' + row.getValue('name'));
                });
            };

            const handleContact = () => {
                table.getSelectedRowModel().flatRows.map((row) => {
                    alert('contact ' + row.getValue('name'));
                });
            };

            return (
                <Flex p="md" justify="space-between">
                    <Flex gap="xs">
                        
                        <MRT_GlobalFilterTextInput table={table} />
                        <MRT_ToggleFiltersButton table={table} />
                    </Flex>
                    <Flex sx={{ gap: '8px' }}>
                        <Button
                            color="red"
                            disabled={!table.getIsSomeRowsSelected()}
                            onClick={handleDeactivate}
                            variant="filled"
                        >
                            Deactivate
                        </Button>
                        <Button
                            color="green"
                            disabled={!table.getIsSomeRowsSelected()}
                            onClick={handleActivate}
                            variant="filled"
                        >
                            Activate
                        </Button>
                        <Button
                            color="blue"
                            disabled={!table.getIsSomeRowsSelected()}
                            onClick={handleContact}
                            variant="filled"
                        >
                            Contact
                        </Button>
                    </Flex>
                </Flex>
            );
        }, */
    });

    return <MantineReactTable table={table} />;
}

export default TableShipment
