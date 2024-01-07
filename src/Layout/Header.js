import React, { useState } from 'react'
import styles from '../Styles/header.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = (props) => {
    const [active, setActive] = useState(`${props.active}`)
    const { t, i18n } = useTranslation();

    return (
        <>
            <div className={`${styles.navbar}`}>
                <div className={`${styles.wrapper}`}>
                    <div className={`${styles.logo__body}`}>

                    </div>
                    <div className={`${styles.items}`}>
                        <div className={`${styles.item} ${styles.side}`}>
                            <Link to='/plus' className={`${styles.item__link} ${active === 'plus' ? styles.active : styles.not}`}> {t("Dashboard +Plus")}</Link>
                            <Link to='/lists' className={`${styles.item__link} ${active === 'lists' ? styles.active : styles.not}`}> {t("Lists")}</Link>
                            <Link to='' className={`${styles.item__link} ${active === 'task' ? styles.active : styles.not}`} > {t("Task lists")}</Link>
                            <Link to='/project' className={`${styles.item__link} ${active === 'project' ? styles.active : styles.not}`}>{t("My Projects")}</Link>
                            <Link to='' className={`${styles.item__link} ${active === 'feed' ? styles.active : styles.not}`}>{t("Feedback")}</Link>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Header
