import React, { useState } from 'react'
import Sidebar from '../../Layout/Sidebar'
import styles from '../../Styles/wallet.module.css'
import Header from '../../Layout/Header'
import { Link } from 'react-router-dom'
import card from '../../assets/images/Magnetic Card.png'
import cash from '../../assets/images/123 3014.png'
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Box } from '@mantine/core';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const TopUp = () => {
    const [topping, setTopping] = useState("card")
    const form = useForm({
        initialValues: { name: '', email: '', age: 0 },

        // functions will be used to validate values at corresponding key
        validate: {
            name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
        },
    });
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                    <div className={`${styles.top__body}`}>
                        <h3 className={`${styles.top__title}`}>Top Up</h3>
                        <div className={`${styles.choose}`}>
                            <div>
                                <input
                                    type="radio"
                                    name="topping"
                                    value="card"
                                    id="card"
                                    checked={topping === "card"}
                                    onChange={() => setTopping("card")}
                                />
                                <label htmlFor="card">
                                    <img alt='' src={card} />
                                    <span>credt/debit card</span>
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="topping"
                                    value="cash"
                                    id="cash"
                                    checked={topping === "cash"}
                                    onChange={() => setTopping("cash")}

                                />
                                <label htmlFor="cash">
                                    <img alt='' src={cash} />
                                    <span>Trauxit Cash </span>
                                </label>
                            </div>
                        </div>
                        <form onSubmit={form.onSubmit(console.log)}>
                            <div className={`choose__input`}>
                                <TextInput label="Amount" placeholder="EX:$500" {...form.getInputProps('name')} />
                                <TextInput mt="sm" label="Name Of Card" placeholder="Name Of Card" {...form.getInputProps('email')} />
                                <div className={`${styles.card__input} card__input`}>
                                    <img alt='' src={card} className={`${styles.card__img}`} />
                                    <TextInput mt="sm" label="Card Number" placeholder="0000 0000 0000 0000" {...form.getInputProps('number')} />
                                </div>
                            </div>
                            <div className={`${styles.date} date`}>
                                <TextInput label="Expiry Date " placeholder="MM/YY" {...form.getInputProps('name')} />
                                <TextInput label="Security Code" placeholder="Cvv" {...form.getInputProps('email')} />
                            </div>
                            <div className={`${styles.remember}`}>
                                <p>Remember this Card for future Use</p>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <div class="slider">
                                        <div class="circle">
                                            <svg class="cross" viewBox="0 0 365.696 365.696" y="0" x="0" height="6" width="6" >
                                                <g>
                                                    <path data-original="#000000" fill="currentColor" d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"></path>
                                                </g>
                                            </svg>
                                            <svg class="checkmark" viewBox="0 0 24 24" y="0" x="0" height="10" width="10">
                                                <g>
                                                    <path class="" data-original="#000000" fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div className={`${styles.security}`}>
                                <h3>Payment Security</h3>
                                <p>TRAUXIT is Committed to protecting your payment information and only shares your credit card information with our payment service provider who agreed to safeguard your information</p>
                            </div>
                            <h3 className={`${styles.term}`}>Terms & Condition</h3>
                            <Button className={`${styles.con__btn}`} onClick={handleShow}>
                                Continue
                            </Button>

                            <Modal show={show} onHide={handleClose}>

                                <Modal.Body>
                                    <h3>Top Up</h3>
                                    <div className={`${styles.summary}`}>
                                        <h3>Summary</h3>

                                        <div>
                                            <h5>Amount:</h5>
                                            <p>500 dollar</p>
                                        </div>
                                        <div>
                                            <h5>Name Of Card:</h5>
                                            <p>Ola Adel</p>
                                        </div>
                                        <div>
                                            <h5>Card Number:</h5>
                                            <p>123445544344</p>
                                        </div>
                                        <div>
                                            <h5>Date:</h5>
                                            <p>10/5/2023</p>
                                        </div>

                                    </div>

                                    <Button className={`${styles.confirm__btn}`} onClick={handleClose}>
                                        Confirmation
                                    </Button>
                                </Modal.Body>
                            </Modal>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopUp
