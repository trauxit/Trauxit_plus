import React, { useState } from 'react'
import Sidebar from '../../Layout/Sidebar'
import styles from '../../Styles/shipperprofile.module.css'
import shipprofile from '../../assets/images/shipprofile.svg'
import star from '../../assets/images/material-symbols_verified.svg'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import { Progress, Tooltip } from '@mantine/core';
import line from '../../assets/images/Line 30.png'
import place from '../../assets/images/place.png'
import line2 from '../../assets/images/Line 32.png'
import suggestimg from '../../assets/images/suguser.svg'
const ShipperProfile = () => {
    const [active, setActive] = useState('overview')
    const [choose, setChoose] = useState('today')
    const [choose2, setChoose2] = useState('all')

    return (
        <>
            <section className={`${styles.home}`}>
                <Sidebar active='dashboard' />
                <div className={`${styles.homeContainer}`}>
                    <div className={`${styles.profile}`}>
                        <div className={`${styles.user__body}`}>
                            <div className={`${styles.profile__body}`}>
                                <div>
                                    <img alt='' src={shipprofile} />
                                </div>
                                <div>
                                    <div className={`${styles.profile__title}`}>
                                        <h3 className={`${styles.profile__name}`}><img alt='' src={star} />Mohamed Adel </h3>
                                        <h3 className={`${styles.profile__address}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                <path d="M10.5 11.25C9.88194 11.25 9.27775 11.0667 8.76384 10.7233C8.24994 10.38 7.8494 9.89191 7.61288 9.32089C7.37635 8.74987 7.31447 8.12154 7.43505 7.51534C7.55563 6.90915 7.85325 6.35233 8.29029 5.91529C8.72733 5.47825 9.28415 5.18063 9.89034 5.06005C10.4965 4.93947 11.1249 5.00135 11.6959 5.23788C12.2669 5.4744 12.755 5.87494 13.0983 6.38884C13.4417 6.90275 13.625 7.50694 13.625 8.125C13.624 8.9535 13.2945 9.74778 12.7086 10.3336C12.1228 10.9195 11.3285 11.249 10.5 11.25ZM10.5 6.25C10.1292 6.25 9.76665 6.35997 9.45831 6.566C9.14997 6.77202 8.90964 7.06486 8.76773 7.40747C8.62581 7.75008 8.58868 8.12708 8.66103 8.4908C8.73338 8.85451 8.91195 9.1886 9.17418 9.45083C9.4364 9.71305 9.77049 9.89163 10.1342 9.96397C10.4979 10.0363 10.8749 9.99919 11.2175 9.85728C11.5601 9.71536 11.853 9.47504 12.059 9.1667C12.265 8.85835 12.375 8.49584 12.375 8.125C12.3745 7.62787 12.1768 7.15125 11.8253 6.79972C11.4738 6.4482 10.9971 6.2505 10.5 6.25Z" fill="#575555" />
                                                <path d="M10.5 18.75L5.22751 12.5319C5.15425 12.4385 5.08174 12.3445 5.01001 12.25C4.10937 11.0636 3.62282 9.61452 3.62501 8.125C3.62501 6.30164 4.34934 4.55295 5.63865 3.26364C6.92796 1.97433 8.67664 1.25 10.5 1.25C12.3234 1.25 14.0721 1.97433 15.3614 3.26364C16.6507 4.55295 17.375 6.30164 17.375 8.125C17.3772 9.61384 16.8909 11.0623 15.9906 12.2481L15.99 12.25C15.99 12.25 15.8025 12.4963 15.7744 12.5294L10.5 18.75ZM6.00813 11.4969C6.00813 11.4969 6.15376 11.6894 6.18688 11.7306L10.5 16.8175L14.8188 11.7237C14.8463 11.6894 14.9925 11.4956 14.9931 11.495C15.7289 10.5257 16.1265 9.34189 16.125 8.125C16.125 6.63316 15.5324 5.20242 14.4775 4.14752C13.4226 3.09263 11.9918 2.5 10.5 2.5C9.00816 2.5 7.57742 3.09263 6.52253 4.14752C5.46764 5.20242 4.87501 6.63316 4.87501 8.125C4.8737 9.34265 5.27174 10.5271 6.00813 11.4969Z" fill="#575555" />
                                            </svg>
                                            California, United States
                                        </h3>
                                    </div>
                                    <p className={`${styles.owner}`}>Owner Of drf Company</p>
                                </div>
                            </div>
                            <div className={`${styles.profile__follow}`}>
                                <div>
                                    <h3>24.3k</h3>
                                    <p>Followers</p>
                                </div>
                                <div>
                                    <h3>24.3k</h3>
                                    <p>Following</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.content}`}>
                            <div className={`${styles.swap}`}>
                                <p className={`${active === 'overview' ? styles.swap__active : styles.swap__para}`} onClick={() => setActive('overview')}>Overview</p>
                                <p className={`${active === 'activities' ? styles.swap__active : styles.swap__para}`} onClick={() => setActive('activities')}>Activities</p>
                            </div>
                            <div>
                                <Link className={`${styles.link}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                        <path d="M8 2.99985L9.5 4.49985M7 9.99985H11M3 7.99985L2.5 9.99985L4.5 9.49985L10.293 3.70685C10.4805 3.51932 10.5858 3.26501 10.5858 2.99985C10.5858 2.73468 10.4805 2.48038 10.293 2.29285L10.207 2.20685C10.0195 2.01938 9.76516 1.91406 9.5 1.91406C9.23484 1.91406 8.98053 2.01938 8.793 2.20685L3 7.99985Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Edit Profile
                                </Link>
                                <Link className={`${styles.link}`}> Social</Link>
                            </div>
                        </div>
                    </div>
                    {
                        active === 'overview' ?
                            <>
                                <Row className={`${styles.row}`}>
                                    <Col>
                                        <div className={`${styles.profile__complete}`}>
                                            <h3 className={`${styles.complete__title}`}>Complete Your Profile</h3>
                                            <div className={`${styles.prog}`}>
                                                <Tooltip label="34%" opened position="top">
                                                    <Progress color="orange" value={34} size="xl" radius="md" />
                                                </Tooltip>
                                            </div>
                                        </div>
                                        <div className={`${styles.profile__info}`}>
                                            <h4>Info</h4>
                                            <div>
                                                <h3>Full Name:</h3>
                                                <p>Mohamed Adel Attia</p>
                                            </div>
                                            <div>
                                                <h3>Mobile Number:</h3>
                                                <p>+1-555-123-4567</p>
                                            </div>
                                            <div>
                                                <h3>Email:</h3>
                                                <p>info@xyzshipping.com</p>
                                            </div>
                                            <div>
                                                <h3>Location:</h3>
                                                <p>123 Main Street, Anytown, USA</p>
                                            </div>
                                            <div>
                                                <h3>Company Name:</h3>
                                                <p>XYZ Shipping Inc.</p>
                                            </div>
                                            <div>
                                                <h3>Join Date:</h3>
                                                <p>14/5/2023</p>
                                            </div>
                                        </div>

                                    </Col>
                                    <Col>
                                        <div className={`${styles.profile__about}`}>
                                            <h3 className={`${styles.about__title}`}>About</h3>
                                            <p className={`${styles.about__para}`}>Lorem ipsum dolor sit amet consectetur. Ornare sem donec pellentesque ornare neque mollis mattis. Amet at justo senectus nisl at orci. Vulputate sit id sit venenatis consectetur pharetra quisque. Pellentesque arcu massa erat viverra sit. Pretium nunc purus mi nulla augue. Et ut tincidunt urna vulputate.</p>
                                        </div>
                                        <div className={`${styles.posts}`}>
                                            <div className={`${styles.posts__popular}`}>
                                                <h3 className={`${styles.post__title}`}>Popular Posts</h3>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M14.5 12.0005C14.5 12.6635 14.2366 13.2994 13.7678 13.7682C13.2989 14.2371 12.663 14.5005 12 14.5005C11.337 14.5005 10.7011 14.2371 10.2322 13.7682C9.76339 13.2994 9.5 12.6635 9.5 12.0005C9.5 11.3374 9.76339 10.7016 10.2322 10.2327C10.7011 9.76387 11.337 9.50048 12 9.50048C12.663 9.50048 13.2989 9.76387 13.7678 10.2327C14.2366 10.7016 14.5 11.3374 14.5 12.0005ZM13.5 12.0005C13.4999 11.6025 13.3417 11.2209 13.0602 10.9396C12.7787 10.6583 12.397 10.5003 11.999 10.5005C11.601 10.5006 11.2194 10.6588 10.9381 10.9403C10.6568 11.2218 10.4989 11.6035 10.499 12.0015C10.4991 12.3994 10.6573 12.781 10.9388 13.0623C11.2203 13.3436 11.602 13.5016 12 13.5015C12.398 13.5013 12.7796 13.3431 13.0609 13.0616C13.3422 12.7801 13.5001 12.3984 13.5 12.0005ZM14.5 4.56348C14.5 5.22652 14.2366 5.8624 13.7678 6.33124C13.2989 6.80008 12.663 7.06348 12 7.06348C11.337 7.06348 10.7011 6.80008 10.2322 6.33124C9.76339 5.8624 9.5 5.22652 9.5 4.56348C9.5 3.90044 9.76339 3.26455 10.2322 2.79571C10.7011 2.32687 11.337 2.06348 12 2.06348C12.663 2.06348 13.2989 2.32687 13.7678 2.79571C14.2366 3.26455 14.5 3.90044 14.5 4.56348ZM13.5 4.56348C13.4999 4.16552 13.3417 3.78391 13.0602 3.50261C12.7787 3.2213 12.397 3.06334 11.999 3.06348C11.601 3.06361 11.2194 3.22182 10.9381 3.50332C10.6568 3.78481 10.4989 4.16652 10.499 4.56448C10.4991 4.96243 10.6573 5.34404 10.9388 5.62534C11.2203 5.90665 11.602 6.06461 12 6.06448C12.398 6.06434 12.7796 5.90613 13.0609 5.62464C13.3422 5.34314 13.5001 4.96143 13.5 4.56348ZM14.5 19.4375C14.5 20.1005 14.2366 20.7364 13.7678 21.2052C13.2989 21.6741 12.663 21.9375 12 21.9375C11.337 21.9375 10.7011 21.6741 10.2322 21.2052C9.76339 20.7364 9.5 20.1005 9.5 19.4375C9.5 18.7744 9.76339 18.1386 10.2322 17.6697C10.7011 17.2009 11.337 16.9375 12 16.9375C12.663 16.9375 13.2989 17.2009 13.7678 17.6697C14.2366 18.1386 14.5 18.7744 14.5 19.4375ZM13.5 19.4375C13.4999 19.0395 13.3417 18.6579 13.0602 18.3766C12.7787 18.0953 12.397 17.9373 11.999 17.9375C11.601 17.9376 11.2194 18.0958 10.9381 18.3773C10.6568 18.6588 10.4989 19.0405 10.499 19.4385C10.4991 19.8364 10.6573 20.218 10.9388 20.4993C11.2203 20.7806 11.602 20.9386 12 20.9385C12.398 20.9383 12.7796 20.7801 13.0609 20.4986C13.3422 20.2171 13.5001 19.8354 13.5 19.4375Z" fill="black" />
                                                </svg>
                                            </div>
                                            <img alt='' src={line} className={`${styles.line}`} />
                                            <div className={`${styles.posts__body}`}>
                                                <img alt='' src={place} />
                                                <div>
                                                    <h3 className={`${styles.body__title}`}>Nice update on the current state of freight from Paulo Fernandes</h3>
                                                    <p className={`${styles.content__date}`}>15/dec/2021</p>
                                                </div>
                                            </div>
                                            <div className={`${styles.posts__body}`}>
                                                <img alt='' src={place} />
                                                <div>
                                                    <h3 className={`${styles.body__title}`}>Nice update on the current state of freight from Paulo Fernandes</h3>
                                                    <p className={`${styles.content__date}`}>15/dec/2021</p>
                                                </div>
                                            </div>
                                            <div className={`${styles.posts__body}`}>
                                                <img alt='' src={place} />
                                                <div>
                                                    <h3 className={`${styles.body__title}`}>Nice update on the current state of freight from Paulo Fernandes</h3>
                                                    <p className={`${styles.content__date}`}>15/dec/2021</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className={`${styles.row}`}>
                                    <Col>
                                        <div className={`${styles.recent}`}>
                                            <div className={`${styles.recent__body}`}>
                                                <h3>Recent Activities</h3>
                                                <div className={`${styles.recent__choose}`}>
                                                    <p className={`${choose === 'today' ? styles.choose__active : styles.choose__para}`} onClick={() => setChoose('today')}>Today</p>
                                                    <p className={`${choose === 'weekly' ? styles.choose__active : styles.choose__para}`} onClick={() => setChoose('weekly')}>Weekly</p>
                                                    <p className={`${choose === 'monthly' ? styles.choose__active : styles.choose__para}`} onClick={() => setChoose('monthly')}>Monthly</p>
                                                </div>
                                            </div>
                                            <img alt='' src={line2} className={`${styles.line}`} />
                                            <div>
                                                <div className={`${styles.book}`}>
                                                    <h3>Booking Number 12345</h3>
                                                    <p>Date: January 20, 2024 - Destination: City Port - Delivery Status: Pending</p>
                                                </div>
                                                <div className={`${styles.book} mt-5`}>
                                                    <h3>Booking Number 12345</h3>
                                                    <p>Date: January 20, 2024 - Destination: City Port - Delivery Status: Pending</p>
                                                </div>
                                            </div>
                                            <img alt='' src={line2} className={`${styles.line}`} />
                                            <div className={`${styles.change}`}>
                                                <h3> you changed your profile picture</h3>
                                                <p>Date: January 20, 2024</p>
                                            </div>
                                            <img alt='' src={line2} className={`${styles.line}`} />
                                            <div className={`${styles.change}`}>
                                                <h3>You Have Received 4 new Followers</h3>
                                                <p>Date: January 20, 2024</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className={`${styles.row}`}>
                                    <Col>
                                        <div className={`${styles.suggest}`}>
                                            <div className={`${styles.recent__body}`}>
                                                <h3>Suggestions</h3>
                                                <div className={`${styles.recent__choose}`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M14.5 12.0005C14.5 12.6635 14.2366 13.2994 13.7678 13.7682C13.2989 14.2371 12.663 14.5005 12 14.5005C11.337 14.5005 10.7011 14.2371 10.2322 13.7682C9.76339 13.2994 9.5 12.6635 9.5 12.0005C9.5 11.3374 9.76339 10.7016 10.2322 10.2327C10.7011 9.76387 11.337 9.50048 12 9.50048C12.663 9.50048 13.2989 9.76387 13.7678 10.2327C14.2366 10.7016 14.5 11.3374 14.5 12.0005ZM13.5 12.0005C13.4999 11.6025 13.3417 11.2209 13.0602 10.9396C12.7787 10.6583 12.397 10.5003 11.999 10.5005C11.601 10.5006 11.2194 10.6588 10.9381 10.9403C10.6568 11.2218 10.4989 11.6035 10.499 12.0015C10.4991 12.3994 10.6573 12.781 10.9388 13.0623C11.2203 13.3436 11.602 13.5016 12 13.5015C12.398 13.5013 12.7796 13.3431 13.0609 13.0616C13.3422 12.7801 13.5001 12.3984 13.5 12.0005ZM14.5 4.56348C14.5 5.22652 14.2366 5.8624 13.7678 6.33124C13.2989 6.80008 12.663 7.06348 12 7.06348C11.337 7.06348 10.7011 6.80008 10.2322 6.33124C9.76339 5.8624 9.5 5.22652 9.5 4.56348C9.5 3.90044 9.76339 3.26455 10.2322 2.79571C10.7011 2.32687 11.337 2.06348 12 2.06348C12.663 2.06348 13.2989 2.32687 13.7678 2.79571C14.2366 3.26455 14.5 3.90044 14.5 4.56348ZM13.5 4.56348C13.4999 4.16552 13.3417 3.78391 13.0602 3.50261C12.7787 3.2213 12.397 3.06334 11.999 3.06348C11.601 3.06361 11.2194 3.22182 10.9381 3.50332C10.6568 3.78481 10.4989 4.16652 10.499 4.56448C10.4991 4.96243 10.6573 5.34404 10.9388 5.62534C11.2203 5.90665 11.602 6.06461 12 6.06448C12.398 6.06434 12.7796 5.90613 13.0609 5.62464C13.3422 5.34314 13.5001 4.96143 13.5 4.56348ZM14.5 19.4375C14.5 20.1005 14.2366 20.7364 13.7678 21.2052C13.2989 21.6741 12.663 21.9375 12 21.9375C11.337 21.9375 10.7011 21.6741 10.2322 21.2052C9.76339 20.7364 9.5 20.1005 9.5 19.4375C9.5 18.7744 9.76339 18.1386 10.2322 17.6697C10.7011 17.2009 11.337 16.9375 12 16.9375C12.663 16.9375 13.2989 17.2009 13.7678 17.6697C14.2366 18.1386 14.5 18.7744 14.5 19.4375ZM13.5 19.4375C13.4999 19.0395 13.3417 18.6579 13.0602 18.3766C12.7787 18.0953 12.397 17.9373 11.999 17.9375C11.601 17.9376 11.2194 18.0958 10.9381 18.3773C10.6568 18.6588 10.4989 19.0405 10.499 19.4385C10.4991 19.8364 10.6573 20.218 10.9388 20.4993C11.2203 20.7806 11.602 20.9386 12 20.9385C12.398 20.9383 12.7796 20.7801 13.0609 20.4986C13.3422 20.2171 13.5001 19.8354 13.5 19.4375Z" fill="black" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <img alt='' src={line2} className={`${styles.line}`} />
                                            <div className={`${styles.suggest__body}`}>
                                                <div className={`${styles.suggest__profile}`}>
                                                    <img alt='' src={suggestimg} />
                                                    <div>
                                                        <h3>Ahmed Kamel</h3>
                                                        <p>Owner Of LLcCompany</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                        <path d="M11.6654 11.8763V18.333H3.33203C3.33203 14.6511 6.3168 11.6663 9.9987 11.6663C10.5742 11.6663 11.1327 11.7393 11.6654 11.8763ZM9.9987 10.833C7.2362 10.833 4.9987 8.59551 4.9987 5.83301C4.9987 3.07051 7.2362 0.833008 9.9987 0.833008C12.7612 0.833008 14.9987 3.07051 14.9987 5.83301C14.9987 8.59551 12.7612 10.833 9.9987 10.833ZM14.9987 14.1663V11.6663H16.6654V14.1663H19.1654V15.833H16.6654V18.333H14.9987V15.833H12.4987V14.1663H14.9987Z" fill="#FF8201" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className={`${styles.suggest__body}`}>
                                                <div className={`${styles.suggest__profile}`}>
                                                    <img alt='' src={suggestimg} />
                                                    <div>
                                                        <h3>Ahmed Kamel</h3>
                                                        <p>Owner Of LLcCompany</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                        <path d="M11.6654 11.8763V18.333H3.33203C3.33203 14.6511 6.3168 11.6663 9.9987 11.6663C10.5742 11.6663 11.1327 11.7393 11.6654 11.8763ZM9.9987 10.833C7.2362 10.833 4.9987 8.59551 4.9987 5.83301C4.9987 3.07051 7.2362 0.833008 9.9987 0.833008C12.7612 0.833008 14.9987 3.07051 14.9987 5.83301C14.9987 8.59551 12.7612 10.833 9.9987 10.833ZM14.9987 14.1663V11.6663H16.6654V14.1663H19.1654V15.833H16.6654V18.333H14.9987V15.833H12.4987V14.1663H14.9987Z" fill="#FF8201" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className={`${styles.suggest__body}`}>
                                                <div className={`${styles.suggest__profile}`}>
                                                    <img alt='' src={suggestimg} />
                                                    <div>
                                                        <h3>Ahmed Kamel</h3>
                                                        <p>Owner Of LLcCompany</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                        <path d="M11.6654 11.8763V18.333H3.33203C3.33203 14.6511 6.3168 11.6663 9.9987 11.6663C10.5742 11.6663 11.1327 11.7393 11.6654 11.8763ZM9.9987 10.833C7.2362 10.833 4.9987 8.59551 4.9987 5.83301C4.9987 3.07051 7.2362 0.833008 9.9987 0.833008C12.7612 0.833008 14.9987 3.07051 14.9987 5.83301C14.9987 8.59551 12.7612 10.833 9.9987 10.833ZM14.9987 14.1663V11.6663H16.6654V14.1663H19.1654V15.833H16.6654V18.333H14.9987V15.833H12.4987V14.1663H14.9987Z" fill="#FF8201" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </>
                            :
                            ''
                    }
                    {
                        active === 'activities'
                            ?
                            <>
                                <Row className={`${styles.row}`}>
                                    <Col>
                                        <div className={`${styles.activity}`}>
                                            <div className={`${styles.recent__body}`}>
                                                <h3>Activities</h3>
                                                <div className={`${styles.recent__choose}`}>
                                                    <p className={`${choose2 === 'all' ? styles.choose__active : styles.choose__para}`} onClick={() => setChoose2('all')}>All</p>
                                                    <p className={`${choose2 === 'recent' ? styles.choose__active : styles.choose__para}`} onClick={() => setChoose2('recent')}>Recently</p>
                                                </div>
                                            </div>
                                            <img alt='' src={line2} className={`${styles.line}`} />
                                            <div className={`${styles.job__body}`}>
                                                <div>
                                                    <h3> Job Posted</h3>
                                                    <p className={`${styles.job__date}`}> January 20, 2024 </p>
                                                </div>
                                                <div>
                                                    <p className={`${styles.job__para}`}>Forklift Operator needed for Ras Gharib Concession</p>
                                                    <p className={`${styles.pending}`}>Pending</p>
                                                </div>
                                            </div>
                                            <div className={`${styles.job__body}`}>
                                                <div>
                                                    <h3> Job Posted</h3>
                                                    <p className={`${styles.job__date}`}> January 20, 2024 </p>
                                                </div>
                                                <div>
                                                    <p className={`${styles.job__para}`}>Forklift Operator needed for Ras Gharib Concession</p>
                                                    <p className={`${styles.complete}`}>Completed</p>
                                                </div>
                                            </div>
                                            <div className={`${styles.job__body}`}>
                                                <div>
                                                    <h3> Job Posted</h3>
                                                    <p className={`${styles.job__date}`}> January 20, 2024 </p>
                                                </div>
                                                <div>
                                                    <p className={`${styles.job__para}`}>Forklift Operator needed for Ras Gharib Concession</p>
                                                    <p className={`${styles.complete}`}>Completed</p>
                                                </div>
                                            </div>
                                            <div className={`${styles.job__body}`}>
                                                <div>
                                                    <h3> Job Posted</h3>
                                                    <p className={`${styles.job__date}`}> January 20, 2024 </p>
                                                </div>
                                                <div>
                                                    <p className={`${styles.job__para}`}>Forklift Operator needed for Ras Gharib Concession</p>
                                                    <p className={`${styles.complete}`}>Completed</p>
                                                </div>
                                            </div>
                                            <div className={`${styles.job__body}`}>
                                                <div>
                                                    <h3> Job Posted</h3>
                                                    <p className={`${styles.job__date}`}> January 20, 2024 </p>
                                                </div>
                                                <div>
                                                    <p className={`${styles.job__para}`}>Forklift Operator needed for Ras Gharib Concession</p>
                                                    <p className={`${styles.complete}`}>Completed</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </>
                            :
                            ''
                    }
                </div>
            </section>
        </>
    )
}

export default ShipperProfile
