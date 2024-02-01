import React, { useState } from 'react'
import Sidebar from '../../Layout/Sidebar'
import styles from '../../Styles/Carrierprofile.module.css'
import shipprofile from '../../assets/images/shipprofile.svg'
import star from '../../assets/images/material-symbols_verified.svg'
import { Link } from 'react-router-dom'
import frame from '../../assets/images/Frame 1984078003.png'
import { Col, Row } from 'react-bootstrap'
import user from '../../assets/images/Rectangle 3463660.png'
import star1 from '../../assets/images/star-icon.svg'
import { useTranslation } from 'react-i18next';


const CarrierProfile = () => {
    const [active, setActive] = useState('summary')
    const { t, i18n } = useTranslation();

    return (
        <>
            <section className={`${styles.home}`}>
                <Sidebar active='shipments' />
                <div className={`${styles.homeContainer}`}>
                    <div className={`${styles.profile}`}>
                        <div className={`${styles.back}`}>
                            <Link to='' className={`${styles.back__link}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                    <path d="M18.7487 8.49969C18.7487 8.10187 18.5906 7.72034 18.3093 7.43903C18.028 7.15773 17.6465 6.99969 17.2487 6.99969H5.36868L9.30868 3.05969C9.57364 2.77534 9.71789 2.39925 9.71103 2.01065C9.70417 1.62205 9.54675 1.25128 9.27192 0.976449C8.9971 0.701623 8.62633 0.5442 8.23773 0.537343C7.84912 0.530487 7.47303 0.674733 7.18868 0.939693L0.68868 7.43969C0.407779 7.72094 0.25 8.10219 0.25 8.49969C0.25 8.89719 0.407779 9.27844 0.68868 9.55969L7.18868 16.0597C7.47303 16.3247 7.84912 16.4689 8.23773 16.462C8.62633 16.4552 8.9971 16.2978 9.27192 16.0229C9.54675 15.7481 9.70417 15.3773 9.71103 14.9887C9.71789 14.6001 9.57364 14.224 9.30868 13.9397L5.36868 9.99969H17.2487C17.6465 9.99969 18.028 9.84166 18.3093 9.56035C18.5906 9.27905 18.7487 8.89752 18.7487 8.49969Z" fill="#1C1A19" />
                                </svg>
                                {t("Back")}
                            </Link>
                            <div className={`${styles.profile__follow}`}>
                                <div>
                                    <h3>234</h3>
                                    <p>{t("Trips")}</p>
                                </div>
                                <div>
                                    <h3>4.8</h3>
                                    <p>{t("Ratings")}</p>
                                </div>
                                <div>
                                    <h3>$12/hr</h3>
                                    <p>{t("Rate")}</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.user__body}`}>
                            <div className={`${styles.profile__body}`}>
                                <div>
                                    <img alt='' src={frame} className={`${styles.frame}`} />
                                </div>
                                <div>
                                    <div className={`${styles.profile__title}`}>
                                        <h3 className={`${styles.profile__name}`}><img alt='' src={star} />Owner Operator </h3>

                                    </div>
                                    <p className={`${styles.owner}`}>Ashraf Boma</p>
                                </div>
                            </div>

                        </div>
                        <div className={`${styles.content}`}>
                            <div className={`${styles.swap}`}>
                                <p className={`${active === 'summary' ? styles.swap__active : styles.swap__para}`} onClick={() => setActive('summary')}>{t("Profile Summary")}</p>
                                <p className={`${active === 'Carrier' ? styles.swap__active : styles.swap__para}`} onClick={() => setActive('Carrier')}>{t("Carrier Details")}</p>
                                <p className={`${active === 'Reviews' ? styles.swap__active : styles.swap__para}`} onClick={() => setActive('Reviews')}>{t("Reviews")}</p>

                            </div>
                            <div className={`${styles.msg}`}>
                                <Link className={`${styles.link}`}>
                                    Message
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path d="M5.83333 6.0013H11.1667M5.83333 8.66797H9.83333M12.5 2.66797C13.0304 2.66797 13.5391 2.87868 13.9142 3.25376C14.2893 3.62883 14.5 4.13754 14.5 4.66797V10.0013C14.5 10.5317 14.2893 11.0404 13.9142 11.4155C13.5391 11.7906 13.0304 12.0013 12.5 12.0013H9.16667L5.83333 14.0013V12.0013H4.5C3.96957 12.0013 3.46086 11.7906 3.08579 11.4155C2.71071 11.0404 2.5 10.5317 2.5 10.0013V4.66797C2.5 4.13754 2.71071 3.62883 3.08579 3.25376C3.46086 2.87868 3.96957 2.66797 4.5 2.66797H12.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                                <Link className={`${styles.link}`}>
                                    Call
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path d="M13.8 14C12.4111 14 11.0389 13.6973 9.68333 13.092C8.32778 12.4867 7.09444 11.6282 5.98333 10.5167C4.87222 9.40556 4.014 8.17222 3.40867 6.81667C2.80333 5.46111 2.50044 4.08889 2.5 2.7C2.5 2.5 2.56667 2.33333 2.7 2.2C2.83333 2.06667 3 2 3.2 2H5.9C6.05556 2 6.19444 2.05289 6.31667 2.15867C6.43889 2.26444 6.51111 2.38933 6.53333 2.53333L6.96667 4.86667C6.98889 5.04444 6.98333 5.19444 6.95 5.31667C6.91667 5.43889 6.85556 5.54444 6.76667 5.63333L5.15 7.26667C5.37222 7.67778 5.636 8.07489 5.94133 8.458C6.24667 8.84111 6.58289 9.21067 6.95 9.56667C7.29444 9.91111 7.65556 10.2307 8.03333 10.5253C8.41111 10.82 8.81111 11.0893 9.23333 11.3333L10.8 9.76667C10.9 9.66667 11.0307 9.59178 11.192 9.542C11.3533 9.49222 11.5116 9.47822 11.6667 9.5L13.9667 9.96667C14.1222 10.0111 14.25 10.0918 14.35 10.2087C14.45 10.3256 14.5 10.456 14.5 10.6V13.3C14.5 13.5 14.4333 13.6667 14.3 13.8C14.1667 13.9333 14 14 13.8 14ZM4.51667 6L5.61667 4.9L5.33333 3.33333H3.85C3.90556 3.78889 3.98333 4.23889 4.08333 4.68333C4.18333 5.12778 4.32778 5.56667 4.51667 6ZM10.4833 11.9667C10.9167 12.1556 11.3584 12.3056 11.8087 12.4167C12.2589 12.5278 12.7116 12.6 13.1667 12.6333V11.1667L11.6 10.85L10.4833 11.9667Z" fill="white" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {
                        active === 'summary'
                            ?
                            <>

                                <Row className={`${styles.row}`}>
                                    <Col>
                                        <div className={`${styles.profile__complete}`}>
                                            <p className={`${styles.complete__title}`}>{t("is an experienced and dedicated carrier, providing reliable transportation solutions with a focus on customer satisfaction.")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className={`${styles.row}`}>
                                    <Col>
                                        <div className={`${styles.profile__info}`}>
                                            <h4>{t("Info")}</h4>
                                            <div>
                                                <h3>{t("USDOT NUMBER:")}</h3>
                                                <p>12345678</p>
                                            </div>
                                            <div>
                                                <h3>{t("Language Spoken:")}</h3>
                                                <p>English</p>
                                            </div>
                                            <div>
                                                <h3>{t("Homebase")}</h3>
                                                <p>12345678</p>
                                            </div>
                                            <div>
                                                <h3>{t("MC NUMBER:")}</h3>
                                                <p>9876545</p>
                                            </div>
                                            <div>
                                                <h3>{t("Insurance Certificate:")}</h3>
                                                <p>View</p>
                                            </div>
                                            <div>
                                                <h3>{t("Safety Rating:")}</h3>
                                                <p>Satisfactory</p>
                                            </div>
                                            <div>
                                                <h3>{t("Operating Authority:")}</h3>
                                                <p>Authorized.</p>
                                            </div>
                                            <div>
                                                <h3>{t("Daily driving hours:")}</h3>
                                                <p>8hr</p>
                                            </div>
                                            <div>
                                                <h3>{t("Loss and Damage Rates")}</h3>
                                                <p>2%</p>
                                            </div>
                                        </div>
                                    </Col>

                                </Row>
                            </>
                            :
                            ""
                    }
                    {
                        active === 'Carrier' ?
                            <>
                                <Row className={`${styles.row}`}>
                                    <Col>
                                        <div className={`${styles.capacity__body}`}>
                                            <h4 className={`${styles.capacity}`}>{t("Capacity and Availability:")}</h4>
                                            <div>
                                                <h3> {t("truck type:")}</h3>
                                                <p>Large Truck</p>
                                            </div>
                                            <div>
                                                <h3>{t("Capacity:")}</h3>
                                                <p>10 tons</p>
                                            </div>
                                            <div>
                                                <h3>{t("Available Loading Times:")}</h3>
                                                <p>8:00 AM - 5:00 PM</p>
                                            </div>
                                            <div>
                                                <h3>{t("Maximum Allowed Weight:")}</h3>
                                                <p>20 tons</p>
                                            </div>
                                            <div>
                                                <h3>{t("Insurance and Licenses:")}</h3>
                                                <p>Up-to-date</p>
                                            </div>
                                            <div>
                                                <h3>{t("Driving Hours:")}</h3>
                                                <p>	11 hours driving, 10 hours rest</p>
                                            </div>
                                            <div>
                                                <h3 className={`${styles.h__title}`}>{t("Performance Record and Safety Rates")}</h3>
                                                <p className={`${styles.h__para}`}>On-time deliveries, low accident rate</p>
                                            </div>
                                            <h4 className={`${styles.capacity} mt-4 mb-4`}>{t("Previous Shipping Details:")}</h4>
                                            <div>
                                                <h3>{t("Number of Shipments")}</h3>
                                                <p>10</p>
                                            </div>
                                            <div>
                                                <h3>{t("Destinations")}</h3>
                                                <p>	Various</p>
                                            </div>
                                            <div>
                                                <h3>{t("Sizes")}</h3>
                                                <p>	Various</p>
                                            </div>
                                            <div>
                                                <h3>{t("Weights")}</h3>
                                                <p>	Various</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </>
                            :
                            ""
                    }
                    {
                        active === 'Reviews'
                            ?
                            <>
                                <Row className={`${styles.row}`}>
                                    <Col>
                                        <div className={`${styles.capacity__body}`}>
                                            <div className={`${styles.review}`}>
                                                <div className={`${styles.review__body}`}>
                                                    <div className={`${styles.review__user}`}>
                                                        <img alt='' src={user} />
                                                        <div className={`${styles.user__name}`}>
                                                            <h3>Mohamed adel</h3>
                                                            <p>Excellent
                                                                <span className='ml-4'>
                                                                    <img alt='' src={star1} />
                                                                    <img alt='' src={star1} />
                                                                    <img alt='' src={star1} />
                                                                    <img alt='' src={star1} />
                                                                    <img alt='' src={star1} />
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <p>12/october/2023</p>
                                                </div>
                                                <p className={`${styles.body__para}`}>The carrier provided exceptional service, ensuring timely delivery and handling goods with care. Their communication was excellent, and their professionalism was evident throughout the process. Highly recommended for any shipping needs.</p>
                                            </div>
                                            <div className={`${styles.review}`}>
                                                <div className={`${styles.review__body}`}>
                                                    <div className={`${styles.review__user}`}>
                                                        <img alt='' src={user} />
                                                        <div className={`${styles.user__name}`}>
                                                            <h3>Mohamed adel</h3>
                                                            <p>Excellent
                                                                <span className='ml-4'>
                                                                    <img alt='' src={star1} />
                                                                    <img alt='' src={star1} />
                                                                    <img alt='' src={star1} />
                                                                    <img alt='' src={star1} />
                                                                    <img alt='' src={star1} />
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <p>12/october/2023</p>
                                                </div>
                                                <p className={`${styles.body__para}`}>The carrier provided exceptional service, ensuring timely delivery and handling goods with care. Their communication was excellent, and their professionalism was evident throughout the process. Highly recommended for any shipping needs.</p>
                                            </div>
                                            <div className={`${styles.review}`}>
                                                <div className={`${styles.review__body}`}>
                                                    <div className={`${styles.review__user}`}>
                                                        <img alt='' src={user} />
                                                        <div className={`${styles.user__name}`}>
                                                            <h3>Mohamed adel</h3>
                                                            <p>Excellent
                                                                <span className='ml-4'>
                                                                    <img alt='' src={star1} />
                                                                    <img alt='' src={star1} />
                                                                    <img alt='' src={star1} />
                                                                    <img alt='' src={star1} />
                                                                    <img alt='' src={star1} />
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <p>12/october/2023</p>
                                                </div>
                                                <p className={`${styles.body__para}`}>The carrier provided exceptional service, ensuring timely delivery and handling goods with care. Their communication was excellent, and their professionalism was evident throughout the process. Highly recommended for any shipping needs.</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </>
                            :
                            ""
                    }
                </div>
            </section>
        </>
    )
}

export default CarrierProfile
