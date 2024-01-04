import React from 'react'
import Sidebar from '../../Layout/Sidebar'
import styles from '../../Styles/dashboard.module.css'
import elli from '../../assets/images/Ellipse 1094.svg'
import money from '../../assets/images/svgexport-6 (2) 1.svg'
import { Col, Row } from 'react-bootstrap'
import vector from '../../assets/images/Vector (1).png'
import elli1 from '../../assets/images/Ellipse 1095.svg'
import up from '../../assets/images/mdi_uploads.svg'
import price from '../../assets/images/healthicons_money-bag.svg'
import bag from '../../assets/images/fluent-mdl2_add-work.svg'
import TableDash from './Table'
import { Link } from 'react-router-dom'
import Header from '../../Layout/Header'
const Dashboard = () => {
    return (
        <>
            <Header />
            <section className={`${styles.home}`}>
                <Sidebar active='dashboard' />
                <div className={`${styles.homeContainer}`}>
                    <p className={`${styles.new__title}`}>Recent News: <span className={`${styles.new__para}`}> El Molla Inspects MIDOR Expansion Project. Sunday, 31st December 2023</span> </p>
                    <div className={`${styles.business__body}`}>
                        <div>
                            <h4 className={`${styles.business__title}`}>Good Morning,</h4>
                            <p className={`${styles.business__para}`}>Here is your business overview for the last week!</p>
                        </div>
                        <div className={`${styles.business__img}`}>
                            <img alt='' src={elli} className={`${styles.elli}`} />
                            <img alt='' src={money} className={`${styles.money}`} />
                        </div>
                    </div>
                    <div className={`${styles.booked}`}>
                        <div className={`${styles.loads}`}>
                            <div>
                                <h4 className={`${styles.book__title}`}>Booked Loads</h4>
                                <p className={`${styles.book__para}`}>+59</p>
                                <img alt='' src={vector} /><span className={`${styles.book__num}`}> 55.3%</span>
                            </div>
                            <div className={`${styles.business__img}`}>
                                <img alt='' src={elli1} className={`${styles.elli1}`} />
                                <img alt='' src={up} className={`${styles.book__img}`} />
                            </div>
                        </div>
                        <div className={`${styles.loads}`}>
                            <div>
                                <h4 className={`${styles.book__title}`}>Total Paid</h4>
                                <p className={`${styles.book__para}`}>E£ 23,000</p>
                                <img alt='' src={vector} /><span className={`${styles.book__num}`}> 55.3%</span>
                            </div>
                            <div className={`${styles.business__img}`}>
                                <img alt='' src={elli1} className={`${styles.elli1}`} />
                                <img alt='' src={price} className={`${styles.book__img}`} />
                            </div>
                        </div>
                        <div className={`${styles.loads}`}>
                            <div>
                                <h4 className={`${styles.book__title}`}>Posted jops</h4>
                                <p className={`${styles.book__para}`}>+7</p>
                                <img alt='' src={vector} /><span className={`${styles.book__num}`}> 55.3%</span>
                            </div>
                            <div className={`${styles.business__img}`}>
                                <img alt='' src={elli1} className={`${styles.elli1}`} />
                                <img alt='' src={bag} className={`${styles.book__img}`} />
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.info__body}`}>
                        <div>
                            <h3 className={`${styles.info__title}`}>Booking Information</h3>
                            <p className={`${styles.info__para}`}>Table shows some details about Booking Information</p>
                        </div>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Weekly</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <TableDash />

                </div>
            </section>
        </>
    )
}

export default Dashboard
