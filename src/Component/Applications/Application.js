import React, { useState } from 'react'
import Sidebar from '../../Layout/Sidebar'
import styles from '../../Styles/application.module.css'
import Appglobal from '../../Global/Appglobal'
import TableApp from './TableApp'
import { Link } from 'react-router-dom'
import Header from '../../Layout/Header'
import { useTranslation } from 'react-i18next';

const Application = () => {
    const [active, setActive] = useState('all')
    const { t, i18n } = useTranslation();

    return (
        <>
            <Header />
            <section className={`${styles.home}`}>
                <Sidebar active='applications' />
                <div className={`${styles.homeContainer}`}>
                    <p className={`${styles.new__title}`}>{t("Recent News:")} <span className={`${styles.new__para}`}> {t("El Molla Inspects MIDOR Expansion Project. Sunday, 31st December 2023")}</span> </p>
                    <Appglobal />
                    <div className='mt-5'>
                        <p className={`${styles.list__title}`}>{t("Applicants List")}</p>
                        <div className={`${styles.list__body}`}>
                            <p className={`${styles.list__para}`}>{t("Table shows some details about Booking Information")}</p>
                            <div className={`${styles.active__body}`}>
                                <p className={`${active === 'all' ? styles.app__active : styles.app__para}`} onClick={() => setActive('all')}>{t("All")}</p>
                                <p className={`${active === 'pend' ? styles.app__active : styles.app__para}`} onClick={() => setActive('pend')}>{t("Pending")}</p>
                                <p className={`${active === 'hold' ? styles.app__active : styles.app__para}`} onClick={() => setActive('hold')}>{t("On-Hold")}</p>
                                <p className={`${active === 'short' ? styles.app__active : styles.app__para}`} onClick={() => setActive('short')}>{t("Shortlisted")}</p>
                                <select class={`${styles.select} form-select`} aria-label="Default select example">
                                    <option selected>Weekly</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <TableApp />

                </div>
            </section>
        </>
    )
}

export default Application
