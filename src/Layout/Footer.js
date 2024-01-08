import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Styles/footer.module.css'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t, i18n } = useTranslation();

    return (
        <>

            <div className={`${styles.footer}`}>
                <Link className={`${styles.footer__link}`}>{t("news & Updates")}</Link>
                <Link className={`${styles.footer__link}`}>{t("Terms and Conditions")}</Link>
                <Link className={`${styles.footer__link}`}>{t("Legal & Support")}</Link>
            </div>

        </>
    )
}

export default Footer
