import React from 'react'
import styles from '../../Styles/profile.module.css'
import { Link } from 'react-router-dom'
import frame from '../../assets/images/Frame 1984078003.png'
import { Col, Row } from 'react-bootstrap'
import img from '../../assets/images/image 4.png'
import star from '../../assets/images/star-icon.svg'
import user from '../../assets/images/Rectangle 3463660.png'
const Profile = () => {
    return (
        <>
            <section className={`${styles.sec}`}>
                <Link to='' className={`${styles.back__link}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                        <path d="M18.7487 8.49969C18.7487 8.10187 18.5906 7.72034 18.3093 7.43903C18.028 7.15773 17.6465 6.99969 17.2487 6.99969H5.36868L9.30868 3.05969C9.57364 2.77534 9.71789 2.39925 9.71103 2.01065C9.70417 1.62205 9.54675 1.25128 9.27192 0.976449C8.9971 0.701623 8.62633 0.5442 8.23773 0.537343C7.84912 0.530487 7.47303 0.674733 7.18868 0.939693L0.68868 7.43969C0.407779 7.72094 0.25 8.10219 0.25 8.49969C0.25 8.89719 0.407779 9.27844 0.68868 9.55969L7.18868 16.0597C7.47303 16.3247 7.84912 16.4689 8.23773 16.462C8.62633 16.4552 8.9971 16.2978 9.27192 16.0229C9.54675 15.7481 9.70417 15.3773 9.71103 14.9887C9.71789 14.6001 9.57364 14.224 9.30868 13.9397L5.36868 9.99969H17.2487C17.6465 9.99969 18.028 9.84166 18.3093 9.56035C18.5906 9.27905 18.7487 8.89752 18.7487 8.49969Z" fill="#1C1A19" />
                    </svg>
                    Back
                </Link>
                <div className={`${styles.box__user}`}>
                    <div className={`${styles.user__body}`}>
                        <div>
                            <img alt='' src={frame} />
                        </div>
                        <div>
                            <h3 className={`${styles.user__title}`}>Owner Operator
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M7.16537 18.75L5.58203 16.0833L2.58203 15.4167L2.8737 12.3333L0.832031 10L2.8737 7.66667L2.58203 4.58333L5.58203 3.91667L7.16537 1.25L9.9987 2.45833L12.832 1.25L14.4154 3.91667L17.4154 4.58333L17.1237 7.66667L19.1654 10L17.1237 12.3333L17.4154 15.4167L14.4154 16.0833L12.832 18.75L9.9987 17.5417L7.16537 18.75ZM9.1237 12.9583L13.832 8.25L12.6654 7.04167L9.1237 10.5833L7.33203 8.83333L6.16536 10L9.1237 12.9583Z" fill="#FF8201" />
                                </svg>
                            </h3>
                            <h6 className={`${styles.name}`}>Ashraf Boma</h6>
                            <p className={`${styles.user__para}`}>is an experienced and dedicated carrier, providing reliable transportation solutions with a focus on customer satisfaction.</p>
                            <div>
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
                                <Link className={`${styles.link}`}>
                                    Video Call
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M8.1 11.2V12.8C8.1 13.0267 8.1768 13.2168 8.3304 13.3704C8.484 13.524 8.67387 13.6005 8.9 13.6C9.12667 13.6 9.3168 13.5232 9.4704 13.3696C9.624 13.216 9.70053 13.0261 9.7 12.8V11.2H11.3C11.5267 11.2 11.7168 11.1232 11.8704 10.9696C12.024 10.816 12.1005 10.6261 12.1 10.4C12.1 10.1733 12.0232 9.98347 11.8696 9.8304C11.716 9.67733 11.5261 9.60053 11.3 9.6H9.7V8C9.7 7.77333 9.6232 7.58347 9.4696 7.4304C9.316 7.27733 9.12613 7.20053 8.9 7.2C8.67333 7.2 8.48347 7.2768 8.3304 7.4304C8.17733 7.584 8.10053 7.77387 8.1 8V9.6H6.5C6.27333 9.6 6.08347 9.6768 5.9304 9.8304C5.77733 9.984 5.70053 10.1739 5.7 10.4C5.7 10.6267 5.7768 10.8168 5.9304 10.9704C6.084 11.124 6.27387 11.2005 6.5 11.2H8.1ZM4.1 16.8C3.66 16.8 3.28347 16.6435 2.9704 16.3304C2.65733 16.0173 2.50053 15.6405 2.5 15.2V5.6C2.5 5.16 2.6568 4.78347 2.9704 4.4704C3.284 4.15733 3.66053 4.00053 4.1 4H13.7C14.14 4 14.5168 4.1568 14.8304 4.4704C15.144 4.784 15.3005 5.16053 15.3 5.6V9.2L17.82 6.68C17.9533 6.54667 18.1 6.51333 18.26 6.58C18.42 6.64667 18.5 6.77333 18.5 6.96V13.84C18.5 14.0267 18.42 14.1533 18.26 14.22C18.1 14.2867 17.9533 14.2533 17.82 14.12L15.3 11.6V15.2C15.3 15.64 15.1435 16.0168 14.8304 16.3304C14.5173 16.644 14.1405 16.8005 13.7 16.8H4.1ZM4.1 15.2H13.7V5.6H4.1V15.2Z" fill="white" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className={`${styles.right}`}>
                        <div>
                            <Link className={`${styles.suspend}`}>Suspend Account</Link>
                            <Link className={`${styles.block}`}>
                                Block Account
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                    <path d="M8.5026 1.33203C4.8226 1.33203 1.83594 4.3187 1.83594 7.9987C1.83594 11.6787 4.8226 14.6654 8.5026 14.6654C12.1826 14.6654 15.1693 11.6787 15.1693 7.9987C15.1693 4.3187 12.1826 1.33203 8.5026 1.33203ZM3.16927 7.9987C3.16927 5.05203 5.55594 2.66536 8.5026 2.66536C9.73594 2.66536 10.8693 3.08536 11.7693 3.79203L4.29594 11.2654C3.56378 10.3341 3.16686 9.18329 3.16927 7.9987ZM8.5026 13.332C7.26927 13.332 6.13594 12.912 5.23594 12.2054L12.7093 4.73203C13.4414 5.66327 13.8383 6.81411 13.8359 7.9987C13.8359 10.9454 11.4493 13.332 8.5026 13.332Z" fill="white" />
                                </svg>
                            </Link>
                        </div>
                        <div className={`${styles.numbers}`}>
                            <div>
                                <h3>234</h3>
                                <p>Trips</p>
                            </div>
                            <div>
                                <h3>4.8</h3>
                                <p>Ratings</p>
                            </div>
                            <div>
                                <h3>$12/hr</h3>
                                <p>Rate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${styles.sec2}`}>
                <Row className={`${styles.row}`}>
                    <Col className={`${styles.col}`}>
                        <h3>Profile Summary</h3>
                        <div>
                            <h3>USDOT NUMBER:</h3>
                            <p>12345678</p>
                        </div>
                        <div>
                            <h3>Language Spoken:</h3>
                            <p>English</p>
                        </div>
                        <div>
                            <h3>Homebase</h3>
                            <p>12345678</p>
                        </div>
                        <div>
                            <h3>MC NUMBER:</h3>
                            <p>9876545</p>
                        </div>
                        <div>
                            <h3>Insurance Certificate:</h3>
                            <p>View</p>
                        </div>
                        <div>
                            <h3>Safety Rating:</h3>
                            <p>Satisfactory</p>
                        </div>
                        <div>
                            <h3>Operating Authority:</h3>
                            <p>Authorized.</p>
                        </div>
                        <div>
                            <h3>Daily driving hours:</h3>
                            <p>8hr</p>
                        </div>
                        <div>
                            <h3>Loss and Damage Rates</h3>
                            <p>2%</p>
                        </div>
                    </Col>
                    <Col className={`${styles.col}`}>
                        <h3>Carrier Details</h3>
                        <img alt='' src={img} className={`${styles.img}`} />
                        <h3 className={`${styles.capacity}`}>Capacity and Availability:</h3>
                        <div>
                            <h3> truck type:</h3>
                            <p>Large Truck</p>
                        </div>
                        <div>
                            <h3>Capacity:</h3>
                            <p>10 tons</p>
                        </div>
                        <div>
                            <h3>Available Loading Times:</h3>
                            <p>8:00 AM - 5:00 PM</p>
                        </div>
                        <div>
                            <h3>Maximum Allowed Weight:</h3>
                            <p>20 tons</p>
                        </div>
                        <div>
                            <h3>Insurance and Licenses:</h3>
                            <p>Up-to-date</p>
                        </div>
                        <div>
                            <h3>Driving Hours:</h3>
                            <p>	11 hours driving, 10 hours rest</p>
                        </div>
                        <div>
                            <h3 className={`${styles.h__title}`}>Performance Record and Safety Rates</h3>
                            <p className={`${styles.h__para}`}>On-time deliveries, low accident rate</p>
                        </div>
                        <h3 className={`${styles.capacity}`}>Previous Shipping Details:</h3>
                        <div>
                            <h3>Number of Shipments</h3>
                            <p>10</p>
                        </div>
                        <div>
                            <h3>Destinations</h3>
                            <p>	Various</p>
                        </div>
                        <div>
                            <h3>Sizes</h3>
                            <p>	Various</p>
                        </div>
                        <div>
                            <h3>Weights</h3>
                            <p>	Various</p>
                        </div>
                    </Col>
                    <Col className={`${styles.col}`}>
                        <div className={`${styles.all}`}>
                            <h3>Reviews</h3>
                            <h3>View All</h3>
                        </div>
                        <div className={`${styles.review}`}>
                            <div className={`${styles.review__body}`}>
                                <div className={`${styles.review__user}`}>
                                    <img alt='' src={user} />
                                    <div className={`${styles.user__name}`}>
                                        <h3>Mohamed adel</h3>
                                        <p>Excellent
                                            <span className='ml-4'>
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
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
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
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
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
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
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
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
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
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
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
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
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
                                                <img alt='' src={star} />
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <p>12/october/2023</p>
                            </div>
                            <p className={`${styles.body__para}`}>The carrier provided exceptional service, ensuring timely delivery and handling goods with care. Their communication was excellent, and their professionalism was evident throughout the process. Highly recommended for any shipping needs.</p>
                        </div>
                    </Col>
                </Row>
            </section>

        </>
    )
}

export default Profile
