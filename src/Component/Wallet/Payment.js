import React, { useState } from 'react'
import Sidebar from '../../Layout/Sidebar'
import styles from '../../Styles/wallet.module.css'
import Header from '../../Layout/Header'
import { Link } from 'react-router-dom'
import card from '../../assets/images/Magnetic Card.png'
import cash from '../../assets/images/123 3014.png'
const Payment = () => {
    const [active, setActive] = useState('pay-wallet')

    return (
        <>
            <Header />
            <section className={`${styles.home}`}>
                <Sidebar active='wallet' />
                <div className={`${styles.homeContainer}`}>
                    <Link to='' className={`${styles.back__link}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                            <path d="M18.7487 8.49969C18.7487 8.10187 18.5906 7.72034 18.3093 7.43903C18.028 7.15773 17.6465 6.99969 17.2487 6.99969H5.36868L9.30868 3.05969C9.57364 2.77534 9.71789 2.39925 9.71103 2.01065C9.70417 1.62205 9.54675 1.25128 9.27192 0.976449C8.9971 0.701623 8.62633 0.5442 8.23773 0.537343C7.84912 0.530487 7.47303 0.674733 7.18868 0.939693L0.68868 7.43969C0.407779 7.72094 0.25 8.10219 0.25 8.49969C0.25 8.89719 0.407779 9.27844 0.68868 9.55969L7.18868 16.0597C7.47303 16.3247 7.84912 16.4689 8.23773 16.462C8.62633 16.4552 8.9971 16.2978 9.27192 16.0229C9.54675 15.7481 9.70417 15.3773 9.71103 14.9887C9.71789 14.6001 9.57364 14.224 9.30868 13.9397L5.36868 9.99969H17.2487C17.6465 9.99969 18.028 9.84166 18.3093 9.56035C18.5906 9.27905 18.7487 8.89752 18.7487 8.49969Z" fill="#1C1A19" />
                        </svg>
                        Back
                    </Link>
                    <h3 className={`${styles.invoice__title}`}>Choose payment method:</h3>
                    <div className={`${styles.allpay}`}>
                        <div className={`${active === 'pay-wallet' ? styles.activepay : styles.pay}`} onClick={() => setActive('pay-wallet')}>
                            <h3 className={`${styles.pay__title}`}>Pay from Wallet</h3>
                            <div className={`${styles.fixed}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="69" viewBox="0 0 70 69" fill="none">
                                    <path d="M55.125 34.5C55.125 35.2625 54.8221 35.9938 54.2829 36.5329C53.7438 37.0721 53.0125 37.375 52.25 37.375C51.4875 37.375 50.7562 37.0721 50.2171 36.5329C49.6779 35.9938 49.375 35.2625 49.375 34.5C49.375 33.7375 49.6779 33.0062 50.2171 32.4671C50.7562 31.9279 51.4875 31.625 52.25 31.625C53.0125 31.625 53.7438 31.9279 54.2829 32.4671C54.8221 33.0062 55.125 33.7375 55.125 34.5Z" className={`${styles.active__icon}`} />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.089 9.34375H38.036C43.3202 9.34375 47.5063 9.34375 50.7809 9.78363C54.1504 10.2379 56.8787 11.1924 59.0321 13.3429C61.6886 16.0022 62.5367 19.5615 62.8444 24.1816C64.5033 24.909 65.7568 26.4529 65.8919 28.4079C65.9063 28.5832 65.9062 28.7701 65.9062 28.9426V40.0574C65.9062 40.2299 65.9062 40.4167 65.8948 40.5893C65.7568 42.5443 64.5033 44.091 62.8444 44.8213C62.5367 49.4385 61.6886 52.9977 59.0321 55.6571C56.8787 57.8076 54.1504 58.7621 50.7809 59.2164C47.5034 59.6562 43.3202 59.6562 38.036 59.6562H29.089C23.8048 59.6562 19.6188 59.6562 16.3441 59.2164C12.9746 58.7621 10.2463 57.8076 8.09288 55.6571C5.94238 53.5037 4.98787 50.7754 4.53363 47.4059C4.09375 44.1284 4.09375 39.9452 4.09375 34.661V34.339C4.09375 29.0548 4.09375 24.8688 4.53363 21.5941C4.98787 18.2246 5.94238 15.4962 8.09288 13.3429C10.2463 11.1924 12.9746 10.2379 16.3441 9.78363C19.6216 9.34375 23.8048 9.34375 29.089 9.34375ZM58.483 45.2812H52.9112C46.7444 45.2812 41.4659 40.6007 41.4659 34.5C41.4659 28.3993 46.7444 23.7188 52.9084 23.7188H58.4801C58.1524 19.8634 57.4135 17.825 55.9789 16.3933C54.7628 15.1771 53.0952 14.4469 50.203 14.0587C47.2504 13.662 43.3547 13.6562 37.8721 13.6562H29.2471C23.7645 13.6562 19.8718 13.662 16.9134 14.0587C14.024 14.4469 12.3565 15.1771 11.1404 16.3933C9.92425 17.6094 9.194 19.2769 8.80587 22.1691C8.40912 25.1246 8.40338 29.0174 8.40338 34.5C8.40338 39.9826 8.40912 43.8783 8.80587 46.8338C9.194 49.7231 9.92425 51.3906 11.1404 52.6068C12.3565 53.8229 14.024 54.5531 16.9163 54.9413C19.8717 55.338 23.7645 55.3438 29.2471 55.3438H37.8721C43.3547 55.3438 47.2504 55.338 50.2059 54.9413C53.0952 54.5531 54.7628 53.8229 55.9789 52.6068C57.4135 51.175 58.1552 49.1395 58.483 45.2812ZM15.5938 23C15.5938 22.4281 15.8209 21.8797 16.2253 21.4753C16.6297 21.0709 17.1781 20.8438 17.75 20.8438H29.25C29.8219 20.8438 30.3703 21.0709 30.7747 21.4753C31.1791 21.8797 31.4062 22.4281 31.4062 23C31.4062 23.5719 31.1791 24.1203 30.7747 24.5247C30.3703 24.9291 29.8219 25.1562 29.25 25.1562H17.75C17.1781 25.1562 16.6297 24.9291 16.2253 24.5247C15.8209 24.1203 15.5938 23.5719 15.5938 23ZM60.6565 28.0312H52.9112C48.8172 28.0312 45.7784 31.0759 45.7784 34.5C45.7784 37.9241 48.8172 40.9688 52.9084 40.9688H60.7226C61.3149 40.9314 61.5708 40.5317 61.5909 40.2902V28.7098C61.5708 28.4683 61.3149 28.0686 60.7226 28.0341L60.6565 28.0312Z" className={`${styles.active__icon}`} />
                                </svg>
                                <div className={`${styles.pay__para}`}>
                                    <h5>Wallet Balance</h5>
                                    <p>$203,772.77</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${active === 'other-payment' ? styles.activepay : styles.pay}`} onClick={() => setActive('other-payment')}>
                            <h3 className={`${styles.pay__title}`}>Other payment</h3>
                            <div className={`${styles.fixed}`}>
                                <div className={`${styles.svg}`}>
                                    <span>Options</span>
                                </div>
                                <div className={`${styles.pay__para2}`}>
                                    <div>
                                        <img alt='' src={card} />
                                        <span>credt/debit card</span>
                                    </div>
                                    <div>
                                        <img alt='' src={cash} />
                                        <span>Trauxit Cash</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.link}`}>
                        <Link to={`/${active}`} className={`${styles.pay__link}`}>Continue</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Payment
