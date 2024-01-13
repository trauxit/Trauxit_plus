import React, { useState } from 'react'
import Sidebar from '../../Layout/Sidebar'
import styles from '../../Styles/shipment.module.css'
import Header from '../../Layout/Header'
import { useTranslation } from 'react-i18next';
import TableJobs from './TableJobs'
const Jobs = () => {
    const [active, setActive] = useState('all')
    const { t, i18n } = useTranslation();
    return (
        <>
            <Header />
            <section className={`${styles.home}`}>
                <Sidebar active='jobs' />
                <div className={`${styles.homeContainer}`}>
                    <p className={`${styles.new__title}`}>{t("Recent News:")}  <span className={`${styles.new__para}`}>{t("El Molla Inspects MIDOR Expansion Project. Sunday, 31st December 2023")}</span> </p>

                    <div className='mt-5'>
                        <p className={`${styles.list__title}`}>{t("Jobs list")}</p>
                        <div className={`${styles.list__body}`}>
                            <p className={`${styles.list__para}`}>{t("Table shows some details about Booking Information")}</p>
                            <div className={`${styles.active__body}`}>
                                <p className={`${active === 'all' ? styles.app__active : styles.app__para}`} onClick={() => setActive('all')}>{t("All")}</p>
                                <p className={`${active === 'pend' ? styles.app__active : styles.app__para}`} onClick={() => setActive('pend')}>{t("En-route")}</p>
                                <p className={`${active === 'hold' ? styles.app__active : styles.app__para}`} onClick={() => setActive('hold')}>{t("Completed")}</p>
                                <p className={`${active === 'short' ? styles.app__active : styles.app__para}`} onClick={() => setActive('short')}>{t("Cancelled")}</p>

                            </div>
                        </div>
                    </div>
                    <TableJobs />
                </div>
            </section>

        </>
    )
}

export default Jobs
