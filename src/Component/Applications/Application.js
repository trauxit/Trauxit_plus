import React, { useState } from 'react'
import Sidebar from '../../Layout/Sidebar'
import styles from '../../Styles/application.module.css'
import Appglobal from '../../Global/Appglobal'
const Application = () => {
    const [active, setActive] = useState('all')
    return (
        <>
            <section className={`${styles.home}`}>
                <Sidebar active='applications' />
                <div className={`${styles.homeContainer}`}>
                    <p className={`${styles.new__title}`}>Recent News: <span className={`${styles.new__para}`}> El Molla Inspects MIDOR Expansion Project. Sunday, 31st December 2023</span> </p>
                    <Appglobal />
                    <div className='mt-5'>
                        <p className={`${styles.list__title}`}>Applicants List</p>
                        <div>
                            <p className={`${styles.list__para}`}>Table shows some details about Booking Information</p>
                            <div>
                                <p className={`${active === 'all' ? styles.app__active : styles.app__para}`} onClick={() => setActive('all')}>All</p>
                                <p className={`${active === 'pend' ? styles.app__active : styles.app__para}`} onClick={() => setActive('all')}>Pending</p>
                                <p className={`${active === 'hold' ? styles.app__active : styles.app__para}`} onClick={() => setActive('all')}>On-Hold</p>
                                <p className={`${active === 'short' ? styles.app__active : styles.app__para}`} onClick={() => setActive('all')}>Shortlisted</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Application
