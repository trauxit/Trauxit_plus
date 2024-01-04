import React, { useState } from 'react'
import Sidebar from '../../Layout/Sidebar'
import styles from '../../Styles/shipment.module.css'
import TableShipment from './TableShipment'
import Header from '../../Layout/Header'
const Shipment = () => {
    const [active, setActive] = useState('all')

    return (
        <>
            <Header />
            <section className={`${styles.home}`}>
                <Sidebar active='shipments' />
                <div className={`${styles.homeContainer}`}>
                    <p className={`${styles.new__title}`}>Recent News: <span className={`${styles.new__para}`}> El Molla Inspects MIDOR Expansion Project. Sunday, 31st December 2023</span> </p>
                    <div className='mt-5'>
                        <p className={`${styles.list__title}`}>Shipments list</p>
                        <div className={`${styles.list__body}`}>
                            <p className={`${styles.list__para}`}>Table shows some details about Booking Information</p>
                            <div className={`${styles.active__body}`}>
                                <p className={`${active === 'all' ? styles.app__active : styles.app__para}`} onClick={() => setActive('all')}>All</p>
                                <p className={`${active === 'pend' ? styles.app__active : styles.app__para}`} onClick={() => setActive('pend')}>Pending</p>
                                <p className={`${active === 'hold' ? styles.app__active : styles.app__para}`} onClick={() => setActive('hold')}>On-Hold</p>
                                <p className={`${active === 'short' ? styles.app__active : styles.app__para}`} onClick={() => setActive('short')}>Shortlisted</p>

                            </div>
                        </div>
                    </div>
                    <TableShipment />
                </div>
            </section>
        </>
    )
}

export default Shipment
