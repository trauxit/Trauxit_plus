import React, { useState } from 'react'
import Sidebar from '../../Layout/Sidebar'
import styles from '../../Styles/wallet.module.css'
import Header from '../../Layout/Header'
import { Link } from 'react-router-dom'
import TablePay from './TablePay'
import { useTranslation } from 'react-i18next';
const PayInvoice = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Header />
            <section className={`${styles.home}`}>
                <Sidebar active='wallet' />
                <div className={`${styles.homeContainer}`}>
                    <div className={`${styles.links}`}>
                        <Link to='' className={`${styles.back__link}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                <path d="M18.7487 8.49969C18.7487 8.10187 18.5906 7.72034 18.3093 7.43903C18.028 7.15773 17.6465 6.99969 17.2487 6.99969H5.36868L9.30868 3.05969C9.57364 2.77534 9.71789 2.39925 9.71103 2.01065C9.70417 1.62205 9.54675 1.25128 9.27192 0.976449C8.9971 0.701623 8.62633 0.5442 8.23773 0.537343C7.84912 0.530487 7.47303 0.674733 7.18868 0.939693L0.68868 7.43969C0.407779 7.72094 0.25 8.10219 0.25 8.49969C0.25 8.89719 0.407779 9.27844 0.68868 9.55969L7.18868 16.0597C7.47303 16.3247 7.84912 16.4689 8.23773 16.462C8.62633 16.4552 8.9971 16.2978 9.27192 16.0229C9.54675 15.7481 9.70417 15.3773 9.71103 14.9887C9.71789 14.6001 9.57364 14.224 9.30868 13.9397L5.36868 9.99969H17.2487C17.6465 9.99969 18.028 9.84166 18.3093 9.56035C18.5906 9.27905 18.7487 8.89752 18.7487 8.49969Z" fill="#1C1A19" />
                            </svg>
                            {t("Back")}
                        </Link>
                    </div>
                    <h3 className={`${styles.invoice__title}`}>{t("Choosing the Invoice")}</h3>
                    <TablePay />

                </div>
            </section>
        </>
    )
}

export default PayInvoice
