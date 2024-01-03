import React from 'react'
import Sidebar from '../../Layout/Sidebar'
import styles from '../../Styles/wallet.module.css'
import { Col, Row } from 'react-bootstrap'
import ChartWallet from './ChartWallet'
import ProgressBar from 'react-bootstrap/ProgressBar';
const Wallet = () => {
    return (
        <>
            <section className={`${styles.home}`}>
                <Sidebar active='wallet' />
                <div className={`${styles.homeContainer}`}>
                    <p className={`${styles.new__title}`}>Recent News: <span className={`${styles.new__para}`}> El Molla Inspects MIDOR Expansion Project. Sunday, 31st December 2023</span> </p>
                    <Row>
                        <Col xxl='8'>
                            <Row className={`${styles.wallet__chart}`}>
                                <Col>
                                    <div className={`${styles.chart__body}`}>
                                        <h3 className={`${styles.chart__title}`}>Main Balance</h3>
                                        <h2 className={`${styles.chart__para}`}>$203,772.77</h2>
                                        <ProgressBar now={60} className={`${styles.chart__prog}`} />
                                    </div>
                                </Col>
                                <Col className={`${styles.chartcol}`}>
                                    <ChartWallet />
                                </Col>
                            </Row>
                        </Col>
                        <Col xxl='4'>
                            ttt
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Wallet
