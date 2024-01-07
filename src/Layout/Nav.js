import React, { useState, useEffect } from 'react'
import styles from '../Styles/Nav.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/images/APP.png'
import notification from '../assets/images/notification.svg'
import msg from '../assets/images/Group 2608549.svg'
import white from '../assets/images/Group 2608550.svg'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import lang from '../assets/images/Vector.svg'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie'
const Nav = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const languages = [
        {
            code: 'en',
            name: 'English',
            dir: 'ltr',
            country_code: 'gb',
        },
        {
            code: 'ar',
            name: 'Arabic',
            dir: 'rtl',
            country_code: 'sa',
        },


    ]
    const currentLanguageCode = cookies.get('i18next') || 'ar'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()
    useEffect(() => {

        document.body.dir = currentLanguage.dir || 'rtl'
        document.title = t("Dashboard")

    }, [currentLanguage, t])

    function handleLanguage(code, index, event) {
        window.location.reload();
        event.preventDefault();
        i18next.changeLanguage(code)
    }
    return (
        <>
            <div className={`${styles.navbar}`}>
                <div className={`${styles.wrapper}`}>
                    <div className={`${styles.logo__body}`}>
                        <Link to='/'>
                            <img alt='' src={logo} className={`${styles.logo}`} />
                        </Link>
                        <p className={`${styles.logo__title}`} >+PLUS</p>
                    </div>
                    <div className={`${styles.items}`}>
                        <div className={`${styles.item} ${styles.side}`}>
                            <div className={`${styles.inputBox_container}`}>
                                <svg className={`${styles.search_icon}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" alt="search icon">
                                    <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z" className={`${styles.ico}`}>
                                    </path>
                                </svg>
                                <input className={`${styles.inputBox}`} id="inputBox" type="text" placeholder={t("Search....")} />
                            </div>
                            <div className={`${styles.notification__body}`}>
                                <img alt='' src={white} className={`${styles.white2}`} />
                                {languages.map(({ code, name }, index) => (
                                    <>
                                        {currentLanguageCode === 'ar' && code === 'ar' ?
                                            <Link
                                                id={`language${index}`}
                                                key={code}
                                                onClick={(event) => { handleLanguage(code, index, event) }}
                                                className={` pt-2 ${styles.header__link} d-none`}
                                                href="#">
                                                <div className={`${styles.lang}`}>
                                                    <span>{code}</span>
                                                    <img alt='' src={lang} />
                                                </div>
                                            </Link>
                                            :
                                            currentLanguageCode === 'en' && code === 'en' ?
                                                <Link
                                                    id={`language${index}`}
                                                    key={code}
                                                    onClick={(event) => { handleLanguage(code, index, event) }}
                                                    className={` pt-2 ${styles.header__link} d-none`}
                                                    href="#">
                                                    <div className={`${styles.lang}`}>
                                                        <span>{code}</span>
                                                        <img alt='' src={lang} />
                                                    </div>
                                                </Link>
                                                :
                                                <Link
                                                    id={`language${index}`}
                                                    key={code}
                                                    onClick={(event) => { handleLanguage(code, index, event) }}
                                                    className={` pt-2 ${styles.header__link} `}
                                                    href="#">
                                                    <div className={`${styles.lang}`}>
                                                        <span>{code}</span>
                                                        <img alt='' src={lang} />
                                                    </div>
                                                </Link>

                                        }
                                    </>
                                ))}
                                {/* <div className={`${styles.lang}`}>
                                    <span>En</span>
                                    <img alt='' src={lang} />
                                </div> */}
                            </div>
                            <div className={`${styles.notification__body}`}>
                                <img alt='' src={white} className={`${styles.white2}`} />
                                <img alt='' src={notification} className={styles.noti} />
                            </div>
                            <img alt='' src={msg} className={`${styles.msg}`} />
                            <Link to='/user'>
                                <img alt='' src={white} className={`${styles.white}`} />
                            </Link>
                        </div>
                        <div className={`${styles.responsive}`}>
                            <MenuOpenIcon onClick={handleShow} className={`${styles.menu__icon}`} />
                            <Offcanvas show={show} onHide={handleClose} placement='end'>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    Some text as placeholder. In real life you can have the elements you
                                    have chosen. Like, text, images, lists, etc.
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Nav
