import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StarIcon from '@mui/icons-material/Star';
import styles from '../../Styles/insight.module.css'
import { useTranslation } from 'react-i18next';
const TableInsight = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <TableContainer component={Paper} className={`${styles.tabs}`}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className={`${styles.tabcontrol}`}>
                        <TableRow className={`${styles.headerinsight}`}>
                            <TableCell className={`${styles.tabcontrol__title}`}> {t("Applicant Name")}</TableCell>
                            <TableCell className={`${styles.tabcontrol__title}`} > {t("Date")}</TableCell>
                            <TableCell className={`${styles.tabcontrol__title}`} >{t("Cost / H")}</TableCell>
                            <TableCell className={`${styles.tabcontrol__title}`} >{t("Status")}</TableCell>
                            <TableCell className={`${styles.tabcontrol__title}`} >{t("Rating")}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            key='1'
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" className={`${styles.name}`} >
                                Mohamed adel
                            </TableCell>
                            <TableCell >
                                <div className={`${styles.tab__para1}`}>17/12/2023</div>
                            </TableCell>
                            <TableCell className={`${styles.tab__para}`} >
                                <p className={`${styles.tab__para1}`}>120EGP</p>
                            </TableCell>
                            <TableCell className={`${styles.tab__para}`}  >
                                <div className={`${styles.tab__para1} ${styles.status}`}>Paid</div>
                            </TableCell>
                            <TableCell className={`${styles.tab__para}`}  >
                                <StarIcon className={`${styles.star}`} />
                                <StarIcon className={`${styles.star}`} />
                                <StarIcon className={`${styles.star}`} />
                                <StarIcon className={`${styles.star}`} />
                                <StarIcon className={`${styles.star__disable}`} />
                            </TableCell>
                        </TableRow>
                        <TableRow
                            key='2'
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" className={`${styles.name}`} >
                                Ahmed Khaled
                            </TableCell>
                            <TableCell >
                                <div className={`${styles.tab__para1}`}>17/12/2023</div>
                            </TableCell>
                            <TableCell className={`${styles.tab__para}`} >
                                <div className={`${styles.tab__para1}`}>120EGP</div>

                            </TableCell>
                            <TableCell className={`${styles.tab__para}`}  >
                                <div className={`${styles.tab__para1} ${styles.status} ${styles.booked__status}`}>booked</div>
                            </TableCell>
                            <TableCell className={`${styles.tab__para}`}  >
                                <StarIcon className={`${styles.star}`} />
                                <StarIcon className={`${styles.star}`} />
                                <StarIcon className={`${styles.star}`} />
                                <StarIcon className={`${styles.star}`} />
                                <StarIcon className={`${styles.star__disable}`} />
                            </TableCell>
                        </TableRow>
                        <TableRow
                            key='3'
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" className={`${styles.name}`} >
                                Basmala ayman
                            </TableCell>
                            <TableCell >
                                <div className={`${styles.tab__para1}`}>17/12/2023</div>
                            </TableCell>
                            <TableCell className={`${styles.tab__para}`} >
                                <div className={`${styles.tab__para1}`}>120EGP</div>

                            </TableCell>
                            <TableCell className={`${styles.tab__para}`}  >
                                <div className={`${styles.tab__para1} ${styles.status}`}>Paid</div>

                            </TableCell>
                            <TableCell className={`${styles.tab__para}`}  >
                                <StarIcon className={`${styles.star}`} />
                                <StarIcon className={`${styles.star}`} />
                                <StarIcon className={`${styles.star}`} />
                                <StarIcon className={`${styles.star}`} />
                                <StarIcon className={`${styles.star__disable}`} />
                            </TableCell>
                        </TableRow>
                        <TableRow
                            key='4'
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" className={`${styles.name}`} >
                                Ola Adel
                            </TableCell>
                            <TableCell >
                                <div className={`${styles.tab__para1}`}>17/12/2023</div>
                            </TableCell>
                            <TableCell className={`${styles.tab__para}`} >
                                <div className={`${styles.tab__para1}`}>120EGP</div>
                            </TableCell>
                            <TableCell className={`${styles.tab__para}`}  >
                                <div className={`${styles.tab__para1} ${styles.status} ${styles.booked__status}`}>booked</div>
                            </TableCell>
                            <TableCell className={`${styles.tab__para}`}  >
                                <StarIcon className={`${styles.star}`} />
                                <StarIcon className={`${styles.star}`} />
                                <StarIcon className={`${styles.star}`} />
                                <StarIcon className={`${styles.star}`} />
                                <StarIcon className={`${styles.star__disable}`} />
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TableInsight
