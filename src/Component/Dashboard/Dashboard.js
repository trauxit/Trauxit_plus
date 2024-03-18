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
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Header />
            <section className={`${styles.home}`}>
                <Sidebar active='dashboard' />
                <div className={`${styles.homeContainer}`}>
                    <p className={`${styles.new__title}`}>{t("Recent News:")} <span className={`${styles.new__para}`}> {t("El Molla Inspects MIDOR Expansion Project. Sunday, 31st December 2023")}</span> </p>
                    <div className={`${styles.business__body}`}>
                        <div>
                            <h4 className={`${styles.business__title}`}>{t("Good Morning,")}</h4>
                            <p className={`${styles.business__para}`}>{t("Here is your business overview for the last week!")}</p>
                        </div>
                        {/* <div className={`${styles.switch}`}>
                            <Link className={`${styles.switch__link}`} to='/user'>{t("Switch to Social")}</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
                                <path d="M6.625 37.5413H11.9184C13.6937 37.5412 15.4428 37.113 17.0174 36.293C18.5921 35.473 19.9457 34.2854 20.9637 32.831L21.3546 32.2723M29.4371 20.7293L29.828 20.1684C30.8459 18.7139 32.1996 17.5263 33.7742 16.7063C35.3488 15.8864 37.098 15.4581 38.8733 15.458H46.375" stroke="#FF8201" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M39.75 8.83301L46.375 15.458L39.75 22.083M6.625 15.458H11.9184C13.6937 15.4581 15.4428 15.8864 17.0174 16.7063C18.5921 17.5263 19.9457 18.7139 20.9637 20.1684L29.828 32.831C30.8459 34.2855 32.1996 35.473 33.7742 36.293C35.3488 37.113 37.098 37.5412 38.8733 37.5413H46.375" stroke="#FF8201" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M39.75 44.166L46.375 37.541L39.75 30.916" stroke="#FF8201" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div> */}
                    </div>
                    <div className={`${styles.booked}`}>
                        <div className={`${styles.loads}`}>
                            <div>
                                <h4 className={`${styles.book__title}`}>{t("Booked Loads")}</h4>
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
                                <h4 className={`${styles.book__title}`}>{t("Total Paid")}</h4>
                                <p className={`${styles.book__para}`}>{t("E£ 23,000")}</p>
                                <img alt='' src={vector} /><span className={`${styles.book__num}`}> 55.3%</span>
                            </div>
                            <div className={`${styles.business__img}`}>
                                <img alt='' src={elli1} className={`${styles.elli1}`} />
                                <img alt='' src={price} className={`${styles.book__img}`} />
                            </div>
                        </div>
                        <div className={`${styles.loads}`}>
                            <div>
                                <h4 className={`${styles.book__title}`}>{t("Posted Jobs")}</h4>
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
                            <h3 className={`${styles.info__title}`}>{t("Booking Information")}</h3>
                            <p className={`${styles.info__para}`}>{t("Table shows some details about Booking Information")}</p>
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
