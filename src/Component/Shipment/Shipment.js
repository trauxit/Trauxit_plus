import React, { useState } from 'react'
import Sidebar from '../../Layout/Sidebar'
import styles from '../../Styles/shipment.module.css'
import TableShipment from './TableShipment'
import Header from '../../Layout/Header'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
const Shipment = () => {
    const [active, setActive] = useState('all')
    const { t, i18n } = useTranslation();

    return (
        <>
            <Header />
            <section className={`${styles.home}`}>
                <Sidebar active='shipments' />
                <div className={`${styles.homeContainer}`}>
                    <p className={`${styles.new__title}`}>{t("Recent News:")}  <span className={`${styles.new__para}`}>{t("El Molla Inspects MIDOR Expansion Project. Sunday, 31st December 2023")}</span> </p>

                    <div className='mt-5'>
                        <p className={`${styles.list__title}`}>{t("Shipments list")}</p>
                        <div className={`${styles.list__body}`}>
                            <p className={`${styles.list__para}`}>{t("Table shows some details about Booking Information")}</p>
                            <div className={`${styles.active__body}`}>
                                <p className={`${active === 'all' ? styles.app__active : styles.app__para}`} onClick={() => setActive('all')}>{t("All")}</p>
                                <p className={`${active === 'pend' ? styles.app__active : styles.app__para}`} onClick={() => setActive('pend')}>{t("Pending")}</p>
                                <p className={`${active === 'hold' ? styles.app__active : styles.app__para}`} onClick={() => setActive('hold')}>{t("On-Hold")}</p>
                                <p className={`${active === 'short' ? styles.app__active : styles.app__para}`} onClick={() => setActive('short')}>{t("Shortlisted")}</p>

                            </div>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <TableShipment />
                    </div>
                    <Link className={`${styles.create__btn}`} to='/create-shipment'>
                        {t("Create a Shipment")}
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M14.5 9.33333V12.6667C14.5 13.0203 14.3595 13.3594 14.1095 13.6095C13.8594 13.8595 13.5203 14 13.1667 14H3.83333C3.47971 14 3.14057 13.8595 2.89052 13.6095C2.64048 13.3594 2.5 13.0203 2.5 12.6667V3.33333C2.5 2.97971 2.64048 2.64057 2.89052 2.39052C3.14057 2.14048 3.47971 2 3.83333 2H7.16667V3.33333H3.83333V12.6667H13.1667V9.33333H14.5Z" fill="white" />
                            <path d="M14.4987 4.66667H11.832V2H10.4987V4.66667H7.83203V6H10.4987V8.66667H11.832V6H14.4987V4.66667Z" fill="white" />
                        </svg>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Shipment
