import React, { useState } from 'react'
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
const Nav = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                                <input className={`${styles.inputBox}`} id="inputBox" type="text" placeholder="Search...." />
                            </div>
                            <div className={`${styles.notification__body}`}>
                                <img alt='' src={white} className={`${styles.white2}`} />
                                <div className={`${styles.lang}`}>
                                    <span>En</span>
                                    <img alt='' src={lang} />
                                </div>
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
