import React from 'react'
import styles from '../../Styles/signup.module.css'
import Headersign from '../../Layout/Headersign'
import { Col, Row } from 'react-bootstrap'
import elli from '../../assets/images/Ellipse 32.png'
import company from '../../assets/images/mdi_company.svg'
import { Link } from 'react-router-dom'
import inv from '../../assets/images/ic_baseline-person.svg'
const Signup = () => {
    return (
        <>
            <section >
                <Headersign />
                <div>
                    <h2 className={`${styles.reg__title}`}>Registration</h2>
                    <p className={`${styles.reg__para}`}>Please select one of the two options</p>
                </div>
                <Row className={`${styles.row}`}>
                    <Col className={`${styles.col}`}>
                        <div className={`${styles.images}`}>
                            <img alt='' src={elli} />
                            <img alt='' src={company} className={`${styles.company}`} />
                        </div>
                        <h3 className={`${styles.com__title}`}>Register as a Company</h3>
                        <p className={`${styles.com__para}`}>By registering as a company, you will be able to manage shipments on behalf of your organization. Please provide the following company details to create your account.</p>
                        <Link className={`${styles.link}`} to='/ascompany'>
                            Next
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M13.7696 3.66768C14.0696 3.36772 14.4765 3.19922 14.9008 3.19922C15.325 3.19922 15.7319 3.36772 16.032 3.66768L23.232 10.8677C23.5319 11.1677 23.7004 11.5746 23.7004 11.9989C23.7004 12.4231 23.5319 12.83 23.232 13.1301L16.032 20.3301C15.7302 20.6215 15.3261 20.7828 14.9065 20.7792C14.487 20.7755 14.0857 20.6072 13.7891 20.3106C13.4924 20.0139 13.3241 19.6126 13.3205 19.1931C13.3169 18.7736 13.4781 18.3694 13.7696 18.0677L18.1008 13.5989H2.90078C2.47643 13.5989 2.06947 13.4303 1.76941 13.1302C1.46935 12.8302 1.30078 12.4232 1.30078 11.9989C1.30078 11.5745 1.46935 11.1676 1.76941 10.8675C2.06947 10.5674 2.47643 10.3989 2.90078 10.3989H18.1008L13.7696 5.93008C13.4696 5.63003 13.3011 5.22314 13.3011 4.79888C13.3011 4.37461 13.4696 3.96772 13.7696 3.66768Z" fill="white" />
                            </svg>
                        </Link>
                    </Col>
                    <Col className={`${styles.col}`}>
                        <div className={`${styles.images}`}>
                            <img alt='' src={elli} />
                            <img alt='' src={inv} className={`${styles.company}`} />
                        </div>
                        <h3 className={`${styles.com__title}`}>Register as an Individual</h3>
                        <p className={`${styles.com__para1}`}>Registering as an individual allows you to manage shipments for personal use. Please provide your personal details to create your account.</p>
                        <Link className={`${styles.link}`} to='/asindividual'>
                            Next
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M13.7696 3.66768C14.0696 3.36772 14.4765 3.19922 14.9008 3.19922C15.325 3.19922 15.7319 3.36772 16.032 3.66768L23.232 10.8677C23.5319 11.1677 23.7004 11.5746 23.7004 11.9989C23.7004 12.4231 23.5319 12.83 23.232 13.1301L16.032 20.3301C15.7302 20.6215 15.3261 20.7828 14.9065 20.7792C14.487 20.7755 14.0857 20.6072 13.7891 20.3106C13.4924 20.0139 13.3241 19.6126 13.3205 19.1931C13.3169 18.7736 13.4781 18.3694 13.7696 18.0677L18.1008 13.5989H2.90078C2.47643 13.5989 2.06947 13.4303 1.76941 13.1302C1.46935 12.8302 1.30078 12.4232 1.30078 11.9989C1.30078 11.5745 1.46935 11.1676 1.76941 10.8675C2.06947 10.5674 2.47643 10.3989 2.90078 10.3989H18.1008L13.7696 5.93008C13.4696 5.63003 13.3011 5.22314 13.3011 4.79888C13.3011 4.37461 13.4696 3.96772 13.7696 3.66768Z" fill="white" />
                            </svg>
                        </Link>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default Signup
