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
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



export const data = [
    {
        id: '1',
        name: {
            firstName: 'Christopher',
            lastName: 'Lee',
        },
        address: '5-5-20222',
        city: '15 km',
        state: '200 EGP',
        status: "pending"
    },
    {
        id: '2',
        name: {
            firstName: 'Rachel',
            lastName: 'Anderson',
        },
        address: '1-2-2022',
        city: '22 km',
        state: '150 EGP',
        status: "pending"
    },
    {
        id: '3',
        name: {
            firstName: 'David',
            lastName: 'Garcia',
        },
        address: '8-5-2023',
        city: '10 km',
        state: '30 EGP',
        status: "pending"
    },
    {
        id: '4',
        name: {
            firstName: 'Zachary',
            lastName: 'Davis',
        },
        address: '2-10-2024',
        city: '70 km',
        state: '140 EGP',
        status: "pending"
    },
    {
        id: '5',
        name: {
            firstName: 'Robert',
            lastName: 'Smith',
        },
        address: '4-7-2022',
        city: '50 km',
        state: '200 EGP',
        status: "pending"
    },
    {
        id: '6',
        name: {
            firstName: 'Kevin',
            lastName: 'Yan',
        },
        address: '30-1-2023',
        city: '17 km',
        state: '60 EGP',
        status: "pending"
    },
    {
        id: '7',
        name: {
            firstName: 'John',
            lastName: 'Upton',
        },
        address: '18-9-20222',
        city: '120 km',
        state: '140 EGP',
        status: "pending"
    },
    {
        id: '8',
        name: {
            firstName: 'Nathan',
            lastName: 'Harris',
        },
        address: '8-9-2023',
        city: '50 km',
        state: '50 EGP',
        status: "pending"
    },
    {
        id: '6',
        name: {
            firstName: 'Kevin',
            lastName: 'Yan',
        },
        address: '14-2-2022',
        city: '8 km',
        state: '140 EGP',
        status: "pending"
    },
    {
        id: '7',
        name: {
            firstName: 'John',
            lastName: 'Upton',
        },
        address: '23-1-2024',
        city: '13 km',
        state: '190 EGP',
        status: "pending"
    },
    {
        id: '8',
        name: {
            firstName: 'Nathan',
            lastName: 'Harris',
        },
        address: '4-1-2023',
        city: '140 km',
        state: '200 EGP',
        status: "pending"
    }, {
        id: '6',
        name: {
            firstName: 'Kevin',
            lastName: 'Yan',
        },
        address: '20-2-2015',
        city: '30 km',
        state: '100 EGP',
        status: "pending"
    },
    {
        id: '7',
        name: {
            firstName: 'John',
            lastName: 'Upton',
        },
        address: '7-5-2023',
        city: '70 km',
        state: '130 EGP',
        status: "pending"
    },
    {
        id: '8',
        name: {
            firstName: 'Nathan',
            lastName: 'Harris',
        },
        address: '12-8-2021',
        city: '180 km',
        state: '180 EGP',
        status: "pending"
    },
];

const TableShipment = () => {
    const { t, i18n } = useTranslation();

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
                        accessorKey: 'id', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
                        enableClickToCopy: true,
                        header: `${t("ID")}`
                    },
                    {
                        accessorKey: 'address', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
                        enableClickToCopy: true,
                        header: `${t("Date Applied")}`,
                    },
                    {
                        accessorKey: 'name.firstName', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
                        enableClickToCopy: true,
                        header: `${t("Pick up")}`,
                    },
                    {
                        accessorKey: 'name.lastName', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
                        enableClickToCopy: true,
                        header: `${t("Drop Off")}`,
                    },
                    {
                        accessorKey: 'city', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
                        enableClickToCopy: true,
                        header: `${t("Distance")}`,
                    },
                    {
                        accessorKey: 'state', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
                        enableClickToCopy: true,
                        header: `${t("Price")}`,
                    },
                    {
                        accessorKey: 'status', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
                        enableClickToCopy: true,
                        header: `${t("Status")}`,
                    },

                ],
            },
        ],
        [],
    );
    const CustomExpandIcon = ({ isExpanded }) => (
        <span>{isExpanded ? '-' : '+'}</span>
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

        positionExpandColumn: 'last',
        renderDetailPanel: ({ row }) => (
            <>

                <Row className={`${styles.row__details}`}>
                    <Col xl='3'>
                        <div className={`${styles.route}`}>
                            <h3>{t("History")}</h3>
                            <div className={`${styles.route__details}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="172" viewBox="0 0 8 172" fill="none">
                                    <line x1="4.5" y1="4" x2="4.5" y2="168.002" stroke="#1C1A19" />
                                    <circle cx="4" cy="4" r="4" fill="#FF8201" />
                                    <circle cx="4" cy="45" r="4" fill="#FF8201" />
                                    <circle cx="4" cy="86" r="4" fill="#FF8201" />
                                    <circle cx="4" cy="127" r="4" fill="#FF8201" />
                                    <circle cx="4" cy="168" r="4" fill="#FF8201" />
                                </svg>
                                <div>
                                    <p>{t("Shipment created")}</p>
                                    <p> {t("Shipment Accepted")}</p>
                                    <p> {t("En-Route")}</p>
                                    <p> {t("Shipment Dropped")}</p>
                                    <p className={`${styles.color}`}>{t("PAID - Approved")}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl='8'>
                        <div className={`${styles.cargo}`}>
                            <p className={`${styles.cargo__para}`}>{t("Cargo details")} </p>
                            <p className={`${styles.cargo__status}`}>{t("PAID - APPROVED")}</p>
                        </div>
                        <div className={`${styles.shipment}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8069 13.2253H21.4844V11.1763C21.4844 11.0707 21.4659 10.9804 21.424 10.8819L20.0106 7.55379C19.8748 7.2341 19.5546 7.03387 19.1791 7.03387H15.9287V15.8282H16.2501C16.2501 14.6616 17.1962 13.7155 18.3628 13.7155C19.5294 13.7155 20.4755 14.6617 20.4755 15.8282H20.9498C21.2442 15.8282 21.4843 15.5882 21.4843 15.2938V14.56H20.8069C20.6712 14.56 20.5605 14.4493 20.5605 14.3136V13.4716C20.5606 13.3359 20.6712 13.2253 20.8069 13.2253ZM16.3367 10.9102V8.12927H19.0649L20.246 10.9102H16.3367ZM14.5287 4.74707C10.5027 4.74707 6.47672 4.74707 2.45077 4.74707C2.26093 4.74707 2.10702 4.90098 2.10702 5.09082C2.10702 5.28066 2.26093 5.43457 2.45077 5.43457H4.35583C4.68965 5.43457 4.96276 5.70768 4.96276 6.0415C4.96276 6.37533 4.68965 6.64844 4.35583 6.64844H1.31936H0.859375C0.669539 6.64844 0.515625 6.80235 0.515625 6.99219C0.515625 7.18202 0.669539 7.33594 0.859375 7.33594H3.81171C4.14554 7.33594 4.41865 7.60905 4.41865 7.94287C4.41865 8.2767 4.14554 8.5498 3.81171 8.5498H1.82695C1.63711 8.5498 1.4832 8.70372 1.4832 8.89355C1.4832 9.08339 1.63711 9.2373 1.82695 9.2373H4.68136C5.01518 9.2373 5.28829 9.51041 5.28829 9.84424C5.28829 10.1781 5.01518 10.4512 4.68136 10.4512C3.40738 10.4512 2.13336 10.4511 0.859375 10.4512C0.669539 10.4512 0.515625 10.6051 0.515625 10.7949C0.515625 10.9848 0.669539 11.1387 0.859375 11.1387H3.81171V15.1157C3.81171 15.5082 4.13183 15.8283 4.52431 15.8283H5.99865C5.99865 14.6617 6.94478 13.7156 8.11134 13.7156C9.27794 13.7156 10.2241 14.6617 10.2241 15.8283H15.2412V5.45966C15.2413 5.06719 14.9211 4.74707 14.5287 4.74707ZM9.88277 13.096C8.25069 13.096 6.92764 11.7729 6.92764 10.1409C6.92764 8.50877 8.25069 7.18572 9.88277 7.18572C11.5149 7.18572 12.8379 8.50877 12.8379 10.1409C12.8379 11.7729 11.5149 13.096 9.88277 13.096ZM9.49463 10.4015L10.9316 8.95023C11.1016 8.77844 11.3792 8.77797 11.5504 8.9483C11.7217 9.11858 11.7222 9.3953 11.5523 9.56679C10.9696 10.1549 10.3909 10.7468 9.80551 11.3322C9.63437 11.5034 9.35679 11.5034 9.18564 11.3322L8.21447 10.3611C8.04332 10.1899 8.04332 9.91234 8.21447 9.7412C8.38561 9.57005 8.66319 9.57005 8.83433 9.7412L9.49463 10.4015ZM8.11138 14.403C7.32424 14.403 6.6862 15.0411 6.6862 15.8283C6.6862 16.6154 7.32428 17.2535 8.11138 17.2535C8.89853 17.2535 9.53661 16.6154 9.53661 15.8283C9.53661 15.0411 8.89853 14.403 8.11138 14.403ZM8.11138 16.3138C7.843 16.3138 7.62579 16.0966 7.62579 15.8283C7.62579 15.5599 7.843 15.3427 8.11138 15.3427C8.37977 15.3427 8.59697 15.5599 8.59697 15.8283C8.59697 16.0966 8.37977 16.3138 8.11138 16.3138ZM18.3628 14.403C17.5757 14.403 16.9376 15.0411 16.9376 15.8283C16.9376 16.6154 17.5757 17.2535 18.3628 17.2535C19.15 17.2535 19.788 16.6154 19.788 15.8283C19.7881 15.0411 19.15 14.403 18.3628 14.403ZM18.3628 16.3138C18.0944 16.3138 17.8772 16.0966 17.8772 15.8283C17.8772 15.5599 18.0944 15.3427 18.3628 15.3427C18.6312 15.3427 18.8484 15.5599 18.8484 15.8283C18.8484 16.0966 18.6312 16.3138 18.3628 16.3138Z" fill="#1C1A19" />
                            </svg>
                            <span> {t("Shipment")}</span>
                        </div>
                        <div className={`${styles.first}`}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>{t("Load Type")}</Form.Label>
                                <Form.Control type="load" placeholder="name@example.com" value="DRY VAN" readOnly />
                            </Form.Group>
                            <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>{t("Weight")}</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Recipient's username"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        value='2000'
                                        readOnly
                                    />
                                    <InputGroup.Text id="basic-addon2">{t("Lbs")}</InputGroup.Text>
                                </InputGroup>
                            </Form.Group>
                        </div>
                        <div className={`${styles.second}`}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>{t("Packing Type")}</Form.Label>
                                <Form.Control type="type" placeholder="name@example.com" value="Pallets" readOnly />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>{t("Commodity")}</Form.Label>
                                <Form.Control type="commodity" placeholder="name@example.com" value={`${row.original.address}`} readOnly />
                            </Form.Group>
                        </div>
                        <div className={`${styles.view__btn}`}>
                            <Link className={`${styles.view__link}`} to={`/shipment-details/${row.original.id}`}>{t("View More")}</Link>
                        </div>
                    </Col>
                </Row>


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
