import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Styles/footer.module.css'
import { Container } from 'react-bootstrap'
const Footer = () => {
    return (
        <>

            <div className={`${styles.footer}`}>
                <Link className={`${styles.footer__link}`}>news & Updates</Link>
                <Link className={`${styles.footer__link}`}>Terms and Conditions</Link>
                <Link className={`${styles.footer__link}`}>Legal & Support</Link>
            </div>

        </>
    )
}

export default Footer
