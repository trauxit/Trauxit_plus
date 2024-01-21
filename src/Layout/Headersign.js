import React, { useState } from 'react'
import styles from '../Styles/header.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Headersign = (props) => {
    const [active, setActive] = useState(`${props.active}`)
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className={`${styles.navbar1}`}>
                <div className={`${styles.wrapper1}`}>
                    <div className={`${styles.logo__body}`}>

                    </div>
                    <div className={`${styles.items1}`}>
                        <div className={`${styles.item} ${styles.side}`}>
                            <Link to='/plus' className={`${styles.item__link} ${active === 'plus' ? styles.active : styles.not}`}> {t("Home")}</Link>
                            <Link to='/lists' className={`${styles.item__link} ${active === 'lists' ? styles.active : styles.not}`}> {t("Support")}</Link>
                            <Link to='' className={`${styles.item__link} ${active === 'task' ? styles.active : styles.not}`} > {t("Our App")}</Link>
                            <Link to='/project' className={`${styles.item__link} ${active === 'project' ? styles.active : styles.not}`}>{t("Our Company")}</Link>
                            <Link to='' className={`${styles.item__link} ${active === 'feed' ? styles.active : styles.not}`}>{t("Blog")}</Link>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Headersign
