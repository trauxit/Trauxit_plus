import React from 'react'
import Sidebar from '../../Layout/Sidebar'
import styles from '../../Styles/msg.module.css'
import { Col, Row } from 'react-bootstrap'
import user from '../../assets/images/Rectangle 3463618.png'
import rec from '../../assets/images/2.svg'
import check from '../../assets/images/ri_check-double-fill.svg'
import right from '../../assets/images/s.svg'
import online from '../../assets/images/Status.svg'
import search from '../../assets/images/majesticons_search-line.svg'
import mute from '../../assets/images/mingcute_notification-off-line.svg'
import action from '../../assets/images/charm_menu-kebab.svg'
import logo from '../../assets/images/APP.png'
import Form from 'react-bootstrap/Form';
import Header from '../../Layout/Header'
import { useTranslation } from 'react-i18next';
import one from '../../assets/images/one.png'
import three from '../../assets/images/tjree.png'

const Msg = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Header />
            <section className={`${styles.home}`}>
                <Sidebar active='message' />
                <div className={`${styles.homeContainer}`}>
                    <p className={`${styles.new__title}`}>{t("Recent News:")} <span className={`${styles.new__para}`}> {t("El Molla Inspects MIDOR Expansion Project. Sunday, 31st December 2023")}</span> </p>
                    <Row>
                        <Col xl='4' lg='4'>
                            <div className={`${styles.msg__side}`}>
                                <div className={`${styles.inputBox_container}`}>
                                    <svg className={`${styles.search_icon}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" alt="search icon">
                                        <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z" className={`${styles.ico}`}>
                                        </path>
                                    </svg>
                                    <input className={`${styles.inputBox}`} id="inputBox" type="text" placeholder={t("Search....")} />
                                </div>
                                <h3 className={`${styles.pin__msg}`}>{t("Pinned Messages")}</h3>
                                <div className={`${styles.chat}`}>
                                    <div className={`${styles.user__chat}`}>
                                        <img alt='' src={three} className={`${styles.user}`} />
                                        <div>
                                            <h3>Ashraf Ibrahim</h3>
                                            <p>Hi Trauxit, can you please </p>
                                        </div>
                                    </div>
                                    <div className={`${styles.name}`}>
                                        <p>2min ago</p>
                                        <div className={`${styles.num}`}>
                                            <img alt='' src={rec} />
                                            <p>3</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.chat}`}>
                                    <div className={`${styles.user__chat}`}>
                                        <img alt='' src={user} className={`${styles.user}`} />
                                        <div>
                                            <h3>Mahmoud ali</h3>
                                            <p>Confirmed, tomorrow then </p>
                                        </div>
                                    </div>
                                    <div className={`${styles.name}`}>
                                        <p>2min ago</p>
                                        <div className={`${styles.num}`}>
                                            <img alt='' src={check} />
                                        </div>
                                    </div>
                                </div>
                                <h3 className={`${styles.pin__msg}`}>{t("Recent Messages")}</h3>
                                <div className={`${styles.chat}`}>
                                    <div className={`${styles.user__chat}`}>
                                        <img alt='' src={one} className={`${styles.user}`} />
                                        <div>
                                            <h3>Ola Adel</h3>
                                            <p>Hi Trauxit, can you please </p>
                                        </div>
                                    </div>
                                    <div className={`${styles.name}`}>
                                        <p>2min ago</p>
                                        <div className={`${styles.num}`}>
                                            <img alt='' src={rec} />
                                            <p>3</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.chat}`}>
                                    <div className={`${styles.user__chat}`}>
                                        <img alt='' src={three} className={`${styles.user}`} />
                                        <div>
                                            <h3>ahmed adel</h3>
                                            <p>Hi Trauxit, can you please </p>
                                        </div>
                                    </div>
                                    <div className={`${styles.name}`}>
                                        <p>2min ago</p>
                                        <div className={`${styles.num}`}>
                                            <img alt='' src={check} />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.chat}`}>
                                    <div className={`${styles.user__chat}`}>
                                        <img alt='' src={one} className={`${styles.user}`} />
                                        <div>
                                            <h3>Basmala Ayman</h3>
                                            <p>Confirmed, tomorrow then </p>
                                        </div>
                                    </div>
                                    <div className={`${styles.name}`}>
                                        <p>2min ago</p>
                                        <div className={`${styles.num}`}>
                                            <img alt='' src={right} />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.chat}`}>
                                    <div className={`${styles.user__chat}`}>
                                        <img alt='' src={user} className={`${styles.user}`} />
                                        <div>
                                            <h3>Ashraf Boma</h3>
                                            <p>Hi Trauxit, can you please </p>
                                        </div>
                                    </div>
                                    <div className={`${styles.name}`}>
                                        <p>2min ago</p>
                                        <div className={`${styles.num}`}>
                                            <img alt='' src={rec} />
                                            <p>3</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col xl='8' lg='8'>
                            <div className={`${styles.msg__content}`}>
                                <div className={`${styles.top}`}>
                                    <div className={`${styles.user__chat}`}>
                                        <div className={`${styles.online}`}>
                                            <img alt='' src={three} className={`${styles.user}`} />
                                            <img alt='' src={online} className={`${styles.online__img}`} />
                                        </div>
                                        <div>
                                            <h3>Ashraf adel</h3>
                                            <p>Online</p>
                                        </div>
                                    </div>
                                    <div className={`${styles.action__body}`}>
                                        <img alt='' src={search} />
                                        <img alt='' src={mute} />
                                        <img alt='' src={action} />
                                    </div>
                                </div>
                                <div className={`${styles.received}`}>
                                    <div className={`${styles.received__body}`}>
                                        <img alt=' ' src={user} />
                                        <p>Hi Trauxit, can you please check our proposal? We have updated our prices as requested yesterday</p>
                                    </div>
                                    <div className={`${styles.seen}`}>
                                        <span>2min ago </span>
                                        <img alt='' src={check} />
                                    </div>
                                </div>
                                <div className={`${styles.received}`}>
                                    <div className={`${styles.received__body}`}>
                                        <img alt=' ' src={user} />
                                        <p>We tried to reach you on the phone but we didn’t get any answer yet.</p>
                                    </div>
                                    <div className={`${styles.seen}`}>
                                        <span>2min ago </span>
                                        <img alt='' src={check} />
                                    </div>
                                </div>
                                <div className='mt-5 mb-5'>
                                    <div className={`${styles.send}`}>
                                        <div className={`${styles.send__body}`}>
                                            <p>Can we reschedule the meeting for tomorrow please?</p>
                                            <img alt=' ' src={logo} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form__send">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Control as="textarea" rows={2} placeholder={t("Write your message here....")} />
                                        </Form.Group>
                                    </Form>
                                </div>
                                <div className={`${styles.icons}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                                        <path d="M4.27394 0.599609C5.42594 0.599609 6.28994 0.779609 6.86594 1.19961C7.48994 1.61961 7.77794 2.33961 7.77794 3.35961C7.77794 3.95961 7.63394 4.49961 7.44194 4.91961C7.3331 5.12477 7.19174 5.29984 7.02662 5.434C6.8615 5.56817 6.67612 5.65856 6.48194 5.69961C6.75633 5.77973 7.01664 5.92208 7.24994 6.11961C7.44194 6.29961 7.63394 6.59961 7.77794 6.89961C7.92816 7.33423 7.99395 7.80712 7.96994 8.27961C7.98691 8.71308 7.92186 9.14544 7.78008 9.5416C7.6383 9.93775 7.42378 10.2865 7.15394 10.5596C6.47064 11.1696 5.63991 11.4663 4.80194 11.3996H1.58594V0.599609H4.27394ZM4.46594 4.85961C4.99394 4.85961 5.37794 4.79961 5.56994 4.55961C5.80994 4.37961 5.90594 4.01961 5.90594 3.65961C5.90594 3.23961 5.76194 2.93961 5.52194 2.75961C5.28194 2.57961 4.89794 2.45961 4.36994 2.45961H3.40994V4.85961H4.46594ZM3.40994 6.65961V9.59961H4.60994C5.13794 9.59961 5.56994 9.41961 5.76194 9.17961C6.00194 8.87961 6.09794 8.57961 6.09794 8.09961C6.10366 7.91825 6.07639 7.73763 6.01819 7.57134C5.95999 7.40506 5.87238 7.25744 5.76194 7.13961C5.52194 6.89961 5.13794 6.77961 4.56194 6.77961H3.36194L3.40994 6.65961Z" fill="#979C9E" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M7.33073 3.33398H11.3307M4.66406 12.6673H8.66406M9.33073 3.33398L6.66406 12.6673" stroke="#979C9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M4.66536 3.33301V6.66634C4.66536 7.5504 5.01655 8.39824 5.64168 9.02336C6.2668 9.64848 7.11464 9.99967 7.9987 9.99967C8.88275 9.99967 9.7306 9.64848 10.3557 9.02336C10.9808 8.39824 11.332 7.5504 11.332 6.66634V3.33301M3.33203 12.6663H12.6654" stroke="#979C9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12.5C2 12.3674 2.05268 12.2402 2.14645 12.1464C2.24021 12.0527 2.36739 12 2.5 12H9.5C9.63261 12 9.75979 12.0527 9.85355 12.1464C9.94732 12.2402 10 12.3674 10 12.5C10 12.6326 9.94732 12.7598 9.85355 12.8536C9.75979 12.9473 9.63261 13 9.5 13H2.5C2.36739 13 2.24021 12.9473 2.14645 12.8536C2.05268 12.7598 2 12.6326 2 12.5ZM2 9.5C2 9.36739 2.05268 9.24021 2.14645 9.14645C2.24021 9.05268 2.36739 9 2.5 9H13.5C13.6326 9 13.7598 9.05268 13.8536 9.14645C13.9473 9.24021 14 9.36739 14 9.5C14 9.63261 13.9473 9.75979 13.8536 9.85355C13.7598 9.94732 13.6326 10 13.5 10H2.5C2.36739 10 2.24021 9.94732 2.14645 9.85355C2.05268 9.75979 2 9.63261 2 9.5ZM2 6.5C2 6.36739 2.05268 6.24021 2.14645 6.14645C2.24021 6.05268 2.36739 6 2.5 6H9.5C9.63261 6 9.75979 6.05268 9.85355 6.14645C9.94732 6.24021 10 6.36739 10 6.5C10 6.63261 9.94732 6.75979 9.85355 6.85355C9.75979 6.94732 9.63261 7 9.5 7H2.5C2.36739 7 2.24021 6.94732 2.14645 6.85355C2.05268 6.75979 2 6.63261 2 6.5ZM2 3.5C2 3.36739 2.05268 3.24021 2.14645 3.14645C2.24021 3.05268 2.36739 3 2.5 3H13.5C13.6326 3 13.7598 3.05268 13.8536 3.14645C13.9473 3.24021 14 3.36739 14 3.5C14 3.63261 13.9473 3.75979 13.8536 3.85355C13.7598 3.94732 13.6326 4 13.5 4H2.5C2.36739 4 2.24021 3.94732 2.14645 3.85355C2.05268 3.75979 2 3.63261 2 3.5Z" fill="#979C9E" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 12.5C4 12.3674 4.05268 12.2402 4.14645 12.1464C4.24021 12.0527 4.36739 12 4.5 12H11.5C11.6326 12 11.7598 12.0527 11.8536 12.1464C11.9473 12.2402 12 12.3674 12 12.5C12 12.6326 11.9473 12.7598 11.8536 12.8536C11.7598 12.9473 11.6326 13 11.5 13H4.5C4.36739 13 4.24021 12.9473 4.14645 12.8536C4.05268 12.7598 4 12.6326 4 12.5ZM2 9.5C2 9.36739 2.05268 9.24021 2.14645 9.14645C2.24021 9.05268 2.36739 9 2.5 9H13.5C13.6326 9 13.7598 9.05268 13.8536 9.14645C13.9473 9.24021 14 9.36739 14 9.5C14 9.63261 13.9473 9.75979 13.8536 9.85355C13.7598 9.94732 13.6326 10 13.5 10H2.5C2.36739 10 2.24021 9.94732 2.14645 9.85355C2.05268 9.75979 2 9.63261 2 9.5ZM4 6.5C4 6.36739 4.05268 6.24021 4.14645 6.14645C4.24021 6.05268 4.36739 6 4.5 6H11.5C11.6326 6 11.7598 6.05268 11.8536 6.14645C11.9473 6.24021 12 6.36739 12 6.5C12 6.63261 11.9473 6.75979 11.8536 6.85355C11.7598 6.94732 11.6326 7 11.5 7H4.5C4.36739 7 4.24021 6.94732 4.14645 6.85355C4.05268 6.75979 4 6.63261 4 6.5ZM2 3.5C2 3.36739 2.05268 3.24021 2.14645 3.14645C2.24021 3.05268 2.36739 3 2.5 3H13.5C13.6326 3 13.7598 3.05268 13.8536 3.14645C13.9473 3.24021 14 3.36739 14 3.5C14 3.63261 13.9473 3.75979 13.8536 3.85355C13.7598 3.94732 13.6326 4 13.5 4H2.5C2.36739 4 2.24021 3.94732 2.14645 3.85355C2.05268 3.75979 2 3.63261 2 3.5Z" fill="#979C9E" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12.5C6 12.3674 6.05268 12.2402 6.14645 12.1464C6.24021 12.0527 6.36739 12 6.5 12H13.5C13.6326 12 13.7598 12.0527 13.8536 12.1464C13.9473 12.2402 14 12.3674 14 12.5C14 12.6326 13.9473 12.7598 13.8536 12.8536C13.7598 12.9473 13.6326 13 13.5 13H6.5C6.36739 13 6.24021 12.9473 6.14645 12.8536C6.05268 12.7598 6 12.6326 6 12.5ZM2 9.5C2 9.36739 2.05268 9.24021 2.14645 9.14645C2.24021 9.05268 2.36739 9 2.5 9H13.5C13.6326 9 13.7598 9.05268 13.8536 9.14645C13.9473 9.24021 14 9.36739 14 9.5C14 9.63261 13.9473 9.75979 13.8536 9.85355C13.7598 9.94732 13.6326 10 13.5 10H2.5C2.36739 10 2.24021 9.94732 2.14645 9.85355C2.05268 9.75979 2 9.63261 2 9.5ZM6 6.5C6 6.36739 6.05268 6.24021 6.14645 6.14645C6.24021 6.05268 6.36739 6 6.5 6H13.5C13.6326 6 13.7598 6.05268 13.8536 6.14645C13.9473 6.24021 14 6.36739 14 6.5C14 6.63261 13.9473 6.75979 13.8536 6.85355C13.7598 6.94732 13.6326 7 13.5 7H6.5C6.36739 7 6.24021 6.94732 6.14645 6.85355C6.05268 6.75979 6 6.63261 6 6.5ZM2 3.5C2 3.36739 2.05268 3.24021 2.14645 3.14645C2.24021 3.05268 2.36739 3 2.5 3H13.5C13.6326 3 13.7598 3.05268 13.8536 3.14645C13.9473 3.24021 14 3.36739 14 3.5C14 3.63261 13.9473 3.75979 13.8536 3.85355C13.7598 3.94732 13.6326 4 13.5 4H2.5C2.36739 4 2.24021 3.94732 2.14645 3.85355C2.05268 3.75979 2 3.63261 2 3.5Z" fill="#979C9E" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M3.86228 8.38756L8.38788 3.86196C8.838 3.41184 9.4485 3.15896 10.0851 3.15896C10.7217 3.15896 11.3322 3.41184 11.7823 3.86196C12.2324 4.31209 12.4853 4.92259 12.4853 5.55916C12.4853 6.19574 12.2324 6.80624 11.7823 7.25636L6.40788 12.63C6.18156 12.8486 5.87843 12.9695 5.5638 12.9668C5.24916 12.964 4.94819 12.8378 4.7257 12.6153C4.50321 12.3929 4.377 12.0919 4.37427 11.7772C4.37154 11.4626 4.49249 11.1595 4.71108 10.9332L9.51908 6.12516C9.59419 6.05016 9.63643 5.94839 9.6365 5.84225C9.63658 5.7361 9.59448 5.63427 9.51948 5.55916C9.44448 5.48405 9.34271 5.44182 9.23656 5.44174C9.13042 5.44167 9.02859 5.48376 8.95348 5.55876L4.14548 10.3668C3.77307 10.7423 3.56459 11.2502 3.56567 11.7791C3.56676 12.308 3.77731 12.8149 4.15126 13.189C4.5252 13.563 5.03209 13.7737 5.56101 13.775C6.08992 13.7762 6.59779 13.5679 6.97348 13.1956L12.3479 7.82196C12.9481 7.22183 13.2854 6.40784 13.2854 5.55905C13.2855 4.71026 12.9484 3.8962 12.3483 3.29596C11.7481 2.69573 10.9342 2.35847 10.0854 2.3584C9.23657 2.35832 8.42252 2.69543 7.82228 3.29556L3.29588 7.82196C3.22302 7.8974 3.1827 7.99845 3.18361 8.10332C3.18452 8.2082 3.22659 8.30853 3.30075 8.38269C3.37491 8.45685 3.47524 8.49892 3.58012 8.49983C3.685 8.50074 3.78684 8.46043 3.86228 8.38756Z" fill="#979C9E" />
                                    </svg>
                                </div>
                                <div className={`${styles.btns}`}>
                                    <button className={`${styles.cancel__btn}`}>
                                        {t("Cancel")}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M9.77051 8.97699C9.87618 9.08266 9.93554 9.22599 9.93554 9.37543C9.93554 9.52487 9.87618 9.66819 9.77051 9.77387C9.66483 9.87954 9.52151 9.9389 9.37207 9.9389C9.22263 9.93891 9.0793 9.87954 8.97363 9.77387L5.99754 6.79683L3.02051 9.77293C2.91483 9.8786 2.77151 9.93797 2.62207 9.93797C2.47263 9.93797 2.3293 9.8786 2.22363 9.77293C2.11796 9.66726 2.05859 9.52393 2.05859 9.37449C2.05859 9.22505 2.11796 9.08173 2.22363 8.97605L5.20066 5.99996L2.22457 3.02293C2.1189 2.91726 2.05953 2.77393 2.05953 2.62449C2.05953 2.47505 2.1189 2.33173 2.22457 2.22605C2.33024 2.12038 2.47356 2.06102 2.62301 2.06102C2.77245 2.06102 2.91577 2.12038 3.02144 2.22605L5.99754 5.20309L8.97457 2.22558C9.08024 2.11991 9.22356 2.06055 9.37301 2.06055C9.52245 2.06055 9.66577 2.11991 9.77144 2.22558C9.87712 2.33126 9.93648 2.47458 9.93648 2.62402C9.93648 2.77347 9.87712 2.91679 9.77144 3.02246L6.79441 5.99996L9.77051 8.97699Z" fill="#FF8201" />
                                        </svg>
                                    </button>
                                    <button className={`${styles.send__btn}`}>
                                        {t("Send")}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <g clip-path="url(#clip0_215_11739)">
                                                <path d="M10.1173 2.84329C10.3333 2.24579 9.75428 1.66679 9.15678 1.88329L1.85428 4.52429C1.25478 4.74129 1.18228 5.55929 1.73378 5.87879L4.06478 7.22829L6.14628 5.14679C6.24058 5.05571 6.36688 5.00531 6.49798 5.00645C6.62908 5.00759 6.75448 5.06018 6.84719 5.15288C6.93989 5.24558 6.99247 5.37099 6.99361 5.50209C6.99475 5.63319 6.94436 5.75949 6.85328 5.85379L4.77178 7.93529L6.12178 10.2663C6.44078 10.8178 7.25878 10.7448 7.47578 10.1458L10.1173 2.84329Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_215_11739">
                                                    <rect width="12" height="12" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

        </>
    )
}

export default Msg
