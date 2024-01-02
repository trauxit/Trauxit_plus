import React, { useState } from 'react'
import Sidebar from '../../Layout/Sidebar'
import styles from '../../Styles/insight.module.css'

import bag from '../../assets/images/fluent-mdl2_add-work.svg'
import { Col, Row } from 'react-bootstrap'
import logo from '../../assets/images/APP.png'
import eliilogo from '../../assets/images/Ellipse 1096.svg'
import right from '../../assets/images/ic_round-done-all.svg'
import right2 from '../../assets/images/fluent-mdl2_completed-solid.svg'
import ChartComp from './ChartInsight'
import TableInsight from './TableDash'
import Appglobal from '../../Global/Appglobal'
import { Link } from 'react-router-dom'

const Insight = () => {
    const [active, setActive] = useState('posted')
    const [job, setJob] = useState('post')
    return (
        <>
            <section className={`${styles.home}`}>
                <Sidebar active='insights' />
                <div className={`${styles.homeContainer}`}>
                    <p className={`${styles.new__title}`}>Recent News: <span className={`${styles.new__para}`}> El Molla Inspects MIDOR Expansion Project. Sunday, 31st December 2023</span> </p>
                    <Appglobal />
                    <Row className='mt-5'>
                        <Col xxl='4'>
                            <div className={`${styles.insight__jobs}`}>
                                <div className={`${styles.logo__body}`}>
                                    <img alt='' src={eliilogo} className={`${styles.ellilogo}`} />
                                    <img alt='' src={logo} className={`${styles.logo}`} />
                                </div>
                                <p className={`${styles.profile__para}`}>Profile Summary</p>
                                <ul>
                                    <li className={` ${active === 'posted' ? styles.active : styles.li}`} onClick={() => setActive('posted')}>
                                        <img alt='' src={bag} className={`${styles.job__img}`} />
                                        <div>
                                            <p className={`${styles.insight__para}`}>+10</p>
                                            <span className={`${styles.span}`}>Jobs Posted</span>
                                        </div>
                                    </li>
                                    <li className={` ${active === 'active' ? styles.active : styles.li}`} onClick={() => setActive('active')}>
                                        <img alt='' src={right} className={`${styles.job__img}`} />

                                        <div>
                                            <p className={`${styles.insight__para}`}>+10</p>
                                            <span className={`${styles.span}`}>Actives Jobs</span>
                                        </div>
                                    </li>
                                    <li className={` ${active === 'completed' ? styles.active : styles.li}`} onClick={() => setActive('completed')}>
                                        <img alt='' src={right2} className={`${styles.job__img}`} />

                                        <div>
                                            <p className={`${styles.insight__para}`}>+10</p>
                                            <span className={`${styles.span}`}>Completed Jobs</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xxl='7'>
                            <div className={`${styles.summary__chart}`}>
                                <h3 className={`${styles.summary__title}`}>Profile Summary</h3>
                                <div className={`${styles.summary__body}`}>
                                    <p className={`${job === 'post' ? styles.active__job : styles.job__para}`} onClick={() => setJob('post')}>Jobs Posted</p>
                                    <p className={`${job === 'pend' ? styles.active__job : styles.job__para}`} onClick={() => setJob('pend')}>Pending</p>
                                    <p className={`${job === 'approve' ? styles.active__job : styles.job__para}`} onClick={() => setJob('approve')}>Approved</p>
                                    <p className={`${job === 'reject' ? styles.active__job : styles.job__para}`} onClick={() => setJob('reject')}>Rejected</p>
                                </div>
                            </div>
                            <div className={`${styles.chart}`}>
                                <ChartComp />
                            </div>
                            <div className={`${styles.table}`}>
                                <div className={`${styles.table__body}`}>
                                    <div>
                                        <h3 className={`${styles.active__title}`}>Recent Activites</h3>
                                        <p className={`${styles.active__para}`}>Table shows some details about Booking Information</p>
                                    </div>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Weekly</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <TableInsight />
                            </div>
                        </Col>
                    </Row>
                    <div className={`${styles.footer}`}>
                        <Link className={`${styles.footer__link}`}>news & Updates</Link>
                        <Link className={`${styles.footer__link}`}>Terms and Conditions</Link>
                        <Link className={`${styles.footer__link}`}>Legal & Support</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Insight
