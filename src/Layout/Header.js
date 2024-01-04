import React, { useState } from 'react'
import styles from '../Styles/header.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = (props) => {
    const [active, setActive] = useState(`${props.active}`)
    return (
        <>
            <div className={`${styles.navbar}`}>
                <div className={`${styles.wrapper}`}>
                    <div className={`${styles.logo__body}`}>

                    </div>
                    <div className={`${styles.items}`}>
                        <div className={`${styles.item} ${styles.side}`}>
                            <Link to='' className={`${styles.item__link} ${active === 'plus' ? styles.active : styles.not}`}>Dashboard +Plus</Link>
                            <Link to='' className={`${styles.item__link} ${active === 'lists' ? styles.active : styles.not}`}>Lists</Link>
                            <Link to='' className={`${styles.item__link} ${active === 'task' ? styles.active : styles.not}`} >Task lists</Link>
                            <Link to='' className={`${styles.item__link} ${active === 'project' ? styles.active : styles.not}`}>My Projects</Link>
                            <Link to='' className={`${styles.item__link} ${active === 'feed' ? styles.active : styles.not}`}>Feedback</Link>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Header
